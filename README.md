# AHMAD SHUAIB — أحمد شعيب

**Ideas. Projects. Impact. — أفكار. مشاريع. أثر.**

A bilingual (Arabic default / English) personal creative platform: writing and publishing, cultural and humanitarian initiatives, intellectual projects, and engineering and academic work.

Built with **Astro**, **TypeScript**, **Tailwind CSS** and **Astro Content Collections**. Fully static, self-hosted free fonts, no database, no paid services. Deployed on **Cloudflare Pages** (free plan).

## Quick start

```powershell
npm install
npm run dev        # http://localhost:4321
npm run build      # production build into dist/
npm run test:site  # build + check every page (links, alt text, lang/dir, SEO)
```

## Structure

```
src/
  content/
    projects/<slug>/ar.md, en.md (+ images)   ← projects
    publications/<slug>/ar.md, en.md           ← books, booklets, stories
    pages/about|contact|ideas/ar.md, en.md     ← editable page copy
  content.config.ts      ← content schemas (fields and allowed values)
  config/site.ts         ← email, social links
  i18n/ui.ts             ← interface strings and labels (AR/EN)
  i18n/utils.ts          ← routing helpers, Eastern Arabic numerals
  styles/global.css      ← design system (tokens, typography, components)
  components/            ← Header, Footer, Cover, ProjectCard, PublicationCard, StatusTag
  views/                 ← page templates (shared by both languages)
  pages/                 ← thin routes: Arabic at /, English at /en/
design/specimen.html     ← approved design specimen (v0.1)
docs/CONTENT.md          ← how to add projects and publications (Arabic + English)
docs/DEPLOY.md           ← Cloudflare Pages setup
scripts/check-site.mjs   ← post-build quality checks
```

## Routing

| Arabic (default) | English |
|---|---|
| `/` | `/en/` |
| `/about/` | `/en/about/` |
| `/projects/` · `/projects/<slug>/` | `/en/projects/` · `/en/projects/<slug>/` |
| `/publications/` · `/publications/<slug>/` | `/en/publications/` · `/en/publications/<slug>/` |
| `/ideas/` | `/en/ideas/` |
| `/contact/` | `/en/contact/` |

Every page links to its counterpart with `hreflang`; the language switcher keeps you on the same page.

## Design system

- **Colours:** Deep Burgundy `#4A2635`, Warm Beige `#F2EAE0`, Ivory `#FAF8F4`, Charcoal `#282428`, Muted Rose `#B99A9E` (+ derived Rose Ink `#7C5B61` for small text, AA contrast).
- **Type:** Markazi Text (Arabic), Newsreader (English), IBM Plex Sans Arabic / IBM Plex Sans (interface). *What We Carry* keeps its own sub-identity (basalt/apricot, Reem Kufi) from its style bible.
- **Arabic rules:** no letter-spacing, no italics, larger body (21px / 1.85), Arabic punctuation, Eastern Arabic numerals.

## Content rules

No facts are invented: unknown values are simply left out. Book covers are shown only from original files; a book without one gets a neutral “cover coming soon” plate. See [docs/CONTENT.md](docs/CONTENT.md).
