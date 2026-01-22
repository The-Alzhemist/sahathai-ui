import { REVALIDATE_TIME } from '@/config/environtment'

export async function fetchStoryblokStory(
  slug: string,
  locale: string,
  version: 'draft' | 'published' = 'draft',
  revalidate = REVALIDATE_TIME,
  tag: string = 'investor-accordion-list'
) {
  const url = `${process.env.STORYBLOK_BASE_URL}/stories/${slug}?version=${version}&token=${process.env.STORYBLOK_TOKEN}&language=${locale}`

  const tags = [`story:${tag}`]

  const res = await fetch(url, { next: { revalidate, tags } })

  if (!res.ok) {
    throw new Error(`Storyblok fetch failed: ${res.status}`)
  }
  return res.json()
}
