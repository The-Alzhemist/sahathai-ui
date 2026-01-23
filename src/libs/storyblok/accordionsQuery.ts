import { REVALIDATE_TIME } from '@/config/environtment'

export async function fetchStoryblokStory(
  slug: string,
  locale: string,
  version: 'draft' | 'published' = 'draft',
  revalidate = REVALIDATE_TIME,
  tag: string = 'investor-accordion-list',
  isRevalidateAllLanguages: boolean = false
) {
  const languages = ['th', 'en', 'cn']

  const localesToFetch = isRevalidateAllLanguages ? languages : [locale]

  try {
    const fetchPromises = localesToFetch.map(async lang => {
      const url = `${process.env.STORYBLOK_BASE_URL}/stories/${slug}?version=${version}&token=${process.env.STORYBLOK_TOKEN}&language=${lang}`

      const tags = [`story:${tag}`]
      const res = await fetch(url, {
        next: { revalidate, tags },
      })

      if (!res.ok) {
        throw new Error(`Storyblok fetch failed for ${lang}: ${res.status}`)
      }

      return res.json()
    })

    const results = await Promise.all(fetchPromises)

    return isRevalidateAllLanguages
      ? results.find(data => data.story.lang === locale) || results[0]
      : results[0]
  } catch (error) {
    console.error('Fetch Error:', error)
    throw error
  }
}
