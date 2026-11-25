// Post-build quality check: run after `npm run build` (or use `npm run test:site`).
// Checks every page in dist/ for: broken internal links and images, missing alt text,
// exactly one <h1>, correct lang/dir, title + description, hreflang pairs, and leftover "undefined".
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const files = [];
(function walk(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (p.endsWith('.html')) files.push(p);
  }
})(DIST);

const problems = [];
const exists = (urlPath) => {
  const clean = decodeURI(urlPath.split('#')[0].split('?')[0]);
  const p = join(DIST, clean);
  return existsSync(p) && statSync(p).isFile() ? true : existsSync(join(p, 'index.html'));
};

for (const file of files) {
  const html = readFileSync(file, 'utf8');
  const page = '/' + relative(DIST, file).replace(/\\/g, '/');
  const isEn = page.startsWith('/en/');
  const report = (msg) => problems.push(`${page}: ${msg}`);

  // Redirect stubs (from `redirects` in astro.config.mjs): only check that the target exists.
  const refresh = html.match(/<meta http-equiv="refresh" content="\d+;url=([^"]+)"/)?.[1];
  if (refresh) {
    if (!exists(refresh)) report(`redirect to missing page ${refresh}`);
    continue;
  }

  const htmlTag = html.match(/<html[^>]*>/)?.[0] ?? '';
  if (!htmlTag.includes(`lang="${isEn ? 'en' : 'ar'}"`)) report('wrong <html lang>');
  if (!htmlTag.includes(`dir="${isEn ? 'ltr' : 'rtl'}"`)) report('wrong <html dir>');
  const h1 = (html.match(/<h1[\s>]/g) ?? []).length;
  if (h1 !== 1) report(`${h1} <h1> elements`);
  if (!/<title>[^<]+<\/title>/.test(html)) report('missing <title>');
  if (!/<meta name="description" content="[^"]+"/.test(html)) report('missing meta description');
  if (!page.includes('404') && !(html.includes('hreflang="ar"') && html.includes('hreflang="en"'))) report('missing hreflang');
  if (/>\s*undefined\s*</.test(html) || /="undefined"/.test(html)) report('"undefined" in output');

  for (const [, tag] of html.matchAll(/(<img\b[^>]*>)/g)) {
    // alt="" (or a bare `alt`) is valid for decorative images whose title is printed beside them.
    if (!/\salt(=|\s|>|\/)/.test(tag)) report(`img without alt: ${tag.slice(0, 80)}`);
    const src = tag.match(/\bsrc="([^"]+)"/)?.[1];
    if (src && src.startsWith('/') && !exists(src)) report(`missing image ${src}`);
  }
  for (const [, href] of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
    if (href.startsWith('/') && !exists(href)) report(`broken link ${href}`);
  }
}

console.log(`Checked ${files.length} pages.`);
if (problems.length) {
  console.log(problems.join('\n'));
  process.exit(1);
} else console.log('No problems found.');
