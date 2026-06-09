import { join, extname } from "node:path";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const DIST_CLIENT = join(__dirname, "dist/client");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js":   "application/javascript",
  ".mjs":  "application/javascript",
  ".css":  "text/css",
  ".json": "application/json",
  ".png":  "image/png",
  ".jpg":  "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg":  "image/svg+xml",
  ".ico":  "image/x-icon",
  ".woff": "font/woff",
  ".woff2":"font/woff2",
  ".ttf":  "font/ttf",
  ".otf":  "font/otf",
  ".webp": "image/webp",
  ".gif":  "image/gif",
  ".mp4":  "video/mp4",
  ".webm": "video/webm",
};

const { default: app } = await import("./dist/server/server.js");

const PORT = Number(process.env.PORT) || 5000;

function serveStatic(url) {
  const parsed = new URL(url);
  let pathname = decodeURIComponent(parsed.pathname);
  if (pathname === "/" || pathname === "") pathname = "/index.html";

  const filePath = join(DIST_CLIENT, pathname);
  if (!filePath.startsWith(DIST_CLIENT)) return null;

  if (existsSync(filePath)) {
    const ext = extname(filePath).toLowerCase();
    const mime = MIME[ext] ?? "application/octet-stream";
    const body = readFileSync(filePath);
    return new Response(body, {
      headers: {
        "Content-Type": mime,
        "Cache-Control": ext === ".html" ? "no-cache" : "public, max-age=31536000, immutable",
      },
    });
  }
  return null;
}

const server = Bun.serve({
  port: PORT,
  hostname: "0.0.0.0",
  async fetch(request) {
    const url = request.url;

    const staticResponse = serveStatic(url);
    if (staticResponse) return staticResponse;

    if (typeof app?.fetch === "function") {
      try {
        return await app.fetch(request);
      } catch (err) {
        console.error("[SSR error]", err);
      }
    }

    return new Response("Not found", { status: 404 });
  },
});

console.log(`Serving on http://0.0.0.0:${server.port}`);
