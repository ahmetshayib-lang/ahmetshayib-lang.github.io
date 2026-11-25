import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '@/i18n/ui';

type Coll = 'projects' | 'publications' | 'pages';

export type Localized<C extends Coll> = {
  slug: string;
  lang: Lang;
  entry: CollectionEntry<C>;
  data: CollectionEntry<C>['data'];
};

/** "what-we-carry/ar" -> { slug: "what-we-carry", lang: "ar" } */
function split(id: string): { slug: string; lang: string } {
  const parts = id.split('/');
  return { lang: parts.pop() ?? '', slug: parts.join('/') };
}

async function localized<C extends Coll>(coll: C, lang: Lang): Promise<Localized<C>[]> {
  const entries = (await getCollection(coll)) as CollectionEntry<C>[];
  return entries
    .map((entry) => ({ ...split(entry.id), entry, data: entry.data }))
    .filter((e) => e.lang === lang)
    .filter((e) => !('draft' in e.data && e.data.draft && import.meta.env.PROD)) as Localized<C>[];
}

const byOrder = (a: { data: { order?: number } }, b: { data: { order?: number } }) =>
  (a.data.order ?? 100) - (b.data.order ?? 100);

export async function getProjects(lang: Lang) {
  return (await localized('projects', lang)).sort(byOrder);
}

export async function getPublications(lang: Lang) {
  return (await localized('publications', lang)).sort(byOrder);
}

export async function getPage(lang: Lang, slug: string) {
  return (await localized('pages', lang)).find((p) => p.slug === slug);
}
