# Revisión SEO — 28/10/2026

## Enfoque

La página responde a búsquedas locales de carpintería, cocinas, alacenas y muebles a medida en Rosario y Villa Gobernador Gálvez. Mantiene el título de pestaña pedido por el usuario: «Maoro Carpintería | Muebles a medida». La descripción visible de portada identifica el servicio y las zonas sin repetir palabras de manera artificial.

## Implementado

- URL canónica absoluta de producción y coincidencia con `og:url`, `sitemap.xml` y los datos estructurados.
- `robots.txt` público que declara el sitemap. Sitemap con la única página que existe; sin páginas ficticias ni fechas `lastmod` que podrían quedar desactualizadas.
- Metadatos de descripción y de vista previa social coherentes con el contenido; imagen local de la alacena con dimensiones y texto alternativo.
- Datos estructurados `WebSite` para el nombre Maoro y `HomeAndConstructionBusiness` para los servicios, contacto, áreas atendidas y horario confirmado de lunes a viernes. El sábado se expresa en la página sin inventar una hora de apertura.
- URL antigua `/index.html` redirigida de manera permanente a `/`. Las dos URL públicas antiguas de la foto del zapatero redirigen a los archivos con el nombre «rebatible».
- Título, descripción, texto alternativo y nombre de archivo de la foto actualizados a vocabulario argentino. Los originales y archivos históricos conservan su nombre de procedencia.
- Contenido principal, tarjetas y datos de contacto presentes en el HTML inicial, legibles sin depender de JavaScript.

## Pendiente de información o acceso

- Confirmar con Alberto la localidad exacta de España 6321 y la franja de los sábados antes de añadir esos datos precisos al marcado estructurado.
- Cuando se elija dominio definitivo, actualizar en conjunto URL canónica, sitemap, robots, Open Graph, Twitter y URLs/identificadores de JSON-LD. Después conviene redirigir permanentemente el dominio anterior al nuevo.
- Verificar la propiedad definitiva en Google Search Console, enviar el sitemap y revisar la indexación y las consultas reales. El sitemap por sí solo no garantiza indexación.
- Si Alberto tiene una ficha de Perfil de Empresa en Google, mantener allí nombre, dirección, teléfono, horario, zona y enlace web consistentes con la página. No se creó ni modificó una ficha sin sus datos confirmados.

La API pública de PageSpeed Insights devolvió `429` por cuota diaria agotada durante esta revisión; no se obtuvo un puntaje móvil de Lighthouse. Las comprobaciones de HTML, archivos y redirecciones se hicieron directamente sobre producción.

## Criterios consultados

- [Guía básica de SEO de Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide): títulos y descripciones claros, texto e imágenes útiles.
- [Canonicals](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls): URL preferida coherente entre la página y el sitemap.
- [Sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap): URLs absolutas de páginas que se quieren indexar.
- [Datos estructurados de negocio local](https://developers.google.com/search/docs/appearance/structured-data/local-business): datos reales y horario exacto solo cuando está confirmado.
- [Nombre del sitio](https://developers.google.com/search/docs/appearance/site-names): `WebSite` en la portada con nombre y URL.
- [SEO de imágenes](https://developers.google.com/search/docs/appearance/google-images): nombres descriptivos, contexto y texto alternativo.
- [Google Search Console](https://developers.google.com/search/docs/monitor-debug/search-console-start): verificación, sitemap y seguimiento posterior.
