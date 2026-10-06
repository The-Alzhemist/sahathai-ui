# Sahathai UI

Landing website ของ Sahathai Terminal สร้างด้วย **Next.js App Router**, **TypeScript** และ **Tailwind CSS** สำหรับหน้า Home, About Us, Services, Infrastructure Containers, News, Blog, Investor Information, Sustainability, E-Service, Join Us และ Contact Us พร้อม routing หลายภาษาด้วย `next-intl`

## Features

- รองรับหลายภาษา `th`, `en`, `cn`
- Blog, News, Press Releases, investor relations สามารถอัพเดทเนื้อหาใน Strapi ได้
- Strapi webhook สำหรับ revalidate cache หลัง publish content
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
- Strapi (headless CMS, REST API)
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
  libs/         Strapi และ next-intl integrations
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

## Strapi Content

โปรเจ็คใช้ Strapi เป็น CMS สำหรับ content แบบ dynamic เช่น article (blog/news/press releases), banner popup, sustainability และข้อมูลนักลงทุน (investor-relation)

ไฟล์หลักที่เกี่ยวข้อง:

- `src/libs/strapi/` fetch function ของแต่ละ content type
- `src/libs/strapi/fetchStrapi.ts` map locale `cn` เป็น `zh` และ fallback เป็น `th` เมื่อไม่มีข้อมูล
- `src/enums/StrapiCacheEnum.ts` cache tags
- `src/components/StrapiBlocks/` render rich text (Strapi Blocks JSON)
- `src/app/api/strapi/revalidate/route.ts`

Environment variables ที่เกี่ยวข้อง:

- `NEXT_PUBLIC_STRAPI_BASE_URL` (ต้องตั้งก่อน build)
- `STRAPI_WEBHOOK_SECRET`

## Revalidation

Webhook endpoint สำหรับ Strapi:

```text
POST /api/strapi/revalidate
Header: x-webhook-secret: <STRAPI_WEBHOOK_SECRET>
```

ระบบจะอ่าน `uid` และ `event` จาก request body แล้ว revalidate cache tag ของ content type นั้น (content ที่มี draft/publish ตอบเฉพาะ `entry.publish` / `entry.unpublish`, popup banner ตอบ `entry.create` / `entry.update` / `entry.delete`)

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

ก่อน deploy ควรตรวจสอบว่า environment variables ถูกตั้งค่าครบ และ Strapi webhook ชี้มายัง environment ที่ต้องการแล้ว


## Google Tag and GA4 
- can access by developer@codework-tech.com

## Notes

- Locale default คือ `th`
- Middleware รองรับ `/`, `/th/*`, `/en/*`, `/cn/*`
- Remote images ที่อนุญาตอยู่ใน `next.config.mjs`
- SVG import ผ่าน `@svgr/webpack`
- Path alias หลักคือ `@/*` สำหรับ `src/*`





