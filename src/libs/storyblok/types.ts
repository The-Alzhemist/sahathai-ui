// ส่วนนี้เป็น type สำหรับดึงข้อมูล storyblok , styoryblok ไม่ได้  gen มาให้
export type StoryblokStoryResponse = {
  story: {
    name: string
    created_at: string
    published_at: string
    updated_at: string
    id: number
    uuid: string
    content: {
      _uid: string
      body: any[] //แต่ละ component จะต้อง assign type ที่มาจาก storyblok.d.ts (วิธีการ gen type อ่านได้ที่ README)
    }
  }
}
