# Revisión del desplazamiento rápido — 27/10/2026

## Hallazgos en el código

- Las 21 piezas marcadas para entrada empezaban con `opacity: 0` y esperaban a cruzar el umbral del observador. La transición duraba 700 ms, además de los retrasos por tarjeta. Al recorrer varios tramos de golpe podían quedar espacios temporalmente vacíos.
- La textura SVG de madera usaba `feTurbulence` y se aplicaba como fondo de varios sectores, incluidos algunos extensos. Este filtro puede exigir mucho trabajo de pintura al navegador, especialmente en teléfonos.
- El encabezado fijo aplicaba desenfoque de fondo durante el desplazamiento.
- Las miniaturas y la foto del taller esperaban la carga diferida; al saltar rápido a esas secciones podían llegar después del texto.

## Cambios

- Contenido siempre legible: las entradas parten de 96 % de opacidad y un desplazamiento de solo 4–6 px. El observador se activa 180 px antes de que el elemento entre en pantalla; las transiciones y los retrasos son más breves.
- Textura de madera conservada como degradado y vetas vectoriales, sin filtro de ruido SVG.
- Encabezado opaco sin desenfoque; fotos de galería sin filtro de saturación durante el recorrido.
- Cinco miniaturas y retrato cargados al inicio con prioridad baja y decodificación asíncrona. La imagen de portada mantiene prioridad alta.
- Navegación por anclas sin desplazamiento animado; botones, menú y pequeños detalles mantienen sus movimientos breves. La preferencia por movimiento reducido se sigue respetando.

## Comprobación

- `npm run check` correcto; 45 IDs únicos.
- Brave a 390×844: los elementos pendientes de entrada conservaron opacidad 0,96; las seis fotos secundarias estaban cargadas; la galería mostró cinco trabajos sin filtro; el formulario apareció al llegar mediante un enlace interno.
- Sin desborde horizontal ni errores en la consola de la vista local. La portada móvil conservó su composición y textura.

El síntoma en el equipo del amigo puede depender también de su dispositivo o conexión. Estas pruebas confirman la eliminación de las esperas introducidas por la página, sin representar una medición de rendimiento en su equipo.

## Publicación y comprobación

- Despliegue de producción: `dpl_49pbKrdpdFJCjn3eK38RZZg7Kr8t`, estado `READY`.
- En https://maoro-carpinteria.vercel.app/ el HTML, CSS, JavaScript y SVG coinciden con los archivos locales; la miniatura del mueble gris responde HTTP 200.
- En Brave a 390×844, la página publicada muestra las fotos cargadas, no presenta desborde horizontal ni errores de consola, y la galería se ve completa al navegar directamente a ella.
