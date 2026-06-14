import { deflateSync } from 'node:zlib';
import { mkdirSync, writeFileSync } from 'node:fs';

const OUTPUTS = [
  ['pwa-192x192.png', 192],
  ['pwa-512x512.png', 512],
  ['pwa-maskable-512x512.png', 512],
  ['apple-touch-icon.png', 180],
];

const COLORS = {
  background: [22, 19, 9, 255],
  primary: [255, 214, 0, 255],
};

function crc32(buffer) {
  let crc = 0xffffffff;

  for (const byte of buffer) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit += 1) {
      crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
    }
  }

  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBuffer = Buffer.from(type);
  const length = Buffer.alloc(4);
  const checksum = Buffer.alloc(4);

  length.writeUInt32BE(data.length);
  checksum.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])));

  return Buffer.concat([length, typeBuffer, data, checksum]);
}

function isInsideRoundedRect(x, y, left, top, size, radius) {
  const right = left + size;
  const bottom = top + size;
  const nearestX = Math.max(left + radius, Math.min(x, right - radius));
  const nearestY = Math.max(top + radius, Math.min(y, bottom - radius));
  const dx = x - nearestX;
  const dy = y - nearestY;

  return dx * dx + dy * dy <= radius * radius;
}

function createIcon(size) {
  const rowLength = size * 4 + 1;
  const pixels = Buffer.alloc(rowLength * size);
  const scale = size / 1024;

  for (let y = 0; y < size; y += 1) {
    const rowStart = y * rowLength;
    pixels[rowStart] = 0;

    for (let x = 0; x < size; x += 1) {
      const sourceX = (x + 0.5) / scale;
      const sourceY = (y + 0.5) / scale;
      const offset = rowStart + 1 + x * 4;
      const inYellowCard = isInsideRoundedRect(
        sourceX,
        sourceY,
        192,
        192,
        640,
        160
      );
      const dx = sourceX - 512;
      const dy = sourceY - 512;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx);
      const inLetterC =
        distance >= 128 &&
        distance <= 226 &&
        Math.abs(angle) >= Math.PI / 4;
      const color = inYellowCard && !inLetterC ? COLORS.primary : COLORS.background;

      pixels.set(color, offset);
    }
  }

  const header = Buffer.alloc(13);
  header.writeUInt32BE(size, 0);
  header.writeUInt32BE(size, 4);
  header[8] = 8;
  header[9] = 6;

  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk('IHDR', header),
    chunk('IDAT', deflateSync(pixels, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

mkdirSync(new URL('../public/icons/', import.meta.url), { recursive: true });

for (const [filename, size] of OUTPUTS) {
  writeFileSync(
    new URL(`../public/icons/${filename}`, import.meta.url),
    createIcon(size)
  );
}

console.log(`Generated ${OUTPUTS.length} CHIT PWA icons.`);
