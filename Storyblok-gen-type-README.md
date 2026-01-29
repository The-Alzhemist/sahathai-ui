# how to generate type for storyblok components

# Login
npx storyblok login  
- region EU 

# Yarn command 
- yarn pull-storyblok-components 
- yarn generate-sb-types

- หรือใช้คำสั่งตามด้านล่างนี้


# Pull components from your space
- npx storyblok comp pull --space SPACE_ID 
- จะได้ component.json อยู่ใน .storyblok/components/SPACE_ID/component.json


# Generate TypeScript types
storyblok-generate-ts source=.storyblok/components/SPACE_ID/components.json target=src/types/storyblok


- จะได้ไฟล์ storyblok.d.ts มา อยู่ที่ /types/storyblok
- generate type ของ blok แต่ละตัว
- นำไป assign ตอน loop map body ที่ได้จาก response 



# Read more in 
https://www.storyblok.com/mp/introducing-storyblok-cli-v4 (v4)
