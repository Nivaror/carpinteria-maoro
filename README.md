# Maoro Carpintería

Landing para el taller de Alberto, creada a partir del formulario y del álbum de fotografías compartidos el 26/10/2026.

## Ver la página

Versión publicada en Vercel: **https://maoro-carpinteria.vercel.app/**. Proyecto `maoro-carpinteria` del equipo `nivaror`. Código fuente en el repositorio público [Nivaror/carpinteria-maoro](https://github.com/Nivaror/carpinteria-maoro).

La versión vigente conserva la portada con la alacena abierta, cinco trabajos con sus entornos originales, el formulario ampliado y la mejora del desplazamiento. El título de la pestaña es «Maoro Carpintería | Muebles a medida». El 28/10/2026 se publicó una revisión de SEO y se cambió el nombre público del zapatero a «rebatible».

Desde esta carpeta, ejecutá:

```powershell
npm start
```

Abrí **http://127.0.0.1:4173/**. No hace falta instalar dependencias. Requiere Node.js 20 o posterior. También podés abrir `dist/index.html` directamente para ver el diseño.

## Archivos

- `dist/index.html`: contenido, estructura, metadatos y datos del negocio.
- `dist/styles.css`: diseño, textura de madera y adaptación a celulares.
- `dist/app.js`: menú móvil, filtros, ampliación de imágenes y consulta por WhatsApp.
- `dist/robots.txt` y `dist/sitemap.xml`: acceso de rastreadores y URL canónica.
- `dist/assets/trabajos/`: las cinco fotos de muebles vigentes y sus miniaturas en WebP, guardadas dentro del proyecto.
- `dist/assets/`: foto de Alberto en su entorno original, textura SVG y favicon.
- `referencias/`: selección del álbum y procedencia del material, para uso interno.

La revisión fotográfica actual está documentada en `referencias/FOTOS-LOCALES.md`. La galería muestra cinco trabajos: alacena blanca con extremos abiertos, guardado en blanco y gris, tocador con espejo e iluminación, zapatero rebatible y cocina negra instalada en L. La alacena abierta es también la portada. Los originales se conservan en `referencias/fotos-originales/`, las ediciones completas en `referencias/ediciones-naturales/` y los archivos para la web en `dist/assets/trabajos/`. Ninguna foto de la página se carga desde Google Fotos ni Googleusercontent.

Para modificar títulos, descripciones o recortes de la galería, editá `referencias/trabajos-seleccionados.json` y ejecutá `npm run gallery`.

La carpeta **dist** contiene el sitio completo para subir a un hosting estático. Los archivos de `referencias` son internos y no forman parte de la web pública.

## Funcionalidad

- WhatsApp: **+54 9 3413 01-2805**; enlace normalizado `https://wa.me/5493413012805`.
- Formulario con nombre, nueve opciones de localidad/zona, barrio opcional, 21 tipos de consulta y descripción. Las zonas de Rosario están agrupadas y se incluye Villa Gobernador Gálvez. Otra localidad solicita su nombre y aclara que hay que consultar cobertura. Un desplegable opcional permite sumar medidas y color/estilo. Abre WhatsApp con un mensaje preparado; el visitante lo revisa y lo envía. No usa un servidor de correo ni guarda consultas.
- Galería con filtros, fotos ampliables y controles por teclado. Escape cierra la ampliación; las flechas cambian de foto.
- Preguntas frecuentes desplegables, menú móvil y accesos rápidos de contacto.
- Detalles de madera en el encabezado, marco y placa de portada, títulos de sección, franja de servicios, tarjetas, cabecera del formulario y pie; sellos con anillos y marcas de regla.
- Animaciones de entrada al recorrer la página, con una sola aparición por elemento y pequeños desfases. Se desactivan con la preferencia de movimiento reducido del sistema. La página conserva el contenido visible si JavaScript no está disponible.
- Apertura suave del menú y de los detalles opcionales; pequeños movimientos en enlaces e iconos al interactuar. Sin animaciones continuas ni bibliotecas de animación.
- Textos alternativos, navegación por teclado, enlace para saltar al contenido y respeto por la preferencia de movimiento reducido.
- Datos estructurados del negocio y metadatos para buscadores y redes.

