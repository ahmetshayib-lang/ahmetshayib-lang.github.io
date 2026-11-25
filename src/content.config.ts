/**
 * Content collections — the "database" of the site, as plain files.
 *
 *   src/content/projects/<slug>/ar.md   + en.md   (+ images in the same folder)
 *   src/content/publications/<slug>/ar.md + en.md
 *   src/content/pages/<page>/ar.md      + en.md   (about, contact, ideas)
 *
 * The folder name is the URL slug, shared by both languages:
 *   /projects/<slug>/  and  /en/projects/<slug>/
 *
 * See docs/CONTENT.md for a step-by-step guide.
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const langs = z.enum(['ar', 'en', 'tr']);
const status = z.enum(['published', 'complete', 'ongoing', 'in-preparation', 'in-development', 'writing', 'archive']);
const coverStyle = z.enum(['wwc', 'angle', 'life', 'mattah', 'eng', 'plain']);
const link = z.object({ label: z.string(), url: z.url() });
const fact = z.object({ label: z.string(), value: z.string() });

const projects = defineCollection({
  loader: glob({ pattern: '**/[a-z][a-z].md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      altTitle: z.string().optional(),
      summary: z.string(),
      category: z.enum(['initiative', 'book', 'digital-book', 'content', 'engineering']),
      status,
      languages: z.array(langs).default([]),
      order: z.number().default(100),
      featured: z.boolean().default(false),
      /** Show on the "Ideas & Initiatives" page. */
      initiative: z.boolean().default(false),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      /** Typographic cover used when no cover image is set. */
      coverStyle: coverStyle.default('plain'),
      gallery: z
        .array(z.object({ image: image(), alt: z.string(), caption: z.string().optional() }))
        .default([]),
      links: z.array(link).default([]),
      /** Folder names of publications in src/content/publications. */
      relatedPublications: z.array(z.string()).default([]),
      year: z.string().optional(),
      facts: z.array(fact).default([]),
      description: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/[a-z][a-z].md', base: './src/content/publications' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      altTitle: z.string().optional(),
      subtitle: z.string().optional(),
      summary: z.string(),
      /** The form of the work. Availability is expressed by `status`. */
      type: z.enum(['book', 'digital-book', 'children', 'booklet']),
      /** Short audience line, e.g. "للكبار" / "For adults". */
      audience: z.string().optional(),
      status,
      /** Folder name of the parent project, if any. */
      project: z.string().optional(),
      languages: z.array(langs).default([]),
      order: z.number().default(100),
      featured: z.boolean().default(false),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      coverStyle: coverStyle.default('plain'),
      gallery: z
        .array(z.object({ image: image(), alt: z.string(), caption: z.string().optional() }))
        .default([]),
      year: z.string().optional(),
      publisher: z.string().optional(),
      pages: z.number().optional(),
      links: z.array(link).default([]),
      facts: z.array(fact).default([]),
      description: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/[a-z][a-z].md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    lead: z.string().optional(),
    description: z.string().optional(),
    /** About page: approved one-line professional description. */
    profile: z.string().optional(),
    /** About page: approved vision statement. */
    vision: z.string().optional(),
    /** About page: a short paragraph that follows the vision statement. */
    visionNote: z.string().optional(),
    /** About page: areas of work, each optionally linking to a section of the site. */
    areas: z
      .array(z.object({ title: z.string(), text: z.string(), href: z.string().optional() }))
      .default([]),
    /**
     * About page: academic background. Kept in the content model but only shown when
     * `published: true` — currently unpublished at the author's request.
     */
    academic: z
      .object({
        published: z.boolean().default(false),
        heading: z.string().optional(),
        entries: z
          .array(z.object({ title: z.string(), institution: z.string().optional(), years: z.string().optional() }))
          .default([]),
      })
      .optional(),
  }),
});

export const collections = { projects, publications, pages };
