import { readFile, writeFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const jobs = JSON.parse(await readFile(new URL('referencias/trabajos-seleccionados.json', root), 'utf8'));
const file = new URL('dist/index.html', root);
let html = await readFile(file, 'utf8');
const escape = (value) => String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const cards = jobs.map((job, i) => `
          <button class="project${i === 0 || (jobs.length === 4 && i === 3) ? ' project-wide' : ''}" data-category="${escape(job.category)}" data-image="assets/${escape(job.image || job.slug)}.webp" data-title="${escape(job.title)}" data-description="${escape(job.description)}" aria-label="Ampliar: ${escape(job.title)}">
            <span class="project-image">
              <img src="assets/${escape(job.image || job.slug)}${i === 0 ? '' : '-small'}.webp" alt="${escape(job.alt)}" width="${job.width || 1204}" height="${job.height || 1600}" loading="eager" fetchpriority="low" decoding="async" style="object-position:${escape(job.position)}">
              <span class="project-view"><svg aria-hidden="true" class="icon"><use href="#i-diagonal"/></svg></span>
              <span class="project-chip">${escape(job.label)}</span>
            </span>
            <span class="project-caption"><span>${escape(job.title)}</span><span>${String(i + 1).padStart(2, '0')}</span></span>
          </button>`).join('\n');
const start = '<!-- gallery:start -->';
const end = '<!-- gallery:end -->';
if (!html.includes(start) || !html.includes(end)) throw new Error('Faltan los marcadores de galería en index.html.');
html = html.slice(0, html.indexOf(start) + start.length) + cards + '\n          ' + html.slice(html.indexOf(end));
html = html.replace(/Mostrando \d+ trabajos\./, `Mostrando ${jobs.length} trabajos.`);
// La primera pieza es también la portada; mantiene sus recursos y metadatos alineados.
const featured = jobs[0];
const featuredImage = `assets/${featured.image || featured.slug}.webp`;
html = html.replace(/<img class="hero-image"[^>]*>/, `<img class="hero-image" src="${escape(featuredImage)}" alt="${escape(featured.alt)}" width="${featured.width}" height="${featured.height}" fetchpriority="high">`);
html = html.replace(/<link rel="preload" as="image"[^>]*>/, `<link rel="preload" as="image" href="${escape(featuredImage)}" fetchpriority="high">`);
html = html.replace(/<span class="hero-image-number">[^<]*<\/span>/, `<span class="hero-image-number">01 / ${escape(featured.title.toLocaleUpperCase('es'))}</span>`);
html = html.replace(/<img id="lightbox-image"[^>]*>/, `<img id="lightbox-image" src="${escape(featuredImage)}" alt="" width="${featured.width}" height="${featured.height}">`);
const siteUrl = html.match(/<meta property="og:url" content="([^"]+)"/)?.[1];
const socialImage = siteUrl ? new URL(featuredImage, siteUrl).href : featuredImage;
html = html.replace(/<meta property="og:image"[^>]*>/, `<meta property="og:image" content="${escape(socialImage)}">`);
html = html.replace(/<meta property="og:image:alt"[^>]*>/, `<meta property="og:image:alt" content="${escape(featured.alt)}">`);
await writeFile(file, html);
console.log(`Galería actualizada: ${jobs.length} trabajos revisados.`);
