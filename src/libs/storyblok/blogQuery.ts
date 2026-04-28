import { RevalidateTag } from '@/enums/CacheEnum'
import { buildUrl } from './client'

import { REVALIDATE_TIME } from '@/config/environtment'

export async function fetchAllBlog({
  page = 1,
  perPage = 10,
  lang = 'th',
  version = 'published',
  search,
  startsWith = 'blog/',
  revalidate = REVALIDATE_TIME,
  sortBy = 'created_at:desc',
  tag = 'story:blog-list',
}: {
  page?: number
  perPage?: number
  lang?: string
  version?: 'published'
  search?: string
  startsWith?: string
  revalidate?: number
  sortBy?: string
  tag?: string
}) {
  const url = buildUrl('stories', {
    version,
    starts_with: startsWith,
    is_startpage: false,
    page,
    per_page: perPage,
    language: lang,
    sort_by: sortBy,
    ...(search ? { search_term: search } : {}),
  })

  const res = await fetch(url, {
    next: {
      revalidate: revalidate,
      tags: [tag],
    },
  })
  if (!res.ok) throw new Error('Failed to fetch list')
  const data = await res.json()
  const total = Number(res.headers.get('total') || data.stories?.length || 0)
  return { stories: data.stories, total }
}

export async function fetchLastBlog({
  lang = 'th',
  startsWith = 'blog/',
  revalidate = REVALIDATE_TIME, // 1 วัน
  sortBy = 'created_at:desc',
  tag = '',
}: {
  lang?: string
  startsWith?: string
  revalidate?: number
  sortBy?: string
  tag?: string
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
      tags: [tag],
    },
  })

  if (!res.ok) throw new Error('Failed to fetch latest blog')

  const data = await res.json()

  return data?.stories?.[0] ?? null
}

export async function fetchNewsBySlug(
  slug: string,
  lang: string,
  revalidate = REVALIDATE_TIME
) {
  const url =
    `https://api.storyblok.com/v2/cdn/stories/news/${slug}?` +
    new URLSearchParams({
      token: process.env.STORYBLOK_TOKEN as string,
      version: 'published',
      language: lang,
    })

  const res = await fetch(url, {
    next: {
      revalidate: revalidate,
      tags: [`story:${slug}`, RevalidateTag.NEWS], // <- for invalidate cache
    },
  })
  if (!res.ok) throw new Error('Failed to fetch story')
  return res.json()
}

export async function fetchBlogBySlug(
  slug: string,
  lang: string,
  revalidate = REVALIDATE_TIME
) {
  const url =
    `https://api.storyblok.com/v2/cdn/stories/blog/${slug}?` +
    new URLSearchParams({
      token: process.env.STORYBLOK_TOKEN as string,
      version: 'published',
      language: lang,
    })

  const res = await fetch(url, {
    next: {
      revalidate: revalidate,
      tags: [`story:${slug}`, RevalidateTag.BLOG], // <- for invalidate cache
    },
  })
  if (!res.ok) throw new Error('Failed to fetch story')
  return res.json()
}

// ข่าวสารจากยริษัท
export async function fetchPressReleaseBySlug(
  slug: string,
  lang: string,
  revalidate = REVALIDATE_TIME
) {
  const url =
    `https://api.storyblok.com/v2/cdn/stories/press-releases/${slug}?` +
    new URLSearchParams({
      token: process.env.STORYBLOK_TOKEN as string,
      version: 'published',
      language: lang,
    })

  const res = await fetch(url, {
    next: {
      revalidate: revalidate,
      tags: [`story:${slug}`, RevalidateTag.PRESS_RELEASE], // <- for invalidate cache
    },
  })
  if (!res.ok) throw new Error('Failed to fetch story')
  return res.json()
}

export async function fetchSocialResponsibilityBySlug(
  slug: string,
  lang: string,
  revalidate = REVALIDATE_TIME
) {
  const url =
    `https://api.storyblok.com/v2/cdn/stories/social-responsibility/${slug}?` +
    new URLSearchParams({
      token: process.env.STORYBLOK_TOKEN as string,
      version: 'published',
      language: lang,
    })

  const res = await fetch(url, {
    next: {
      revalidate: revalidate,
      tags: [`story:${slug}`, RevalidateTag.SOCIAL_RESPONSIBILITY], // <- for invalidate cache
    },
  })
  if (!res.ok) throw new Error('Failed to fetch story')
  return res.json()
}
