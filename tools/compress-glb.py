#!/usr/bin/env python3
"""Shrink GLB files by resizing and re-encoding their embedded textures.

    python tools/compress-glb.py <src_dir> <dst_dir> [--size 1024] [--big-size 2048] [--big-prefix chr_]

Geometry, materials and node names are left untouched. Textures are resized so their longest
side is at most --size (or --big-size for files whose name starts with --big-prefix) and saved
as JPEG, or PNG when the image has real transparency. Output is plain glTF 2.0 with no
extensions, so any loader can read it. Requires Pillow.
"""
import argparse, io, json, struct, sys
from pathlib import Path
from PIL import Image

GLB_MAGIC, JSON_CHUNK, BIN_CHUNK = 0x46546C67, 0x4E4F534A, 0x004E4942


def read_glb(path):
    data = path.read_bytes()
    magic, version, _ = struct.unpack_from('<III', data, 0)
    if magic != GLB_MAGIC or version != 2:
        raise ValueError('not a glTF 2.0 binary')
    json_len, json_type = struct.unpack_from('<II', data, 12)
    if json_type != JSON_CHUNK:
        raise ValueError('first chunk is not JSON')
    doc = json.loads(data[20:20 + json_len])
    offset = 20 + json_len
    bin_len, bin_type = struct.unpack_from('<II', data, offset)
    if bin_type != BIN_CHUNK:
        raise ValueError('second chunk is not BIN')
    return doc, data[offset + 8:offset + 8 + bin_len]


def write_glb(path, doc, blob):
    js = json.dumps(doc, separators=(',', ':')).encode()
    js += b' ' * (-len(js) % 4)
    blob += b'\0' * (-len(blob) % 4)
    total = 12 + 8 + len(js) + 8 + len(blob)
    with open(path, 'wb') as f:
        f.write(struct.pack('<III', GLB_MAGIC, 2, total))
        f.write(struct.pack('<II', len(js), JSON_CHUNK)); f.write(js)
        f.write(struct.pack('<II', len(blob), BIN_CHUNK)); f.write(blob)


def shrink_image(raw, max_side, quality):
    im = Image.open(io.BytesIO(raw))
    im.load()
    has_alpha = im.mode in ('RGBA', 'LA') and im.getchannel('A').getextrema()[0] < 255
    if max(im.size) > max_side:
        scale = max_side / max(im.size)
        im = im.resize((max(1, round(im.width * scale)), max(1, round(im.height * scale))), Image.LANCZOS)
    out = io.BytesIO()
    if has_alpha:
        im.save(out, 'PNG', optimize=True)
        return out.getvalue(), 'image/png'
    im.convert('RGB').save(out, 'JPEG', quality=quality, optimize=True, progressive=True)
    return out.getvalue(), 'image/jpeg'


def compress(src, dst, max_side, quality):
    doc, blob = read_glb(src)
    if len(doc.get('buffers', [])) != 1 or 'uri' in doc['buffers'][0]:
        raise ValueError('expected a single embedded buffer')
    views = doc.get('bufferViews', [])
    replaced = {}
    for image in doc.get('images', []):
        if 'bufferView' not in image:
            continue
        v = views[image['bufferView']]
        start = v.get('byteOffset', 0)
        new, mime = shrink_image(blob[start:start + v['byteLength']], max_side, quality)
        if len(new) < v['byteLength']:
            replaced[image['bufferView']] = new
            image['mimeType'] = mime
    out = bytearray()
    for i, v in enumerate(views):
        start = v.get('byteOffset', 0)
        chunk = replaced.get(i, blob[start:start + v['byteLength']])
        out += b'\0' * (-len(out) % 4)
        v['byteOffset'], v['byteLength'] = len(out), len(chunk)
        out += chunk
    doc['buffers'][0]['byteLength'] = len(out) + (-len(out) % 4)
    write_glb(dst, doc, bytes(out))


def main():
    ap = argparse.ArgumentParser(description=__doc__.split('\n')[0])
    ap.add_argument('src'); ap.add_argument('dst')
    ap.add_argument('--size', type=int, default=1024)
    ap.add_argument('--big-size', type=int, default=2048)
    ap.add_argument('--big-prefix', default='chr_')
    ap.add_argument('--quality', type=int, default=82)
    a = ap.parse_args()
    src, dst = Path(a.src), Path(a.dst)
    dst.mkdir(parents=True, exist_ok=True)
    before = after = 0
    for f in sorted(src.glob('*.glb')):
        side = a.big_size if f.name.startswith(a.big_prefix) else a.size
        try:
            compress(f, dst / f.name, side, a.quality)
        except Exception as e:  # keep going; report the file
            print(f'FAILED {f.name}: {e}', file=sys.stderr)
            continue
        b, n = f.stat().st_size, (dst / f.name).stat().st_size
        before += b; after += n
        print(f'{f.name:34} {b / 1e6:6.2f} MB -> {n / 1e6:5.2f} MB')
    print(f'\ntotal {before / 1e6:.1f} MB -> {after / 1e6:.1f} MB')


if __name__ == '__main__':
    main()
