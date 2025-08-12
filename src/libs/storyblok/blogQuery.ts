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
                                        version = 'draft',
                                        revalidate = 300,
                                        basePath = 'news',
                                      }: {
  slug: string
  lang?: string
  version?: 'draft' | 'published'
  revalidate?: number
  basePath?: string
}) {
  const url = buildUrl(`stories/${basePath}/${slug}`, {
    version,
    language: lang,
  })
  const { data } = await fetchJSON<StoryblokSingleResponse>(url, revalidate)
  return data.story
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
