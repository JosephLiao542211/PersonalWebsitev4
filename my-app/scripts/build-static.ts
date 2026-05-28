import { cp, mkdir, rm } from "node:fs/promises";
import { dirname, join } from "node:path";

await rm("dist", { recursive: true, force: true });

if (!Bun.env.CI) {
  await import("./optimize-images");
}

const result = await Bun.build({
  entrypoints: ["index.html"],
  outdir: "dist",
  minify: true,
});

if (!result.success) {
  console.error("Build failed");
  for (const log of result.logs) console.error(log);
  process.exit(1);
}

const runtimeAssets = [
  ["public/optimized", "optimized"],
  ["public/Djingo.woff2", "public/Djingo.woff2"],
  [
    "public/ibm-plex-mono-v20-latin-regular.woff2",
    "public/ibm-plex-mono-v20-latin-regular.woff2",
  ],
  ["public/JOSEPH LIAO.svg", "public/JOSEPH LIAO.svg"],
  ["public/Joseph_Liao_Resume.pdf", "public/Joseph_Liao_Resume.pdf"],
  ["public/resume.svg", "public/resume.svg"],
  ["public/linkdin.svg", "public/linkdin.svg"],
  ["public/github.svg", "public/github.svg"],
  ["public/coming-soon.png", "public/coming-soon.png"],
  ["public/dev/Baobab.svg", "public/dev/Baobab.svg"],
  ["public/work/image.png", "public/work/image.png"],
];

for (const [from, publicPath] of runtimeAssets) {
  const to = join("dist", publicPath);
  await mkdir(dirname(to), { recursive: true });
  await cp(from, to, { recursive: true });
}
