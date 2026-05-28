# Storyblok Guide

เอกสารนี้สรุปการใช้งาน Storyblok ในโปรเจกต์ `sahathai-ui` สำหรับ developer ที่ต้องดูแลหรือขยายระบบ content ต่อจากของเดิม

## Overview

โปรเจกต์นี้ใช้ `Storyblok` เป็น headless CMS สำหรับ content ที่ต้องแก้ผ่านหลังบ้าน เช่น:

- `blog`
- `news`
- `press-releases`
- `social-responsibility`
- `investor relations`


แนวทางของโปรเจกต์นี้คือ:
1. เก็บ content ใน Storyblok
2. ดึงข้อมูลผ่าน Storyblok CDN API
3. render story ด้วย `@storyblok/react/rsc`
4. ใช้ `fetch` ของ Next.js ร่วมกับ `revalidate` และ `tags`
5. revalidate cache ผ่าน Storyblok webhook หลัง publish content

## Related Files

ไฟล์หลักที่เกี่ยวข้องกับ Storyblok:

- `src/libs/storyblok/init.ts`
- `src/libs/storyblok.ts`
- `src/libs/storyblok/client.ts`
- `src/libs/storyblok/blogQuery.ts`
- `src/components/Storyblok/`
- `src/app/api/storyblok/revalidate/route.ts`
- `src/enums/CacheEnum.ts`
- `src/types/storyblok.d.ts`
- `.storyblok/types/316761/storyblok-components.d.ts`
- `Storyblok-gen-type-README.md`

## Environment

- ดูใน slack:

โปรเจกต์นี้ใช้ token สำหรับเรียก Storyblok CDN API และใช้ตอน init SDK

## Initialization

Storyblok ถูก init ใน 2 จุด:

- `src/libs/storyblok/init.ts`
- `src/libs/storyblok.ts`

ตัวอย่าง component mapping ที่ลงทะเบียนไว้ตอนนี้:

- `page`
- `eventNewsDetailCard`
- `showOneImage`
- `showTwoImage`
- `showThreeImage`
- `downloadLink`

นอกจากนี้ยังเปิด fallback component ไว้ด้วย ถ้า Storyblok ส่ง blok ที่ยังไม่ได้ map ฝั่ง React จะ render ผ่าน `FallbackComponent` ให้แสดงคำว่าว่า  "This component doesnt exists" 

## Rendering Flow

### 1. Render story ทั้งก้อน

หน้า detail ใช้ `StoryblokStory` ในการ render story ที่ดึงมาจาก API โดยตรง เช่น:

- `src/app/[locale]/news/[slug]/page.tsx`
- `src/app/[locale]/blog/[slug]/page.tsx`
- `src/app/[locale]/press-releases/[slug]/page.tsx`
- `src/app/[locale]/social-responsibility/[slug]/page.tsx`

flow หลัก:

1. route รับ `slug` และ `locale`
2. เรียก helper ใน `src/libs/storyblok/blogQuery.ts`
3. ได้ response รูปแบบ `{ story }`
4. ส่ง `story` เข้า `StoryblokStory`

### 2. Render nested blok

component `page` ใน `src/components/Storyblok/Page.tsx` เป็นตัว render blok ย่อยภายใน `body` ด้วย `StoryblokServerComponent`

โครงสร้างนี้ทำให้ Storyblok สามารถประกอบ page จากหลาย blok ได้

### 3. Render rich text และ embedded blok

`src/components/Storyblok/news/EventNewsDetailCard.tsx` เป็นตัวอย่างสำคัญของการ render content แบบ rich text

ในไฟล์นี้มี:

- `nodeResolvers` สำหรับ element เช่น paragraph, heading, list, quote, hr, image
- `markResolvers` สำหรับ bold, italic, underline, link, code, highlight
- `blokResolvers` สำหรับ blok ที่ถูกแทรกใน rich text

embedded blok ที่รองรับตอนนี้:

- `showOneImage`
- `showTwoImage`
- `showThreeImage`
- `downloadLink`

ดังนั้น editor สามารถแทรก blok image หรือ download link ลงไปใน rich text ของ Storyblok ได้ และหน้าเว็บจะ render ออกมาเป็น React component ตาม mapping

## Data Fetching

โปรเจกต์นี้ดึงข้อมูลจาก Storyblok CDN API เป็นหลักผ่าน `fetch()`

helper หลักอยู่ที่:

- `src/libs/storyblok/client.ts`
- `src/libs/storyblok/blogQuery.ts`

### `buildUrl()`

