import { buildUrl, fetchJSON } from './client'
import {
  StoryblokListResponse,
  StoryblokSingleResponse,
  StoryblokStory,
} from './types'

export async function fetchAllBlog({
                                     page = 1,
                                     perPage = 10,
                                     lang = 'th',
                                     version = 'published',
                                     search,
                                     startsWith = 'news/',
                                     revalidate = 300,
                                   }: {
  page?: number
  perPage?: number
  lang?: string
  version?: 'draft' | 'published'
  search?: string
  startsWith?: string
  revalidate?: number
}) {
  const url = buildUrl('stories', {
    version,
    starts_with: startsWith,
    is_startpage: false,
    page,
    per_page: perPage,
    language: lang,
    ...(search ? { search_term: search } : {}),
  })

  const { data, headers } = await fetchJSON<StoryblokListResponse>(url, revalidate)
  const total = Number(headers.get('total') || data.stories?.length || 0)
  return { stories: data.stories, total }
}


export async function fetchBlogBySlug({
                                        slug,
                                        lang = 'th',
                                        revalidate = 300,
                                        version = 'published',
                                        basePath = 'blog',
                                      }: {
  slug: string
  lang?: string
  revalidate?: number
  version?: 'draft' | 'published'
  basePath?: string
}) {
  const url = new URL('https://api.storyblok.com/v2/cdn/stories/' + `${basePath}/${slug}`)
  url.searchParams.set('version', version)
  url.searchParams.set('token', 'H1wfrTArHm3VE441H8WQ5wtt')
  url.searchParams.set('language', lang)
  // ถ้าต้องการ resolve relations/links ก็เพิ่มได้ตามต้องการ

  const res = await fetch(url.toString(), {
    // ผูกแท็กต่อ locale+slug เพื่อให้แคชแยกกันชัดเจน
    next: { revalidate, tags: [`story:${basePath}:${slug}:${lang}`] },
  })

  if (!res.ok) throw new Error(`Storyblok fetch failed ${res.status}`)
  const data = await res.json()
  return data.story // หรือ shape ที่คุณใช้ต่อ
}

export async function fetchLatestBlog({
                                        lang = 'th',
                                        version = 'published',
                                        startsWith = 'news/',
                                        revalidate = 300,
                                        sortBy = 'first_published_at:desc',
                                      }: {
  lang?: string
  version?: 'draft' | 'published'
  startsWith?: string
  revalidate?: number
  sortBy?: string
}) {
  const url = buildUrl('stories', {
    version,
    starts_with: startsWith,
    is_startpage: false,
    page: 1,
    per_page: 1,
    language: lang,
    sort_by: sortBy,
  })

  const { data } = await fetchJSON<StoryblokListResponse>(url, revalidate)
  return data.stories?.[0] ?? null
}
