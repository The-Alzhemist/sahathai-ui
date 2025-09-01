import { STORYBLOK_BASE_URL, STORYBLOK_TOKEN } from '@/config/environtment'

export async function fetchStoryblokStory(slug: string, locale: string, version: 'draft' | 'published' = 'draft',revalidate = 300) {
  const url = `${STORYBLOK_BASE_URL}/stories/${slug}?version=${version}&token=${STORYBLOK_TOKEN}&language=${locale}`

  // ใส่ tag อย่างน้อย 2 ระดับ: ต่อเรื่อง และ ต่อเพจ/เส้นทาง
  const tags = [
    `story:${slug}`,                 // เจาะจงเรื่อง
    `story:${locale}:${slug}`,       // เจาะจงเรื่อง+ภาษา
    'story:investor-accordion-list' // list/global section (ถ้ามี)
  ]

  const res = await fetch(url, { next: { revalidate, tags } })


  if (!res.ok) {
    throw new Error(`Storyblok fetch failed: ${res.status}`)
  }
  return res.json()
}