La propuesta gráfica usa un monograma original y el nombre Maoro porque no se recibió un logo. Los muebles proceden de fotografías del cliente. La versión vigente parte nuevamente de los originales y realiza una limpieza localizada de restos sueltos, envoltorios y distracciones con la herramienta integrada de imágenes. Conserva el contexto del taller o instalación; en la cocina negra se despejó parte de la mesada. Los espejos del tocador mantienen el reflejo del taller. La foto de Alberto conserva su entorno original. Los prompts exactos y todas las rutas locales están en `referencias/limpieza-natural.json`. La prueba anterior con ambientes de estudio quedó documentada en `referencias/edicion-fondos.json` y ya no se usa en portada ni galería.

La revisión del formulario y las comprobaciones de tamaños están en `referencias/REVISION-RESPONSIVE-v5.md` y `referencias/responsive-v5.json`.
La revisión del desplazamiento rápido está en `referencias/REVISION-SCROLL-v6.md`.

## Contenido confirmado

Maoro; Alberto; 20 años de relación con la carpintería (el formulario aclara medio tiempo/hobby); cocinas como especialidad; muebles a medida; MDF como material habitual; Rosario y Villa Gobernador Gálvez; España 6321; atención de lunes a viernes de 7 a 16 h y sábados hasta el mediodía (sin hora de inicio confirmada); 50% al comenzar y 50% al finalizar; garantía de 6 meses; albertoro1920@gmail.com.

La secuencia medición → presupuesto → seña → fabricación → instalación fue aceptada en el formulario con “Tal cual”. No se ofrecen puertas, ventanas ni reparaciones. No se agregaron reseñas, precios, plazos fijos ni redes sociales inexistentes.

## Antes de la publicación definitiva

1. Revisar con Alberto los textos y las fotos elegidas, incluida la foto personal del taller y la dirección pública.
2. Definir y contratar dominio y hosting. “Maorocarpinteria” es la preferencia del formulario; no implica disponibilidad ni registro del dominio.
3. Al conectar un dominio propio, actualizar juntos la URL canónica, `og:url`, imágenes absolutas, los identificadores y URL de los datos estructurados, `robots.txt` y `sitemap.xml`. Ahora apuntan al dominio de Vercel.
4. Confirmar la hora de inicio y cierre exactos de los sábados antes de publicar una franja horaria precisa. Confirmar también la ciudad de la dirección si se desea incluir un mapa. El formulario solo informa el horario de 7 a 16 h y la calle; los días se comunicaron después.
5. Si se incorpora medición de campañas, configurar los identificadores y la información de privacidad correspondiente a las herramientas elegidas. Esta versión no incluye píxeles publicitarios ni analítica.

La página carga tipografías de Google Fonts con alternativas del sistema. Las imágenes y la textura se sirven desde el mismo sitio. Se publicó en Vercel el 26/10/2026 y se actualizó el 27 y 28/10/2026; no se activaron anuncios. La revisión SEO del 28/10/2026 queda documentada en `referencias/SEO-REVISION.md`.

## Publicación desde GitHub

La rama `main` de este repositorio conserva la versión vigente del código y está conectada al proyecto existente en Vercel. Los cambios que se suben a `main` activan un despliegue automático de producción. El proyecto estático se sirve desde `dist/`, que contiene todas las fotos y demás recursos visibles. `referencias/` conserva originales y documentación de trabajo: no se publica como parte del sitio, pero sí queda accesible en este repositorio público.

