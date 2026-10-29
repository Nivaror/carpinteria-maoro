"""Crea láminas internas de revisión a partir de un inventario descargado."""
import json
import sys
from pathlib import Path
from PIL import Image, ImageOps, ImageDraw

root = Path(__file__).resolve().parents[1]
manifest = json.loads(Path(sys.argv[1]).read_text(encoding='utf-8'))
photos = manifest['assets']
catalogue = []
for i, item in enumerate(photos):
    catalogue.append({'index': i, 'id': item['id'], 'url': item['url']})
(root / 'referencias' / 'catalogo-completo.json').write_text(json.dumps(catalogue, ensure_ascii=False, indent=2), encoding='utf-8')
for start in range(0, len(photos), 24):
    subset = photos[start:start + 24]
    sheet = Image.new('RGB', (1200, 4 * 250), '#eee9df')
    draw = ImageDraw.Draw(sheet)
    for n, item in enumerate(subset):
        im = Image.open(item['path']).convert('RGB')
        im = ImageOps.contain(im, (190, 222))
        x, y = n % 6 * 200, n // 6 * 250
        sheet.paste(im, (x + (200 - im.width) // 2, y + 22))
        draw.text((x + 8, y + 5), str(start + n), fill='#111')
    path = root / 'referencias' / f'revision-{start // 24 + 1:02d}.jpg'
    sheet.save(path, quality=93)
    print(path)
print(f'{len(photos)} imágenes catalogadas.')
