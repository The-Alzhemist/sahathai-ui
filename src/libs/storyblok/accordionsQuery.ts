import { REVALIDATE_TIME } from '@/config/environtment'

export async function fetchStoryblokStory(slug: string, locale: string, version: 'draft' | 'published' = 'draft',revalidate = REVALIDATE_TIME) {
  const url = `${process.env.STORYBLOK_BASE_URL}/stories/${slug}?version=${version}&token=${process.env.STORYBLOK_TOKEN}&language=${locale}`

  const tags = ['story:investor-accordion-list']

  const res = await fetch(url, { next: { revalidate, tags } })

  if (!res.ok) {
    throw new Error(`Storyblok fetch failed: ${res.status}`)
  }
  return res.json()
}