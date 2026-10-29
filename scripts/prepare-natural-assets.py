"""Optimiza las copias editadas locales. No descarga imágenes ni modifica sus fondos."""
import json
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
manifest = json.loads((ROOT / 'referencias/limpieza-natural.json').read_text(encoding='utf-8'))
gallery_file = ROOT / 'referencias/trabajos-seleccionados.json'
gallery = json.loads(gallery_file.read_text(encoding='utf-8'))

for job in manifest['jobs']:
    image = ImageOps.exif_transpose(Image.open(ROOT / job['edited'])).convert('RGB')
    image.thumbnail((1800, 1800))
    output = ROOT / job['output']
    output.parent.mkdir(parents=True, exist_ok=True)
    image.save(output, 'WEBP', quality=88, method=6)
    small = image.copy()
    small.thumbnail((800, 1000))
    small.save(output.with_name(output.stem + '-small.webp'), 'WEBP', quality=84, method=6)
    item = next(item for item in gallery if item['slug'] == job['slug'])
    item.update(width=image.width, height=image.height)
    print(f'{output.relative_to(ROOT)}: {image.width}x{image.height}, {output.stat().st_size // 1024} KB')

gallery_file.write_text(json.dumps(gallery, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
