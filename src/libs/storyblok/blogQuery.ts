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
                                     startsWith = 'blog' +
                                     '/',
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



// --------------


// export async function fetchBlogBySlug(slug: string, lang: string) {
//   const sbParams: ISbStoriesParams = {
//     version: 'draft', // or 'draft' based on your needs
//     language: lang,
//   }
//
//   const storyblokApi = getStoryblokApi()
//   const storyBookData = storyblokApi.get(`cdn/stories/blog/${slug}`, sbParams)
//   return storyBookData
// }



// export async function fetchBlogBySlug(slug: string, lang: string) {
//   const url =
//     `https://api.storyblok.com/v2/cdn/stories/blog/${slug}?` +
//     new URLSearchParams({
//       token: 'H1wfrTArHm3VE441H8WQ5wtt' as string,
//       version: 'published', // ✅ ใช้ published สำหรับ ISR
//       language: lang,
//     })
//
//   const res = await fetch(url, {
//     next: { revalidate: 300 }, // ✅ revalidate ทุก 300 วินาที
//   })
//
//   if (!res.ok) throw new Error('Failed to fetch story')
//   return res.json()
// }



export async function fetchBlogBySlug(slug: string, lang: string) {
  const url =
    `https://api.storyblok.com/v2/cdn/stories/blog/${slug}?` +
    new URLSearchParams({
      token: 'H1wfrTArHm3VE441H8WQ5wtt' as string,
      version: 'published',      // ใช้ published สำหรับเว็บจริง
      language: lang,
      // fallback_lang: '1',     // (ถ้าต้องการ fallback ภาษา)
    })

  const res = await fetch(url, {
    next: {
      revalidate: 3600,          // ค่าพื้นฐานยาวๆ ไปก่อน
      tags: [`story:${slug}`, 'story:blog-list'], // <- สำคัญ
    },
  })
  if (!res.ok) throw new Error('Failed to fetch story')
  return res.json()
}


// ---------------------------------------
export async function fetchLatestBlog({
                                        lang = 'th',
                                        version = 'published',
                                        startsWith = 'blog/',
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
