# Generate Storyblok Types

ใช้สำหรับดึง schema ของ Storyblok แล้ว generate TypeScript types สำหรับ blok ต่าง ๆ

## Login

```bash
npx storyblok login
- อีเมล password ดูใน slack
- เลือก EU
```

## คำสั่งที่ใช้ในโปรเจกต์

```bash
yarn pull-storyblok-components
yarn generate-sb-types
```

## หรือรันแบบตรง ๆ

### 1. Pull components จาก Storyblok space

```bash
npx storyblok comp pull --space SPACE_ID
```

ไฟล์ schema จะถูกสร้างที่:

```text
.storyblok/components/SPACE_ID/components.json
```

### 2. Generate TypeScript types

```bash
storyblok-generate-ts source=.storyblok/components/SPACE_ID/components.json target=src/types/storyblok
```

ผลลัพธ์:

- ได้ไฟล์ `src/types/storyblok.d.ts`
- ใช้สำหรับ assign type ของ blok แต่ละตัว
- นำไปใช้ตอน loop หรือ map ข้อมูลจาก Storyblok response

## Reference

https://www.storyblok.com/mp/introducing-storyblok-cli-v4
