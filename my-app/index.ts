import { file } from "bun";

const STATIC: Record<string, { path: string; immutable?: boolean }> = {
  "/": { path: "index.html" },
  "/robots.txt": { path: "robots.txt" },
  "/sitemap.xml": { path: "sitemap.xml" },
  "/llms.txt": { path: "llms.txt" },
  "/humans.txt": { path: "humans.txt" },
  "/style.css": { path: "style.css" },
  "/tokens.css": { path: "tokens.css" },
  "/fonts/microgramma.woff2": {
    path: "public/Microgramma D Bold Extended.woff2",
    immutable: true,
  },
};

const server = Bun.serve({
  port: Number(process.env.PORT ?? 3000),
  development: process.env.NODE_ENV !== "production",

  async fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/script.js") {
      const result = await Bun.build({
        entrypoints: ["script.js"],
        target: "browser",
      });

      if (!result.success || !result.outputs[0]) {
        return new Response("Failed to build script", { status: 500 });
      }

      return new Response(await result.outputs[0].text(), {
        headers: { "Content-Type": "text/javascript; charset=utf-8" },
      });
    }

    const hit = STATIC[url.pathname];
    if (hit) {
      return new Response(file(hit.path), {
        headers: hit.immutable
          ? { "Cache-Control": "public, max-age=31536000, immutable" }
          : undefined,
      });
    }

    if (url.pathname.startsWith("/optimized/")) {
      const f = file(`public${url.pathname}`);
      if (await f.exists()) {
        return new Response(f, {
          headers: { "Cache-Control": "public, max-age=31536000, immutable" },
        });
      }
    }

    if (url.pathname.startsWith("/public/")) {
      const f = file(decodeURIComponent(url.pathname.slice(1)));
      if (await f.exists()) {
        return new Response(f, {
          headers: { "Cache-Control": "public, max-age=31536000, immutable" },
        });
      }
    }

    return new Response("Not found", { status: 404 });
  },
});

console.log(`-> http://localhost:${server.port}`);
