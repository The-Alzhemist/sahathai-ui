// // lib/storyblok/fetch.ts
// import { revalidate } from '@/app/[locale]/blog/[slug]/page'
//
// type StoryblokStory = {
//   id: number
//   name: string
//   slug: string
//   content: any
//   first_published_at?: string
//   created_at?: string
// }
//
// type StoryblokListResponse = {
//   stories: StoryblokStory[]
// }
//
// type StoryblokSingleResponse = {
//   story: StoryblokStory
// }
//
// const BASE_URL = 'https://api.storyblok.com/v2/cdn'
// const TOKEN = 'H1wfrTArHm3VE441H8WQ5wtt' // server-only
//
// function buildUrl(
//   path: string,
//   params: Record<string, string | number | boolean | undefined>
// ) {
//   const url = new URL(`${BASE_URL}/${path}`)
//   Object.entries(params).forEach(([k, v]) => {
//     if (v !== undefined && v !== null) url.searchParams.set(k, String(v))
//   })
//   url.searchParams.set('token', TOKEN as string)
//   return url.toString()
// }
//
// async function fetchJSON<T>(
//   url: string,
//   revalidateSeconds = 300
// ): Promise<{ data: T; headers: Headers }> {
//   const res = await fetch(url, { next: { revalidate: revalidateSeconds } })
//   if (!res.ok) {
//     const text = await res.text()
//     throw new Error(`Storyblok fetch failed ${res.status}: ${text}`)
//   }
//   const data = (await res.json()) as T
//   return { data, headers: res.headers }
// }
//
// // ---------------- existing list + bySlug ----------------
//
// export async function fetchAllBlog({
//                                      page = 1,
//                                      perPage = 10,
//                                      lang = 'th',
//                                      version = 'published',
//                                      search,
//                                      startsWith = 'news/',
//                                      revalidate = 300,
//                                    }: {
//   page?: number
//   perPage?: number
//   lang?: string
//   version?: 'draft' | 'published'
//   search?: string
//   startsWith?: string
//   revalidate?: number
// }) {
//   const url = buildUrl('stories', {
//     version,
//     starts_with: startsWith,
//     is_startpage: false,
//     page,
//     per_page: perPage,
//     language: lang,
//     ...(search ? { search_term: search } : {}),
//   })
//
//   const { data, headers } = await fetchJSON<StoryblokListResponse>(
//     url,
//     revalidate
//   )
//   const total = Number(headers.get('total') || data.stories?.length || 0)
//   return { stories: data.stories, total }
// }
//
// export async function fetchBlogBySlug({
//                                         slug,
//                                         lang = 'th',
//                                         version = 'draft',
//                                         revalidate = 300,
//                                         basePath = 'news',
//                                       }: {
//   slug: string
//   lang?: string
//   version?: 'draft' | 'published'
//   revalidate?: number
//   basePath?: string
// }) {
//   const url = buildUrl(`stories/${basePath}/${slug}`, {
//     version,
//     language: lang,
//   })
//   const { data } = await fetchJSON<StoryblokSingleResponse>(url, revalidate)
//
//   return data.story
// }
//
// // ---------------- NEW: latest blog (independent from search) ----------------
// export async function fetchLatestBlog({
//                                         lang = 'th',
//                                         version = 'published',
//                                         startsWith = 'news/',
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
