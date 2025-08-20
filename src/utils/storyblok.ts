import { STORYBLOK_BASE_URL, STORYBLOK_TOKEN } from '@/config/environtment'

export async function fetchStoryblokStory(slug: string, locale: string, version: 'draft' | 'published' = 'draft') {
  const url = `${STORYBLOK_BASE_URL}/stories/${slug}?version=${version}&token=${STORYBLOK_TOKEN}&language=${locale}`

  const res = await fetch(url, { next: { revalidate: 60 } })
  if (!res.ok) {
    throw new Error(`Storyblok fetch failed: ${res.status}`)
  }
  return res.json()
}