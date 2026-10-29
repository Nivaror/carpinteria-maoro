# Revisión de fotografías — actualizada el 27/10/2026

## Selección vigente del 27/10

Se reemplazó la portada y la alacena de puertas cerradas por la fotografía horizontal de la alacena blanca con los extremos abiertos. Se agregó el mueble blanco con tapa y frentes grises elegido por el usuario. La galería tiene cinco trabajos. Todas las fotos de producto volvieron a sus fondos originales, con limpieza localizada de distracciones; se retiró de uso la prueba de ambientes neutros. La selección vigente y sus archivos locales se describen en `FOTOS-LOCALES.md` y `limpieza-natural.json`.

## Historial del 26/10

Se recorrió el álbum completo hasta el último material del 18/10/2026, incluyendo los bloques que se cargan al desplazarse. Se catalogaron 74 imágenes de vista previa (algunas corresponden a videos). Las candidatas se revisaron a resolución grande, además de las láminas de comparación.

## Selección anterior publicada

| Índice del catálogo | Nombre | Lo que se ve | Criterio |
| --- | --- | --- | --- |
| 26 | Tocador con espejo e iluminación | Tocadores blancos, espejos colocados, luz superior, cajón abierto y correderas | Mueble completo y funcional fotografiado en el taller. Imagen de portada. |
| 43 | Alacena blanca | Cuatro puertas colocadas y nicho lateral abierto | Carpintería ensamblada con frentes colocados. El original está sobre un banco; el fondo final es un montaje digital. |
| Enlace específico del usuario | Zapatero abatible | Tres compartimentos abatibles abiertos, acabado blanco y tiradores metálicos | Reemplaza la estantería para vajilla por pedido expreso. Foto del 29/09/2025 a las 17:50:34, ID AF1QipMOy8AwEgVbc948OKgTZwE7C1VouasneXeVuQ6w. |
| 33 | Panel decorativo con listones | Fondo blanco, listones de distintas longitudes y marco perimetral | Panel fotografiado en su lugar. No se le atribuye otro uso específico. |

Los títulos, textos alternativos y descripciones están en `trabajos-seleccionados.json`. `npm run gallery` genera el marcado correspondiente. Los recortes visuales usan CSS y la ampliación conserva la fotografía completa.

## Correcciones y descartes

- Las supuestas “sillas de comedor” de la primera selección son **tocadores en distintas etapas de fabricación**. Se retiró la foto con estructuras sin espejo y se eligió una con los tocadores completos, espejos e iluminación.
- El denominado “guardado extraíble” corresponde a un **zapatero de compartimentos abatibles**. La tercera versión incorpora la foto exacta seleccionada por el usuario, con este nombre corregido.
- Se retiraron las estructuras de cocina sin completar, tableros sueltos y vistas del armado.
- Se descartó el bajomesada del índice 41: tiene puertas y cajones, pero la foto todavía lo muestra sin mesada. No se utiliza en portada ni galería.
- Se descartó el módulo oscuro abierto del índice 63 porque la imagen no permite confirmar con suficiente claridad su estado y función final.
- No se usaron imágenes personales ajenas al taller, videos como si fueran fotos, ni varias vistas de una misma pieza como proyectos distintos.

La fotografía de Alberto se conserva exclusivamente en la presentación del taller, con su fondo original. Se quitaron de los textos públicos las aclaraciones sobre la toma de las fotografías.

## Edición de fondos solicitada

Las cuatro fotos de producto se editaron con la herramienta integrada `image_gen`, usando un ambiente neutro cálido. En los tocadores también se sustituyó el entorno reflejado en los espejos. Se revisaron las imágenes frente a sus originales para conservar las puertas, cajones abiertos, tiradores, espejos, tonos y disposición de los muebles. La edición generativa no garantiza identidad píxel a píxel.

Los ambientes finales no representan instalaciones reales del cliente. Los originales se conservan en `fotos-originales/`; los archivos finales están en `dist/assets/` con sufijo `-estudio.webp`, con sus miniaturas. Los prompts exactos, entradas y salidas están en `edicion-fondos.json`. Las descripciones solo identifican el trabajo y sus características visibles.

Las imágenes descartadas de la primera versión se conservan en `fotos-version-anterior/`, fuera de la carpeta pública `dist`.
