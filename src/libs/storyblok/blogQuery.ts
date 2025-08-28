import { buildUrl, fetchJSON } from './client'
import {
  StoryblokListResponse,
} from './types'
import { ISbStoriesParams } from '@storyblok/react/rsc'

export async function fetchAllBlog({
                                     page = 1,
                                     perPage = 10,
                                     lang = 'th',
                                     version = 'published',
                                     search,
                                     startsWith = 'blog/',
                                     revalidate = 86400, // 1 day
                                   }: {
  page?: number
  perPage?: number
  lang?: string
  version?: 'published'
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

  const res = await fetch(url, {
    next: {
      revalidate,
      tags: ['story:blog-list', `story:blog-list:${lang}`], // ← สำคัญ
    },
  })
  if (!res.ok) throw new Error('Failed to fetch list')
  const data = await res.json()
  const total = Number(res.headers.get('total') || data.stories?.length || 0)
  return { stories: data.stories, total }
}



export async function fetchBlogBySlug(slug: string, lang: string) {
  const url =
    `https://api.storyblok.com/v2/cdn/stories/blog/${slug}?` +
    new URLSearchParams({
      token: 'H1wfrTArHm3VE441H8WQ5wtt' as string,
      version: 'published',
      language: lang,
      // fallback_lang: '1',     // (ถ้าต้องการ fallback ภาษา)
    })

  const res = await fetch(url, {
    next: {
      revalidate: 86400,          // cache 1 วัน
      tags: [`story:${slug}`, 'story:blog-list'], // <- for invalidate cache
    },
  })
  if (!res.ok) throw new Error('Failed to fetch story')
  return res.json()
}


// ---------------------------------------

// export async function fetchLatestBlog({
//                                         lang = 'th',
//                                         version = 'published',
//                                         startsWith = 'blog/',
//                                         revalidate = 300,
//                                         sortBy = 'first_published_at:desc',
//                                       }: {
//   lang?: string
//   version?: 'draft' | 'published'
//   startsWith?: string
//   revalidate?: number
//   sortBy?: string
// }) {
//   const url = buildUrl('stories', {
//     version,
//     starts_with: startsWith,
//     is_startpage: false,
//     page: 1,
//     per_page: 1,
//     language: lang,
//     sort_by: sortBy,
//   })
//
//   const { data } = await fetchJSON<StoryblokListResponse>(url, revalidate)
//   return data.stories?.[0] ?? null
// }

export async function fetchLastBlog({
                                      lang = 'th',
                                      startsWith = 'blog/',
                                      revalidate = 84600, // 1 วัน
                                      sortBy = 'first_published_at:desc', // หรือ 'published_at:desc'
                                    }: {
  lang?: string
  startsWith?: string
  revalidate?: number
  sortBy?: string
}) {
  const url = buildUrl('stories', {
    version: 'published',
    starts_with: startsWith,
    is_startpage: false,
    page: 1,
    per_page: 1,
    language: lang,
    sort_by: sortBy,
  })

  const res = await fetch(url, {
    next: {
      revalidate,
      // ใช้ tags เดียวกับ fetchAllBlog
      tags: ['story:blog-list', `story:blog-list:${lang}`],
    },
  })

  if (!res.ok) throw new Error('Failed to fetch latest blog')

  const data = await res.json()

  console.log("data::",data)
  return data?.stories?.[0] ?? null
}
