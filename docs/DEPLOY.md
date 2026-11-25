# النشر على Cloudflare Pages (مجاني)

الموقع ثابت بالكامل (Static)، ولا يحتاج إلى خادم أو قاعدة بيانات أو أي اشتراك مدفوع.

## الإعدادات

| الإعداد | القيمة |
|---|---|
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | (فارغ) |
| Production branch | `main` |
| Environment variable | `NODE_VERSION` = `24` |
| Environment variable (اختياري) | `SITE_URL` = العنوان النهائي للموقع، مثل `https://ahmad-shuaib.pages.dev` |

## الخطوات (مرة واحدة فقط)

1. أنشئ حسابًا مجانيًا على <https://dash.cloudflare.com/sign-up> (الخطة المجانية لا تطلب بطاقة دفع).
2. من القائمة: **Workers & Pages → Create → Pages → Connect to Git**.
3. اربط حساب GitHub واختر المستودع `ahmad-shuaib-site` فقط (لا داعي لمنح الوصول لكل المستودعات).
4. أدخل الإعدادات من الجدول أعلاه، ثم **Save and Deploy**.
5. بعد دقيقة أو دقيقتين يصبح الموقع متاحًا على عنوان مثل `https://ahmad-shuaib.pages.dev` مع HTTPS تلقائيًا.

بعدها، كل `git push` إلى الفرع `main` ينشر نسخة جديدة تلقائيًا، وكل فرع آخر يحصل على رابط معاينة خاص به.

## إذا اختلف العنوان

إذا أعطاك Cloudflare عنوانًا مختلفًا عن `ahmad-shuaib.pages.dev`، عدّل `SITE_URL` في إعدادات Cloudflare (أو القيمة الافتراضية في `astro.config.mjs`) حتى تكون روابط خريطة الموقع ووسوم المشاركة صحيحة.

## ما الذي قد يكلّف مالًا؟

- **لا شيء في هذا الإعداد.** الخطة المجانية تشمل: ٥٠٠ عملية بناء شهريًا، وعرض نطاق غير محدود، وHTTPS.
- **النطاق الخاص** (مثل `ahmadshuaib.com`) يُشترى بشكل منفصل (عادة ١٠–١٥ دولارًا سنويًا). لن يُشترى إلا بموافقتك.
