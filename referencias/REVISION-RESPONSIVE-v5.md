# Revisión de formulario, madera y adaptación — 27/10/2026

## Contenido

- Cobertura tomada del formulario y de la captura aportada: Rosario y Villa Gobernador Gálvez. No se presenta todo Gran Rosario como cobertura garantizada.
- Nueve opciones útiles en localidad/zona: seis distritos de Rosario, Rosario sin distrito definido, Villa Gobernador Gálvez y otra localidad con consulta de disponibilidad.
- Nombres de los distritos contrastados con la [Municipalidad de Rosario](https://www.rosario.gob.ar/inicio/index.php/distritos).
- 21 consultas agrupadas por cocinas, guardado, otros espacios y asesoramiento. Cocinas aparece primero. No se incorporaron reparaciones, puertas ni ventanas.
- Barrio opcional y bloque desplegable de medidas y color/estilo. No se solicitan domicilio exacto, presupuesto personal ni datos innecesarios.
- Las preferencias de color/material no prometen disponibilidad: se confirman al presupuestar.
- Otra localidad muestra un campo obligatorio y su mensaje indica que la cobertura se consulta. Al volver a una zona cubierta, el campo se desactiva y su valor anterior no se incluye.

## Diseño

- Placa de portada y cabecera del formulario con nogal y veta local SVG; marcas de madera pequeñas junto a los títulos y remate cálido en preguntas frecuentes.
- Movimiento breve al abrir el menú y el bloque opcional; detalles en flechas, iconos y marcas de madera. Se mantiene el recorrido de entrada una sola vez.
- `prefers-reduced-motion` desactiva animaciones, transiciones y desplazamiento suave. Revisado en el código; no se modificó la preferencia del sistema del usuario.
- Campos de 16 px para evitar el zoom de enfoque habitual en teléfonos. Controles principales de al menos 44 px; márgenes para áreas seguras y adaptación a pantallas horizontales.
- El botón flotante de WhatsApp se retira mientras el formulario está a la vista, para no tapar los campos ni la zona de escritura.
- Rejillas con anchos mínimos de cero, tipografía fluida, saltos adicionales para pantallas muy estrechas y ancho máximo de lectura en monitores grandes. No se ocultan desbordes con `overflow-x: hidden`.

## Verificación

Navegador: Brave, perfil Nivaror, vista local. Dimensiones de viewport verificadas:

280×740, 320×740, 360×800, 390×844, 430×932, 600×900, 768×1024, 820×1180, 1024×768, 1280×800, 1536×900, 1920×1080, 2560×1440 y 844×390 horizontal.

En los 14 casos, el ancho del documento coincidió con el ancho disponible y no se detectaron elementos fuera de los bordes laterales. El registro de mediciones está en `responsive-v5.json`. Son pruebas de viewport en este navegador, no pruebas físicas en cada modelo de dispositivo.

Comprobaciones funcionales:

- Menú móvil: apertura y cierre con Escape.
- Validación de localidad alternativa: campo obligatorio vacío impide preparar la consulta y recibe el foco.
- Mensaje de prueba abierto en la pantalla de preparación de WhatsApp al número correcto, incluyendo localidad, barrio, proyecto, medidas, terminación y descripción. No se envió ningún mensaje al cliente.
- Cambio de localidad: oculta/desactiva el campo alternativo y oculta una consulta previamente preparada para evitar que el enlace anterior se tome como actualizado.
- Accesos desde servicios: seleccionan Cocina a medida / Otro mueble a medida.
- Filtros: Cocinas muestra dos trabajos; Todos restaura cinco.
- Ampliación de fotos a 320 px: sin desborde; navegación con flechas y cierre con Escape.
- `npm run check`: JavaScript, archivos locales, anclas, imágenes, datos estructurados y WhatsApp correctos; 45 IDs únicos.

## Publicación posterior autorizada — 27/10/2026

El usuario aprobó reemplazar la versión anterior de Vercel por esta revisión y cambiar el título de la pestaña a «Maoro Carpintería | Muebles a medida».

- Proyecto existente: `maoro-carpinteria`, equipo `nivaror`.
- Producción: https://maoro-carpinteria.vercel.app/
- Despliegue final: `dpl_2poaRyZUiyuzpYiCD7mxq8DRNCx9`, estado `READY`.
- URL de esta versión: https://maoro-carpinteria-l5jcb0h6a-nivaror.vercel.app/
- Verificación pública: HTTP 200; HTML, CSS y JavaScript coinciden con los archivos locales; las fotos nuevas de la alacena y el mueble gris devuelven HTTP 200.
- Verificación en Brave: título actualizado, imagen de portada cargada, nueve opciones de localidad y 21 de proyecto.
- GitHub continúa pendiente por indicación del usuario.
