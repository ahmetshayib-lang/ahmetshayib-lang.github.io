// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Primary (canonical) address. The site is also mirrored on Cloudflare Pages
// (ahmad-shuaib.pages.dev); both builds point search engines here.
// Change this if a custom domain is added later.
const SITE = process.env.SITE_URL ?? 'https://ahmetshayib-lang.github.io';

export default defineConfig({
  site: SITE,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  // Old URLs keep working after a slug change.
  redirects: {
    '/projects/mattah-wa-maana': '/projects/mate-and-meaning/',
    '/en/projects/mattah-wa-maana': '/en/projects/mate-and-meaning/',
  },
  i18n: {
    locales: ['ar', 'en'],
    defaultLocale: 'ar',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      filter: (page) => !/\/404\/?$/.test(page),
      i18n: { defaultLocale: 'ar', locales: { ar: 'ar', en: 'en' } },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
