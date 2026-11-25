import { ui, defaultLang, type Lang, type UIKey } from './ui';

export function t(lang: Lang, key: UIKey): string {
  return ui[lang][key] ?? ui[defaultLang][key];
}

export function dir(lang: Lang): 'rtl' | 'ltr' {
  return lang === 'ar' ? 'rtl' : 'ltr';
}

export function otherLang(lang: Lang): Lang {
  return lang === 'ar' ? 'en' : 'ar';
}

/** Build a site path for a language. `path` is language-neutral, e.g. "/projects/what-we-carry/". */
export function localizePath(lang: Lang, path = '/'): string {
  const clean = '/' + path.replace(/^\/+/, '');
  const withSlash = clean.endsWith('/') ? clean : clean + '/';
  return lang === defaultLang ? withSlash : `/${lang}${withSlash === '/' ? '/' : withSlash}`;
}

/** Strip the language prefix from a pathname, giving the language-neutral path. */
export function neutralPath(pathname: string): string {
  const p = pathname.replace(/^\/en(?=\/|$)/, '');
  return p === '' ? '/' : p;
}

const eastern = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

/** Arabic text uses Eastern Arabic numerals (as in the What We Carry style bible). */
export function num(lang: Lang, value: number | string, pad = 0): string {
  const s = String(value).padStart(pad, '0');
  return lang === 'ar' ? s.replace(/\d/g, (d) => eastern[Number(d)]) : s;
}

/** Join a list with the language's separator. */
export function list(lang: Lang, items: string[]): string {
  return items.join(lang === 'ar' ? '، ' : ', ');
}
