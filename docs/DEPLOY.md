# النشر

الموقع ثابت بالكامل (Static)، ولا يحتاج إلى خادم أو قاعدة بيانات أو أي اشتراك مدفوع. يُنشر تلقائيًا في مكانين عند كل رفع إلى الفرع `main`:

| المكان | العنوان | ملاحظات |
|---|---|---|
| **GitHub Pages** (العنوان الأساسي) | https://ahmetshayib-lang.github.io/ | يُبنى عبر GitHub Actions (`.github/workflows/deploy-pages.yml`). مجاني للمستودعات العامة. |
| **Cloudflare Pages** (نسخة موازية) | https://ahmad-shuaib.pages.dev/ | نطاقات `pages.dev` محجوبة لدى بعض مزوّدي الإنترنت في تركيا. |

كلا النسختين تشيران إلى عنوان GitHub بوصفه العنوان الأساسي لمحركات البحث (`site` في `astro.config.mjs`).

## GitHub Pages

- المستودع: `ahmetshayib-lang/ahmetshayib-lang.github.io` (عام). اسم المستودع بهذا الشكل هو ما يعطي العنوان القصير.
- الإعداد: **Settings → Pages → Source: GitHub Actions**.
- كل رفع إلى `main` يشغّل البناء وفحص الصفحات ثم النشر. تتابع التقدّم من تبويب **Actions** في المستودع.

## Cloudflare Pages

| الإعداد | القيمة |
|---|---|
| Project name | `ahmad-shuaib` |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Environment variable | `NODE_VERSION` = `24` |

## نطاق خاص (لاحقًا)

إذا اشتريت نطاقًا مثل `ahmadshuaib.com` (نحو ١٠–١٥ دولارًا سنويًا)، يمكن ربطه بأيٍّ من الخدمتين مجانًا. بعدها عدّل `SITE` في `astro.config.mjs` و`SITE_URL` في ملف سير العمل إلى العنوان الجديد.
