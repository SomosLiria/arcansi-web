// Adapta dist/ para la vista previa en GitHub Pages (subcarpeta /arcansi-web/) y la oculta a buscadores.
import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { join } from "node:path";
const BASE = process.env.PREVIEW_BASE || "/arcansi-web";
const walk = (d) => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
for (const f of walk("dist")) {
  if (!/\.(html|css|js)$/.test(f)) continue;
  let s = readFileSync(f, "utf8");
  s = s.replace(/((?:href|src|action|content)=["'])\/(?!\/)/g, `$1${BASE}/`)
       .replace(/(srcset=["'][^"']*)/g, (m) => m.replace(/(^|,\s*|=["'])\/(?!\/)/g, `$1${BASE}/`))
       .replace(/url\(\s*(["']?)\/(?!\/)/g, `url($1${BASE}/`)
       .replace(/(["'`])\/(_astro|fonts|img)\//g, `$1${BASE}/$2/`);
  if (f.endsWith(".html")) s = s.replace(/<meta name="robots"[^>]*>/, '<meta name="robots" content="noindex, nofollow" />');
  writeFileSync(f, s);
}
writeFileSync("dist/robots.txt", "User-agent: *\nDisallow: /\n");
console.log("Vista previa adaptada a", BASE);
