// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Production URL. Update this once the Cloudflare Pages address (or a custom domain) is known.
const SITE = process.env.SITE_URL ?? 'https://ahmad-shuaib.pages.dev';

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