Antes de subir un cambio, ejecutá `npm run check`. Si se modifica el contenido o la galería, confirmá que los archivos actualizados de `dist/` también estén en el commit. Una vez que el dominio propio esté registrado, actualizá las URL absolutas de SEO indicadas arriba.

## Despliegue manual de respaldo

`vercel.json` configura el sitio estático en `dist`, sin instalación ni compilación. `.vercelignore` incluye únicamente `dist` y su configuración. El ensayo de carga confirmó que `referencias`, `scripts`, archivos de entorno y documentos internos quedan excluidos.

Desde esta carpeta, con la cuenta de Nivaror conectada:

```powershell
npm run check
npx --yes vercel@65.3.1 deploy --prod --scope nivaror --yes --verify
```

La vinculación local del proyecto está en `.vercel/` y se excluye de Git. Las credenciales son administradas por la CLI; no se incorporan a los archivos públicos.

El equipo Nivaror usa el plan Hobby al momento del despliegue. Según las condiciones de Vercel, el uso comercial requiere Pro o Enterprise: https://vercel.com/docs/limits/fair-use-guidelines. No se modificó el plan ni se contrató una suscripción.

## Comprobaciones

```powershell
npm run check
```

Verifica sintaxis de JavaScript, existencia de recursos locales, IDs y anclas, textos alternativos, datos estructurados y el número de WhatsApp.

Revisión visual realizada en escritorio (1280 px) y móvil (390 px), sin desbordes horizontales ni imágenes rotas. Se probaron los filtros, la galería ampliada, el cambio de foto, el cierre con Escape y retorno de foco, el menú móvil, las preguntas frecuentes y la validación del formulario. La consulta de prueba abrió la pantalla de WhatsApp para el número correcto; no se envió ningún mensaje. Las capturas están en `referencias/vista-portada.jpg` y `referencias/vista-completa.jpg`.

La segunda versión se revisó en Brave, en escritorio y en su ancho móvil mínimo (434 px). Se comprobaron las nuevas imágenes, títulos, filtros de dos trabajos por categoría, descripciones de ampliación, entradas al desplazarse y ausencia de desbordes. Capturas actualizadas: `referencias/vista-portada-v2.jpg` y `referencias/vista-galeria-v2.jpg`.

La tercera versión se revisó en Brave a 1536 px y con viewport móvil de 390 px. Se verificaron las cuatro imágenes editadas, la sustitución de la estantería por el zapatero elegido, el texto breve de las ampliaciones, la navegación entre fotos, el filtro de cocina (un trabajo) y el retorno a todos (cuatro), sin desborde horizontal. Capturas: `referencias/vista-portada-v3.jpg`, `referencias/vista-galeria-v3.jpg` y `referencias/vista-zapatero-v3.jpg`.

La cuarta versión se revisó en Brave a 1536 px y 390 px. La alacena abierta se muestra completa en la portada horizontal y se verificó la nueva foto gris en la ampliación móvil. Las cinco fotos de la galería y sus miniaturas cargan desde rutas locales; la inspección del DOM no encontró fotos externas ni desbordes horizontales. Filtros: dos cocinas, tres muebles y cinco trabajos en total. Capturas: `referencias/vista-portada-natural-v4.jpg`, `referencias/vista-galeria-natural-v4.jpg`, `referencias/vista-gris-natural-v4.jpg` y `referencias/vista-gris-movil-natural-v4.jpg`.

Para regenerar las fotos vigentes desde las ediciones completas guardadas en el proyecto, ejecutá `python scripts/prepare-natural-assets.py` (requiere Pillow) y luego `npm run gallery`. No descarga imágenes ni depende de rutas de Codex: todas sus entradas son archivos relativos del proyecto. Los recursos finales ya están incluidos, por lo que no hace falta regenerarlos para usar o publicar la landing. `scripts/prepare-assets.py` y `scripts/optimize-retouched.py` corresponden a las selecciones anteriores y no son el flujo de la versión vigente.
