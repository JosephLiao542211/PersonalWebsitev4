// Builds the favicon set and the 1200x630 social preview into public/brand.
// The "JL" monogram is cropped straight out of the wordmark SVG's J and L glyphs.
// Re-run after changing the wordmark or portrait: `bun scripts/brand-assets.ts`.
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const OUT = "public/brand";
const BG = "#121213";
const FG = "#f0f0ee";

const wordmark = await Bun.file("public/JOSEPH LIAO.svg").text();
const glyphPath = wordmark.match(/<path d="([^"]+)"/)![1];
const GLYPH_H = 369;
// Ink column ranges of J and L in the wordmark's 1199x369 viewBox.
const J = { x: 0, w: 115 };
const L = { x: 793, w: 85 };
const GAP = 22;

function glyph(g: { x: number; w: number }, x: number) {
  return `<svg x="${x}" y="0" width="${g.w}" height="${GLYPH_H}" viewBox="${g.x} 0 ${g.w} ${GLYPH_H}"><path d="${glyphPath}" fill="${FG}"/></svg>`;
}

// Monogram in glyph units, positioned with a translate+scale wrapper by the caller.
const MONO_W = J.w + GAP + L.w;
const monogram = glyph(J, 0) + glyph(L, J.w + GAP);

function iconSvg(size: number, radius: number) {
  const scale = (size * 0.72) / GLYPH_H;
  const tx = (size - MONO_W * scale) / 2;
  const ty = (size - GLYPH_H * scale) / 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${radius}" fill="${BG}"/>
  <g transform="translate(${tx} ${ty}) scale(${scale})">${monogram}</g>
</svg>
`;
}

await mkdir(OUT, { recursive: true });
await Bun.write(`${OUT}/favicon.svg`, iconSvg(64, 12));
for (const size of [48, 192]) {
  await sharp(Buffer.from(iconSvg(size, size * 0.1875))).png().toFile(`${OUT}/favicon-${size}.png`);
}
// iOS applies its own corner mask, so the touch icon stays square.
await sharp(Buffer.from(iconSvg(180, 0))).png().toFile(`${OUT}/apple-touch-icon.png`);

// Social preview: portrait on the left, full wordmark and role line on the right.
const W = 1200, H = 630, PHOTO_W = 420;
const photo = await sharp("public/optimized/life-img-1882-1024.webp")
  .resize(PHOTO_W, H, { fit: "cover", position: "attention" })
  .toBuffer();
const markW = W - PHOTO_W - 140;
const markH = Math.round((markW * GLYPH_H) / 1199);
const right = PHOTO_W + 70;
const overlay = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <svg x="${right}" y="${(H - markH) / 2 - 40}" width="${markW}" height="${markH}" viewBox="0 0 1199 ${GLYPH_H}" preserveAspectRatio="none"><path d="${glyphPath}" fill="${FG}"/></svg>
  <text x="${right}" y="${(H + markH) / 2 + 30}" font-family="IBM Plex Mono, Menlo, monospace" font-size="20" fill="${FG}" fill-opacity="0.7">Software Engineer / AI Operations / Product Builder</text>
  <text x="${right}" y="${H - 48}" font-family="IBM Plex Mono, Menlo, monospace" font-size="22" fill="${FG}" fill-opacity="0.45">josephliao.dev</text>
</svg>`;
await sharp({ create: { width: W, height: H, channels: 3, background: BG } })
  .composite([
    { input: photo, left: 0, top: 0 },
    { input: Buffer.from(overlay), left: 0, top: 0 },
  ])
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(`${OUT}/og-image.jpg`);

console.log(`wrote ${OUT}`);