`src/libs/storyblok/client.ts` มี helper `buildUrl()` สำหรับสร้าง URL ไปยัง `https://api.storyblok.com/v2/cdn`

มันจะ:

- รับ path เช่น `stories`
- รับ query params
- append `token` จาก `STORYBLOK_TOKEN`

### Query helpers ที่มีอยู่

ใน `src/libs/storyblok/blogQuery.ts` มีฟังก์ชันหลักดังนี้:

- `fetchAllBlog()`
- `fetchLastBlog()`
- `fetchNewsBySlug()`
- `fetchBlogBySlug()`
- `fetchPressReleaseBySlug()`
- `fetchSocialResponsibilityBySlug()`


### พารามิเตอร์ที่ใช้บ่อย

เวลายิงไป Storyblok จะใช้พารามิเตอร์ประมาณนี้:

- `version: 'published'`
- `starts_with`
- `is_startpage: false`
- `page`
- `per_page`
- `language`
- `sort_by`
- `search_term`

ตัวอย่างการใช้งานจริง:

- หน้า `news` list ใช้ `startsWith: 'news/'`
- หน้า `blog` list ใช้ `startsWith: 'blog/'`
- หน้า `press-releases` list ใช้ `startsWith: 'press-releases/'`
- หน้า `social-responsibility` list ใช้ `startsWith: 'social-responsibility/'`

หมายความว่า content ใน Storyblok ถูกจัดการตาม slug/folder เป็นหลัก

## Locales

โปรเจกต์นี้รองรับหลายภาษา:

- `th`
- `en`
- `cn`

ตอน fetch content จะส่ง `language: locale` ไปที่ Storyblok API ดังนั้น content ต้องมี locale ที่สอดคล้องกับ route ของเว็บ

ตัวอย่าง route:

- `/th/news`
- `/en/blog`
- `/cn/press-releases`

## Cache Strategy

โปรเจกต์นี้ใช้ Next.js data cache ผ่าน `fetch(..., { next: { revalidate, tags } })`

จุดสำคัญ:

- แต่ละ query กำหนด `revalidate`
- แต่ละ query กำหนด `tags`
- เมื่อ publish content จาก Storyblok จะยิง webhook มา revalidate tag ที่เกี่ยวข้อง

ค่า `revalidate` กลางมาจาก `REVALIDATE_TIME`

cache tags หลักประกาศไว้ใน `src/enums/CacheEnum.ts` เช่น:

- `story:blog-list`
- `story:news-list`
- `story:press-release-list`
- `story:social-responsibility`
- `story:e-service`
- `story:board-and-committee`

## Webhook Revalidation

endpoint สำหรับรับ webhook คือ:

```text
POST /api/storyblok/revalidate?secret=<secret>
```

implementation อยู่ที่:

- `src/app/api/storyblok/revalidate/route.ts`

flow การทำงาน:

1. Storyblok ยิง webhook หลัง publish
2. API route ตรวจ `secret`
3. อ่าน `full_slug` จาก request body
4. map `full_slug` ไปหา cache tag ผ่าน `REVALIDATE_RULES`
5. เรียก `revalidateTag()`

ตัวอย่าง `full_slug` ที่ route ใช้ตัดสินใจ:

- `blog/...`
- `news/...`
- `press-releases/...`
- `social-responsibility/...`
- `investor-relations/...`
- `banner/...`
- `e-service/...`

ถ้าเพิ่ม section ใหม่และต้องการให้ publish แล้วหน้าเว็บ refresh cache อัตโนมัติ ต้องเพิ่มgเงื่อนไข ใน:

- `src/enums/CacheEnum.ts`
- `src/app/api/storyblok/revalidate/route.ts`

## Type Generation

โปรเจกต์นี้มี flow สำหรับดึง Storyblok component schema แล้ว generate TypeScript type

script ใน `package.json`:

```bash
npm run pull-storyblok-components
npm run generate-sb-types
```

ค่าจริงของ script ตอนนี้คือ:

- `storyblok comp pull -s 316761`
- `storyblok-generate-ts source=.storyblok/components/316761/components.json target=src/types/storyblok`

รายละเอียดเพิ่มเติมอยู่ใน `Storyblok-gen-type-README.md`

### ผลลัพธ์ที่ได้

schema และ types จะอยู่ประมาณนี้:

- `.storyblok/components/316761/components.json`
- `.storyblok/types/316761/storyblok-components.d.ts`
- `src/types/storyblok.d.ts`

types เหล่านี้ถูกใช้ใน component บางตัว เช่น `EventNewsDetailCard.tsx`

## Adding a New Storyblok Component

