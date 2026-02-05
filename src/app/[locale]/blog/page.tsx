import { getTranslations } from 'next-intl/server'
import React from 'react'

import { fetchAllBlog, fetchLastBlog } from '@/libs/storyblok/blogQuery'
import BlogComponent from '@/components/BlogComponent/BlogComponent'

export default async function Blog({
  params,
  searchParams,
}: {
  params: { locale: string }
  searchParams: { page?: string; search?: string }
}) {
  const locale = params.locale

  const pageParam = Number(searchParams.page)
  const page = Number.isInteger(pageParam) && pageParam > 0 ? pageParam : 1

  const perPage = 9
  const search = searchParams.search?.trim() || undefined

  const { stories, total } = await fetchAllBlog({
    page,
    perPage,
    lang: locale,
    version: 'published',
    search,
    startsWith: 'blog/',
  })

  const latestBlog = await fetchLastBlog({
    lang: locale,
    startsWith: 'blog/',
  })

  console.log('stories', stories)
  console.log('latestBlog', latestBlog)

  const totalPages = Math.ceil(total / perPage)

  return (
    <main>
      <BlogComponent
        stories={stories}
        latestBlog={latestBlog}
        locale={locale}
        page={page}
        totalPages={totalPages}
        search={search}
      />
    </main>
  )
}

export async function generateMetadata() {
  const t = await getTranslations('MetaData')

  return {
    title: t('Blog.Title'),
    description: t('Blog.Description'),
    openGraph: {
      title: t('Blog.Title'),
      description: t('Blog.Description'),
    },
  }
}
