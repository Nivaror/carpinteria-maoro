# Maoro Carpintería — landing page

Sitio estático (HTML + CSS + JS). Sin build, sin dependencias de runtime. Abrir
`index.html` en el navegador alcanza para verlo.

## Estructura

```
index.html          → todo el contenido y SEO
css/styles.css      → estilos (mobile-first)
js/main.js          → nav, reveal, filtros, lightbox, formulario → WhatsApp
assets/img/         → fotos optimizadas (WebP + JPG fallback)
assets/fonts/       → Fraunces + Inter (woff2) + OFL.txt
assets/favicon.svg  → monograma M
og-image.jpg         → 1200×630 para redes
robots.txt, sitemap.xml, site.webmanifest
AGENTS.md           → fuente de verdad del proyecto
```

## Cómo editar

- **Datos de contacto** (WhatsApp, email, taller, horario, zona): buscar el bloque
  `<!-- DATOS: editar acá -->` en `index.html` y la constante `WA` en `js/main.js`.
- **Textos**: directamente en `index.html`.
- **Fotos**: reemplazar los archivos en `assets/img/` manteniendo los nombres, o
  actualizar los `srcset` del HTML. Ver la guía de encuadre en `AGENTS.md` §5.
- **Plazos de entrega**: el texto vive en una sola línea dentro de `#proceso`
  (`process-note`). Borrar la línea si no se quiere mostrar.

## Deploy

Arrastrar la carpeta a Netlify Drop o publicar en GitHub Pages. Ambos gratis.
Antes de desplegar, preguntar al desarrollador.

Registrar el dominio `maorocarpinteria.com` cuando corresponda (libre al
2026-10-26). Configurar redirect de `www` al apex.

## Reglas

Ver `AGENTS.md`. En resumen: no inventar medidas/plazos/precios/reseñas, no
ofrecer puertas/ventanas/reparaciones, no agregar redes sociales, no publicar
precios.