ถ้าต้องการเพิ่ม blok ใหม่จาก Storyblok ให้ทำตามขั้นตอนนี้

1. สร้าง component schema ใน Storyblok space
2. pull schema ลงมา

```bash
npm run pull-storyblok-components
```

3. generate types

```bash
npm run generate-sb-types
```

4. สร้าง React component ใน `src/components/Storyblok/`
5. map component name ใน `src/libs/storyblok/init.ts`
6. ถ้าจำเป็น ให้ map ซ้ำใน `src/libs/storyblok.ts`
7. ถ้า blok นี้ถูกใช้ใน rich text ให้เพิ่ม `blokResolvers` ใน component renderer ที่เกี่ยวข้อง
8. ทดสอบว่า `StoryblokStory` render ได้จริง
9. ถ้าต้องมี cache invalidation หลัง publish ให้เพิ่ม tag/revalidate rule

ตัวอย่าง mapping ปัจจุบัน:

```ts
components: {
  page: Page,
  eventNewsDetailCard: EventNewsDetailCard,
  showOneImage: ShowOneImage,
  showTwoImage: ShowTwoImage,
  showThreeImage: ShowThreeImage,
  downloadLink: DownloadLink,
}
```

## Adding a New Content Section

ถ้าต้องการเพิ่ม section ใหม่ เช่น `case-studies`  แนวทางคือ:

1. กำหนด slug/folder ใน Storyblok ให้ชัด เช่น `case-studies/`
2. เพิ่ม query helper หรือ reuse `fetchAllBlog()` โดยส่ง `startsWith` ให้ตรง
3. สร้างหน้า list และ detail ใน `src/app/[locale]/...`
4. ถ้า detail page ใช้ story layout จาก Storyblok ให้ render ผ่าน `StoryblokStory`
5. เพิ่ม `RevalidateTag` และ `SlugType` ถ้าต้องการ webhook revalidate
6. เพิ่ม rule ใน `src/app/api/storyblok/revalidate/route.ts`

## Existing Usage Examples

ตัวอย่างการใช้งานจริงในโปรเจกต์:

### News list

- `src/app/[locale]/news/page.tsx`
- ใช้ `fetchAllBlog({ startsWith: 'news/', tag: RevalidateTag.NEWS })`
- ใช้ `fetchLastBlog({ startsWith: 'news/', tag: RevalidateTag.NEWS })`

### Blog list

- `src/app/[locale]/blog/page.tsx`
- ใช้ `fetchAllBlog({ startsWith: 'blog/', tag: RevalidateTag.BLOG })`
- ใช้ `fetchLastBlog({ startsWith: 'blog/', tag: RevalidateTag.BLOG })`

### News detail

- `src/app/[locale]/news/[slug]/page.tsx`
- ใช้ `fetchNewsBySlug(slug, locale)`
- render ผ่าน `<StoryblokStory story={data.story} />`

### Blog detail

- `src/app/[locale]/blog/[slug]/page.tsx`
- ใช้ `fetchBlogBySlug(slug, locale)`
- render ผ่าน `<StoryblokStory story={data.story} />`

## Troubleshooting

### 1. หน้า detail ไม่ render หรือขึ้น fallback

ตรวจ:

- component name ใน Storyblok ตรงกับ key ใน `components` mapping หรือไม่
- component React ถูก export ถูกต้องหรือไม่
- มีการ init Storyblok ครบหรือไม่

### 2. publish แล้วหน้าเว็บไม่อัปเดต

ตรวจ:

- webhook ของ Storyblok ชี้มาถูก environment หรือไม่
- `secret` ถูกต้องหรือไม่
- `full_slug` เข้า rule ที่กำหนดไว้หรือไม่
- query นั้นใส่ `tags` ไว้หรือไม่

### 3. content คนละภาษาไม่ขึ้น

ตรวจ:

- route locale ถูกต้องหรือไม่
- Storyblok มี translated content สำหรับ locale นั้นหรือไม่
- query ส่ง `language` ถูกต้องหรือไม่

### 4. type ไม่อัปเดตหลังแก้ schema

รันใหม่:

```bash
npm run pull-storyblok-components
npm run generate-sb-types
```

## Notes

- โปรเจกต์นี้ใช้ Storyblok ทั้งผ่าน `@storyblok/react/rsc` และการเรียก CDN API ตรง
- implementation ปัจจุบันเน้น content แบบ published เป็นหลัก
- naming ของ helper เช่น `fetchAllBlog()` เป็นชื่อเดิมของโปรเจกต์ แต่ถูก reuse กับหลาย section

