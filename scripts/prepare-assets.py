"""Importa y optimiza una selección del álbum aportado por el cliente."""
import concurrent.futures
import io
import json
import urllib.request
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / 'dist' / 'assets'
photos = json.loads((ROOT / 'referencias' / 'catalogo-completo.json').read_text(encoding='utf-8'))
selected = {
    26: 'tocador-espejo',
    43: 'alacena-blanca',
    33: 'panel-listones',
    1: 'alberto-taller',
    22: 'alacena-estantes',
}

def download(item):
    index, name = item
    # El servicio de imágenes de Google conserva el archivo y permite pedir
    # una copia de mayor tamaño mediante sus parámetros de presentación.
    url = photos[index]['url'].split('=')[0] + '=w1800-h1800-no'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=45) as response:
        image = ImageOps.exif_transpose(Image.open(io.BytesIO(response.read()))).convert('RGB')
    image.thumbnail((1600, 1600))
    image.save(ASSETS / f'{name}.webp', 'WEBP', quality=86, method=6)
    small = image.copy()
    small.thumbnail((700, 850))
    small.save(ASSETS / f'{name}-small.webp', 'WEBP', quality=82, method=6)
    print(f'{name}: {image.width}x{image.height}', flush=True)
    return {'file': f'assets/{name}.webp', 'source': 'Álbum Taller compartido por el usuario', 'source_url': photos[index]['url']}

with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
    sources = list(pool.map(download, selected.items()))
(ROOT / 'referencias' / 'imagenes.json').write_text(json.dumps(sources, ensure_ascii=False, indent=2), encoding='utf-8')
