/**
 * Interface strings for both languages.
 * Content (projects, publications, page copy) lives in src/content — this file is only UI chrome and labels.
 */
export const languages = { ar: 'العربية', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'ar';

export const ui = {
  ar: {
    'site.name': 'أحمد شعيب',
    'site.nameAlt': 'AHMAD SHUAIB',
    'site.tagline': 'أفكار · مشاريع · أثر',
    'site.description':
      'منصّة شخصية لأحمد شعيب تجمع الكتابة والنشر، والمبادرات الثقافية والإنسانية، والمشاريع الفكرية، والعمل الهندسي والأكاديمي.',

    'nav.home': 'الرئيسية',
    'nav.about': 'عنّي',
    'nav.projects': 'المشاريع',
    'nav.publications': 'الإصدارات',
    'nav.ideas': 'أفكار ومبادرات',
    'nav.contact': 'تواصل',
    'nav.menu': 'القائمة',
    'nav.close': 'إغلاق',
    'nav.main': 'القائمة الرئيسية',
    'nav.skip': 'انتقل إلى المحتوى',
    'lang.label': 'اللغة',
    'lang.switchTo': 'English',

    'home.hero.1': 'أفكار.',
    'home.hero.2': 'مشاريع.',
    'home.hero.3': 'أثر.',
    'home.hero.lead':
      'منصّة شخصية تجمع الكتابة والمبادرات الثقافية والمشاريع الفكرية والعمل الهندسي في مكان واحد.',
    'home.index': 'فهرس المشاريع',
    'home.featured': 'مشاريع مختارة',
    'home.publications': 'من الإصدارات',
    'home.fields': 'مجالات العمل',
    'home.cta.projects': 'كل المشاريع',
    'home.cta.publications': 'كل الإصدارات',
    'home.cta.about': 'تعرّف إليّ',

    'projects.title': 'المشاريع',
    'projects.lead': 'مبادرات وكتب وهويات محتوى وأعمال هندسية — كل مشروع بقصته وسياقه.',
    'projects.all': 'الكل',
    'publications.title': 'الإصدارات',
    'publications.lead': 'كتب وكتيّبات وإصدارات رقمية — المنشور منها وما هو قيد الإعداد.',
    'publications.empty': 'لا توجد إصدارات في هذا القسم بعد.',
    'ideas.title': 'أفكار ومبادرات',
    'ideas.lead': 'المبادرات الثقافية والاجتماعية، والأسئلة التي تقف خلف المشاريع.',
    'about.title': 'عنّي',
    'contact.title': 'تواصل',

    'detail.category': 'النوع',
    'detail.status': 'الحالة',
    'detail.languages': 'اللغات',
    'detail.year': 'السنة',
    'detail.links': 'روابط',
    'detail.project': 'ضمن مشروع',
    'detail.type': 'التصنيف',
    'detail.publisher': 'الناشر',
    'detail.pages': 'عدد الصفحات',
    'detail.gallery': 'معرض الصور',
    'detail.relatedPublications': 'إصدارات مرتبطة',
    'detail.relatedProject': 'المشروع',
    'detail.next': 'المشروع التالي',
    'detail.back.projects': 'كل المشاريع',
    'detail.back.publications': 'كل الإصدارات',
    'detail.notSet': 'لم يُحدَّد بعد',

    'cta.read': 'اقرأ المزيد',
    'cta.view': 'عرض المشروع',
    'cta.contact': 'تواصل',
    'footer.line': 'لنعمل معًا على فكرة تستحق.',
    'footer.rights': 'جميع الحقوق محفوظة',
    'placeholder': 'يُستكمل لاحقًا',

    '404.title': 'الصفحة غير موجودة',
    '404.lead': 'ربما نُقلت هذه الصفحة أو لم تُكتب بعد.',
    '404.home': 'العودة إلى الرئيسية',
  },
  en: {
    'site.name': 'Ahmad Shuaib',
    'site.nameAlt': 'أحمد شعيب',
    'site.tagline': 'Ideas · Projects · Impact',
    'site.description':
      'The personal platform of Ahmad Shuaib — writing and publishing, cultural and humanitarian initiatives, intellectual projects, and engineering and academic work.',

    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.publications': 'Publications',
    'nav.ideas': 'Ideas & Initiatives',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.close': 'Close',
    'nav.main': 'Main navigation',
    'nav.skip': 'Skip to content',
    'lang.label': 'Language',
    'lang.switchTo': 'العربية',

    'home.hero.1': 'Ideas.',
    'home.hero.2': 'Projects.',
    'home.hero.3': 'Impact.',
    'home.hero.lead':
      'A personal platform bringing together writing, cultural initiatives, intellectual projects and engineering work in one place.',
    'home.index': 'Project index',
    'home.featured': 'Selected projects',
    'home.publications': 'From the publications',
    'home.fields': 'Fields of work',
    'home.cta.projects': 'All projects',
    'home.cta.publications': 'All publications',
    'home.cta.about': 'About me',

    'projects.title': 'Projects',
    'projects.lead': 'Initiatives, books, content identities and engineering work — each with its own story and context.',
    'projects.all': 'All',
    'publications.title': 'Publications',
    'publications.lead': 'Books, booklets and digital editions — published and in preparation.',
    'publications.empty': 'Nothing in this section yet.',
    'ideas.title': 'Ideas & Initiatives',
    'ideas.lead': 'Cultural and social initiatives, and the questions behind the projects.',
    'about.title': 'About',
    'contact.title': 'Contact',

    'detail.category': 'Type',
    'detail.status': 'Status',
    'detail.languages': 'Languages',
    'detail.year': 'Year',
    'detail.links': 'Links',
    'detail.project': 'Part of',
    'detail.type': 'Category',
    'detail.publisher': 'Publisher',
    'detail.pages': 'Pages',
    'detail.gallery': 'Gallery',
    'detail.relatedPublications': 'Related publications',
    'detail.relatedProject': 'Project',
    'detail.next': 'Next project',
    'detail.back.projects': 'All projects',
    'detail.back.publications': 'All publications',
    'detail.notSet': 'Not set yet',

    'cta.read': 'Read more',
    'cta.view': 'View project',
    'cta.contact': 'Get in touch',
    'footer.line': 'Let’s work on an idea worth pursuing.',
    'footer.rights': 'All rights reserved',
    'placeholder': 'To be completed',

    '404.title': 'Page not found',
    '404.lead': 'This page may have moved, or has not been written yet.',
    '404.home': 'Back to home',
  },
} as const;

export type UIKey = keyof (typeof ui)['ar'];

/* ---------- Labels for content enums ---------- */

export const projectCategories = {
  initiative: { ar: 'مبادرة ثقافية وإنسانية', en: 'Cultural & humanitarian initiative' },
  book: { ar: 'كتاب', en: 'Book' },
  'digital-book': { ar: 'كتاب رقمي', en: 'Digital book' },
  content: { ar: 'هوية محتوى', en: 'Content identity' },
  engineering: { ar: 'هندسة وعمل أكاديمي', en: 'Engineering & academic work' },
} as const;

export const statuses = {
  published: { ar: 'منشور', en: 'Published' },
  ongoing: { ar: 'مستمر', en: 'Ongoing' },
  'in-preparation': { ar: 'قيد الإعداد', en: 'In preparation' },
  'in-development': { ar: 'قيد التطوير', en: 'In development' },
  writing: { ar: 'قيد الكتابة', en: 'Being written' },
  archive: { ar: 'أرشيف', en: 'Archive' },
} as const;

/** Publication types, in the order they appear on the Publications page. */
export const publicationTypes = {
  published: { ar: 'أعمال منشورة', en: 'Published works' },
  digital: { ar: 'إصدارات رقمية', en: 'Digital publications' },
  'in-development': { ar: 'كتب قيد الإعداد', en: 'Books in development' },
  children: { ar: 'أدب الأطفال', en: 'Children’s literature' },
  booklet: { ar: 'كتيّبات وأعمال تحريرية', en: 'Booklets & editorial projects' },
} as const;

export const languageNames = {
  ar: { ar: 'العربية', en: 'Arabic' },
  en: { ar: 'الإنجليزية', en: 'English' },
  tr: { ar: 'التركية', en: 'Turkish' },
} as const;
