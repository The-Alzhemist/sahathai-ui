import { getTranslations } from 'next-intl/server'
import React from 'react'

import { ArticleEnum } from '@/enums/ArticleEnum'
import { getArticles } from '@/libs/strapi/article'
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

  const search = searchParams.search?.trim() || undefined

  const data = await getArticles({ locale, type: ArticleEnum.Article })

  return (
    <main>
      <BlogComponent
        page={page}
        totalPages={data.meta.pagination.pageCount}
        search={search}
        data={data.data}
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
