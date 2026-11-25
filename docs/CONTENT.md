# دليل المحتوى — كيف تضيف مشروعًا أو إصدارًا أو تعدّل نصًّا

> لا تحتاج إلى كتابة أي كود. كل المحتوى ملفات نصية بصيغة Markdown داخل `src/content/`.
> *(English summary at the end.)*

## الفكرة الأساسية

| ما تريد تعديله | مكانه |
|---|---|
| مشروع | `src/content/projects/<اسم-المجلد>/ar.md` و `en.md` |
| إصدار (كتاب، كتيّب، قصة) | `src/content/publications/<اسم-المجلد>/ar.md` و `en.md` |
| صفحة «عنّي» / «تواصل» / «أفكار ومبادرات» | `src/content/pages/about|contact|ideas/ar.md` و `en.md` |
| البريد الإلكتروني وروابط المنصّات | `src/config/site.ts` |
| نصوص القوائم والأزرار | `src/i18n/ui.ts` |

- **اسم المجلد هو رابط الصفحة** في اللغتين. مثال: مجلد `what-we-carry` يصبح
  `/projects/what-we-carry/` بالعربية و `/en/projects/what-we-carry/` بالإنجليزية.
  استخدم حروفًا إنجليزية صغيرة وشرطات فقط (`my-new-book`).
- **لكل لغة ملفها المستقل**: `ar.md` للعربية و `en.md` للإنجليزية. يُفضَّل وجود الملفين معًا.
- **الصور** توضع في المجلد نفسه، ويُشار إليها بـ `./اسم-الصورة.jpg`. يضغطها الموقع ويحسّنها تلقائيًا.

---

## إضافة مشروع جديد (٤ خطوات)

1. انسخ مجلد مشروع موجود، مثل `src/content/projects/from-another-angle`، وسمِّ النسخة باسم المشروع الجديد.
2. افتح `ar.md` وعدّل الجزء العلوي (بين خطّي `---`)، ثم اكتب قصة المشروع تحته.
3. افعل الشيء نفسه في `en.md`.
4. احفظ، ثم ارفع التغيير (انظر «النشر» في الأسفل). سيظهر المشروع تلقائيًا في الصفحة الرئيسية وصفحة المشاريع.

### الحقول المتاحة للمشروع

```yaml
---
title: عنوان المشروع                  # مطلوب
altTitle: PROJECT TITLE               # العنوان باللغة الأخرى (اختياري)
summary: وصف قصير بجملة أو جملتين     # مطلوب — يظهر على البطاقة
category: book                        # مطلوب: initiative | book | digital-book | content | engineering
status: writing                       # مطلوب: published | ongoing | in-preparation | in-development | writing | archive
languages: [ar, en, tr]               # لغات المشروع (اختياري)
order: 6                              # ترتيب الظهور — الأصغر أولًا
featured: true                        # يظهر في «مشاريع مختارة» على الرئيسية
initiative: false                     # true = يظهر في صفحة «أفكار ومبادرات»
cover: ./cover.jpg                    # صورة الغلاف (اختياري)
coverAlt: وصف الصورة لقارئات الشاشة    # مطلوب إذا وُجدت صورة
coverStyle: plain                     # غلاف نصّي عند غياب الصورة: wwc | angle | life | mattah | eng | plain
gallery:                              # معرض صور (اختياري)
  - image: ./photo-1.jpg
    alt: وصف الصورة
    caption: تعليق يظهر تحت الصورة
links:                                # روابط خارجية (اختياري)
  - label: اقرأ الكتاب
    url: https://example.com
relatedPublications: [folder-name]    # أسماء مجلدات الإصدارات المرتبطة
year: "٢٠٢٦"                          # اختياري
facts:                                # معلومات إضافية تظهر في العمود الجانبي
  - label: الجمهور
    value: الكبار
description: وصف لمحركات البحث (اختياري — وإلا يُستخدم summary)
draft: false                          # true = لا يُنشر على الموقع
---

## عنوان فقرة

نص المشروع هنا...
```

> ⚠️ إذا احتوى أي نص في الجزء العلوي على نقطتين متبوعتين بمسافة (`: `)، ضع النص كله بين علامتي تنصيص `"..."`.

### إضافة إصدار جديد

مثل المشروع تمامًا، لكن داخل `src/content/publications/`. الحقول المختلفة:

```yaml
type: booklet          # published | digital | in-development | children | booklet
project: what-we-carry # اسم مجلد المشروع الذي ينتمي إليه (اختياري)
subtitle: عنوان فرعي
publisher: اسم الناشر
pages: 120
```

تُجمَع الإصدارات تلقائيًا في صفحة «الإصدارات» حسب `type`:
أعمال منشورة · إصدارات رقمية · كتب قيد الإعداد · أدب الأطفال · كتيّبات وأعمال تحريرية.

### المعلومات الناقصة

لا يخترع الموقع أي معلومة. ما لم يُزوَّد بعد يظهر كخانة منقّطة واضحة:

```html
<p class="placeholder">يُستكمل لاحقًا: …</p>
```

ابحث في المشروع عن `placeholder` لتجد كل ما ينتظر معلومات منك، واستبدله بالنص الحقيقي.

---

## معاينة التغييرات على جهازك

```powershell
npm run dev
```

ثم افتح `http://localhost:4321` في المتصفح. أي تعديل تحفظه يظهر فورًا.

## النشر

بعد ربط Cloudflare Pages، يكفي رفع التغييرات إلى GitHub، فيُنشر الموقع تلقائيًا خلال دقيقة أو دقيقتين:

```powershell
git add .
git commit -m "Add new project"
git push
```

## فحص الجودة قبل النشر

```powershell
npm run test:site
```

يبني الموقع ويفحص كل الصفحات: الروابط المكسورة، والصور بلا وصف، واتجاه اللغة، والعناوين، وبيانات محركات البحث.

---

## English summary

- Content lives in `src/content/{projects,publications,pages}/<slug>/{ar,en}.md`. The folder name is the URL slug in both languages.
- Copy an existing folder to add a project or publication; edit the front-matter fields shown above and write the story below it. No layout or code changes are needed.
- Images go next to the Markdown file and are referenced as `./file.jpg`; Astro optimises them at build time.
- Site-wide settings (email, social links) are in `src/config/site.ts`; UI strings in `src/i18n/ui.ts`.
- Missing facts are shown as `<p class="placeholder">…</p>` — search for `placeholder` to find everything awaiting input.
- `npm run dev` to preview, `npm run test:site` to build and check, `git push` to deploy.
