# Sahathai UI

Landing website ของ Sahathai Terminal สร้างด้วย **Next.js App Router**, **TypeScript** และ **Tailwind CSS** สำหรับหน้า Home, About Us, Services, Infrastructure Containers, News, Blog, Investor Information, Sustainability, E-Service, Join Us และ Contact Us พร้อม routing หลายภาษาด้วย `next-intl`

## Features

- รองรับหลายภาษา `th`, `en`, `cn`
- Blog, News, Press Releases, investor relations สามารถอัพเดทเนื้อหาใน Storyblok ได้
- Storyblok webhook สำหรับ revalidate cache หลัง publish content
- Contact form handle การส่ง email โดยใช้ Formspree/Formik
- SEO metadata และ Open Graph รายหน้าหลัก
- Styling ด้วย Tailwind CSS และ global CSS
- Slider/carousel ด้วย Swiper
- Animation ด้วย Framer Motion
- HLS video banner ด้วย HLS.js
- Google Tag Manager และ cookie consent

## Tech Stack

- Next.js `14.2.4`
- React `18`
- TypeScript `5`
- Tailwind CSS `3.4.1`
- next-intl `3.15.0`
- Storyblok React SDK `4.2.0`
- Storyblok CLI / storyblok-generate-ts
- Formspree
- Formik / Yup
- Framer Motion
- Swiper
- HLS.js
- React Toastify

## Project Structure

```text
src/
  app/          routes, pages, layouts, API routes, sitemap, robots
  assets/       imported icons and static assets
  components/   shared UI components
  config/       app constants/config
  context/      React contexts
  enums/        shared enums เช่น locale และ cache tags
  features/     page-level feature modules
  hooks/        custom React hooks
  libs/         Storyblok และ next-intl integrations
  types/        shared/generated TypeScript types
  utils/        utility functions
messages/       translation files แยกตาม namespace และ locale
public/         website images, videos, PDFs, SEO images
```

## Getting Started

```bash
npm install
npm run dev
```

Local URL:

```text
http://localhost:3000
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Run development server |
| `npm run build` | Build production |
| `npm run start` | Run production server |
| `npm run lint` | Run Next.js ESLint |
| `npm run pull-storyblok-components` | Pull Storyblok component schema |
| `npm run generate-sb-types` | Generate TypeScript types จาก Storyblok schema |

## Environment Variables
ดู env ได้ที่ slack


## Staging
- branch: develop url: https://sahathai-ui.vercel.app/ (deploy on vercel account:aphiwit@codework-tech.com)
- ยังไม่มี branch production 



## Main Routes

- `/`
- `/th`
- `/en`
- `/cn`
- `/[locale]/about-us`
- `/[locale]/services`
- `/[locale]/services/container-services`
- `/[locale]/services/container-maintenance`
- `/[locale]/services/container-handling`
- `/[locale]/services/barge-services`
- `/[locale]/services/commercial-dock`
- `/[locale]/services/ground-container-transportation-services`
- `/[locale]/infrastructure-containers`
- `/[locale]/news`
- `/[locale]/news/[slug]`
- `/[locale]/blog`
- `/[locale]/blog/[slug]`
- `/[locale]/press-releases`
- `/[locale]/press-releases/[slug]`
- `/[locale]/investor-information`
- `/[locale]/investor-information/share-holder`
- `/[locale]/investor-information/share-holder-meeting`
- `/[locale]/investor-information/financial-information`
- `/[locale]/investor-information/performance-report`
- `/[locale]/investor-information/document-announcement`
- `/[locale]/investor-information/good-corporate`
- `/[locale]/investor-information/activity`
- `/[locale]/investor-information/warrant`
- `/[locale]/investor-information/set-exchange-announcement`
- `/[locale]/social-responsibility`
- `/[locale]/social-responsibility/[slug]`
- `/[locale]/sustainability-management`
- `/[locale]/e-service`
- `/[locale]/join-us`
- `/[locale]/contact-us`
- `/[locale]/privacy-policy`
- `/[locale]/code-of-conduct`

## Storyblok Content

โปรเจ็คใช้ Storyblok เป็น CMS สำหรับ content แบบ dynamic เช่น blog, news, press releases, banner popup, social responsibility และข้อมูลนักลงทุน(investor-relation)

ไฟล์หลักที่เกี่ยวข้อง:

- `src/libs/storyblok/init.ts`
- `src/libs/storyblok.ts`
- `src/libs/storyblok/client.ts`
- `src/components/Storyblok/`
- `src/app/api/storyblok/revalidate/route.ts`

Storyblok components ที่ register ไว้:

- `page`
- `eventNewsDetailCard`
- `showOneImage`
- `showTwoImage`
- `showThreeImage`
- `downloadLink`

## Revalidation

Webhook endpoint สำหรับ Storyblok:

```text
POST /api/storyblok/revalidate?secret=<secret>
```

ระบบจะอ่าน `full_slug` จาก request body แล้ว revalidate cache tag ที่เกี่ยวข้อง เช่น blog, news, press releases, e-service, banner popup, board/committee, investor information และ social responsibility

ค่า revalidate หลักปัจจุบันคือ 7 วัน หรือ `604800` วินาที

## SEO & Sitemap

- Metadata หลักของ layout อยู่ที่ `src/app/[locale]/layout.tsx`
- Metadata รายหน้าอยู่ใน `generateMetadata` ของแต่ละ route
- Sitemap อยู่ที่ `src/app/sitemap.ts`
- Robots อยู่ที่ `src/app/robots.ts`
- Open Graph images อยู่ใน `public/seo/`
- `DOMAIN_NAME` ใช้สร้าง absolute URL สำหรับ Open Graph image

## Analytics

เว็บไซต์ติดตั้ง Google Tag Manager ผ่าน `@next/third-parties/google`

Environment variable ที่เกี่ยวข้อง:

```bash
GTM_STAGING=
```

Cookie consent อยู่ที่ component:

```text
src/components/CookieConsentFloatingBar/CookieConsentFloatingBar
```

## Deployment

Build command:

```bash
npm install
npm run build
```

Run production server:

```bash
npm run start
```

ก่อน deploy ควรตรวจสอบว่า environment variables ถูกตั้งค่าครบ และ Storyblok webhook ชี้มายัง environment ที่ต้องการแล้ว

## Notes

- Locale default คือ `th`
- Middleware รองรับ `/`, `/th/*`, `/en/*`, `/cn/*`
- Remote images ที่อนุญาตอยู่ใน `next.config.mjs`
- SVG import ผ่าน `@svgr/webpack`
- Path alias หลักคือ `@/*` สำหรับ `src/*`


