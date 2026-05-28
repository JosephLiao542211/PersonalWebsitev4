import { readdir, mkdir } from "node:fs/promises";
import { basename, dirname, extname, join, relative } from "node:path";

const SRC = "public";
const OUT = "public/optimized";
const TARGETS = [1920, 1536, 1024, 768, 480] as const;
const WEBP_QUALITY = 86;
const AVIF_QUALITY = 78;

await mkdir(OUT, { recursive: true });

async function findImages(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) {
        if (relative(SRC, path).split(/[\\/]/)[0] === "optimized") return [];
        return findImages(path);
      }
      if (/\.(jpe?g|png|webp)$/i.test(entry.name)) return [path];
      return [];
    }),
  );

  return nested.flat();
}

const sources = await findImages(SRC);

if (sources.length === 0) {
  console.error(`No source images in ${SRC}/`);
  process.exit(1);
}

const slug = (path: string) => {
  const rel = relative(SRC, path);
  const dir = dirname(rel) === "." ? "" : `${dirname(rel)}-`;
  return `${dir}${basename(rel, extname(rel))}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
};

const placeholders: Record<string, string> = {};
let warnedAvifUnsupported = false;

async function writeAvif(src: string, out: string, width: number) {
  try {
    const bytes = await Bun.file(src)
      .image()
      .resize(width)
      .avif({ quality: AVIF_QUALITY })
      .write(out);
    console.log(`  ${out}  ${(bytes / 1024).toFixed(1)} KB`);
  } catch (error) {
    if (!warnedAvifUnsupported) {
      console.warn(
        "  AVIF skipped: this machine does not have an AVIF encoder available.",
      );
      warnedAvifUnsupported = true;
    }
    if (
      !(error instanceof Error) ||
      !error.message.includes("format not supported")
    ) {
      throw error;
    }
  }
}

const t0 = performance.now();

await Promise.all(
  sources.map(async (src) => {
    const base = slug(src);
    const meta = await Bun.file(src).image().metadata();
    const sourceWidth = meta.width!;

    // Map each target down to the source width if it would upscale; dedupe.
    const widths = [...new Set(TARGETS.map((w) => Math.min(w, sourceWidth)))];

    placeholders[base] = await Bun.file(src).image().placeholder();

    for (const width of widths) {
      const webpOut = join(OUT, `${base}-${width}.webp`);
      const webpBytes = await Bun.file(src)
        .image()
        .resize(width)
        .webp({ quality: WEBP_QUALITY })
        .write(webpOut);
      console.log(`  ${webpOut}  ${(webpBytes / 1024).toFixed(1)} KB`);

      await writeAvif(src, join(OUT, `${base}-${width}.avif`), width);
    }
  }),
);

console.log(`\nDone in ${((performance.now() - t0) / 1000).toFixed(2)}s`);

await Bun.write(
  join(OUT, "placeholders.json"),
  JSON.stringify(placeholders, null, 2),
);
