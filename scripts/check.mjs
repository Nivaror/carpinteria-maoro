import { readFile, stat } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const html = await readFile(resolve(root, 'index.html'), 'utf8');
const css = await readFile(resolve(root, 'styles.css'), 'utf8');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
const errors = [];
if ((html.match(/<option\b/g) || []).length !== (html.match(/<\/option>/g) || []).length) errors.push('Hay opciones de formulario con etiquetas sin cerrar.');
if (ids.length !== new Set(ids).size) errors.push('IDs duplicados en el HTML.');
for (const match of html.matchAll(/(?:href|aria-controls)="#?([^"\s]+)"/g)) {
  if (match[0].includes('href="#') && !ids.includes(match[1])) errors.push(`Ancla inexistente: ${match[1]}`);
}
const paths = [...html.matchAll(/(?:src|href|data-image)="([^"#]+)"/g)].map((m) => m[1]);
for (const match of css.matchAll(/url\(['"]?([^)'"\s]+)['"]?\)/g)) paths.push(match[1]);
for (const path of new Set(paths.filter((path) => !/^(https?:|mailto:|tel:|data:)/.test(path)))) {
  try { await stat(resolve(root, path)); } catch { errors.push(`Falta el archivo: ${path}`); }
}
for (const match of html.matchAll(/href="(https:\/\/wa\.me\/[^"?]+)/g)) {
  if (match[1] !== 'https://wa.me/5493413012805') errors.push(`Número de WhatsApp inesperado: ${match[1]}`);
}
for (const match of html.matchAll(/<img\b[^>]*>/g)) {
  if (!/\balt="/.test(match[0])) errors.push('Imagen sin texto alternativo.');
  if (!/\bwidth="/.test(match[0]) || !/\bheight="/.test(match[0])) errors.push('Imagen sin dimensiones.');
}
const structured = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
try { JSON.parse(structured); } catch { errors.push('Datos estructurados inválidos.'); }
if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
else console.log(`Correcto: archivos, anclas, textos alternativos, datos estructurados y WhatsApp (+54 9 3413 01-2805). ${ids.length} IDs únicos.`);
