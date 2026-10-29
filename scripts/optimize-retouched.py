"""Convierte las ediciones aprobadas a WebP; no modifica los fondos ni los muebles."""
import json
import shutil
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
manifest = json.loads((ROOT / 'referencias/edicion-fondos.json').read_text(encoding='utf-8'))
jobs_file = ROOT / 'referencias/trabajos-seleccionados.json'
gallery = json.loads(jobs_file.read_text(encoding='utf-8'))
originals = ROOT / 'referencias/fotos-originales'
originals.mkdir(exist_ok=True)

for job in manifest['jobs']:
    original = ROOT / job['original']
    if original.parent != originals:
        archived = originals / original.name
        if not archived.exists():
            shutil.copy2(original, archived)
    image = ImageOps.exif_transpose(Image.open(job['generated_file'])).convert('RGB')
    image.thumbnail((1600, 1600))
    target = ROOT / job['output']
    image.save(target, 'WEBP', quality=88, method=6)
    small = image.copy()
    small.thumbnail((700, 850))
    small.save(target.with_name(target.stem + '-small.webp'), 'WEBP', quality=84, method=6)
    item = next(item for item in gallery if item['slug'] == job['slug'])
    item.update(image=target.stem, width=image.width, height=image.height)
    print(f'{target.name}: {image.width}x{image.height}, {target.stat().st_size // 1024} KB')

jobs_file.write_text(json.dumps(gallery, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
