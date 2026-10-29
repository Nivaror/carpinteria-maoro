# Fotografías vigentes — 27/10/2026

Ediciones realizadas con la herramienta integrada `image_gen` (uso `precise-object-edit`), partiendo de las fotografías originales. El objetivo es retirar distracciones puntuales conservando el lugar, la luz, los colores y el carácter real de las tomas. Los prompts exactos están en `limpieza-natural.json`.

## Selección

| Archivo en `dist/assets/trabajos/` | Uso | Retoque |
| --- | --- | --- |
| `alacena-puertas-abiertas.webp` | Portada y primera foto de la galería | Restos y envoltorios del piso, serrín suelto en estantes. Conserva el banco y las paredes del taller, las dos puertas centrales cerradas y los extremos abiertos. |
| `mueble-frentes-grises.webp` | Segunda foto, cocinas y guardado | Pequeños restos del piso y polvo suelto. Mantiene los ladrillos, tableros almacenados, estantes y frentes grises. Elegida expresamente por el usuario. |
| `tocador-espejo.webp` | Galería | Envoltorio de la tapa y basura suelta en el piso. Conserva el entorno y los tableros reflejados en los espejos. |
| `zapatero-rebatible.webp` | Galería | Botella, herramientas sueltas y tira apoyada sobre la tapa; pequeños restos del suelo. Conserva el taller y los tres frentes abiertos. |
| `panel-listones.webp` | Galería | Ropa sobre la silla y cartel deportivo bajo el panel. Conserva techo, paredes, bandejas, sillas, piso y montaje del panel; el vidrio oculto por el cartel se reconstruye en esa zona. |

Cada archivo tiene su miniatura `-small.webp`. La foto de Alberto se conserva como `dist/assets/alberto-taller.webp`, en su entorno original.

## Archivos dentro del proyecto

- `referencias/fotos-originales/`: fuentes originales, incluidas las dos fotos nuevas descargadas del material elegido por el usuario.
- `referencias/ediciones-naturales/`: las cinco ediciones completas en PNG.
- `referencias/limpieza-natural.json`: instrucciones de edición y rutas relativas de entrada y salida.
- `dist/assets/trabajos/`: archivos optimizados que carga la página, incluidos en cualquier despliegue de `dist`.

La página usa rutas locales para todas sus fotos y ampliaciones. Los enlaces de Google solo sirvieron para obtener las fuentes; no se necesitan al abrir la web ni al publicarla. Las referencias internas no se despliegan como parte de la página, pero quedan en la carpeta del proyecto para una futura copia a GitHub cuando el usuario lo autorice.

## Regeneración local

```powershell
python scripts/prepare-natural-assets.py
npm run gallery
npm run check
```

Solo el primer comando requiere Python y Pillow. Usa las copias PNG ya guardadas y genera WebP y miniaturas; no vuelve a editar el contenido ni necesita un servicio externo.

Las versiones de estudio anteriores no se usan en la selección vigente. El historial de selección y esas pruebas se conserva en `REVISION-FOTOS.md` y `edicion-fondos.json`.
