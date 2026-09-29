import { getTranslations } from 'next-intl/server'

import React from 'react'
import { fetchAllBlog, fetchLastBlog } from '@/libs/storyblok/blogQuery'
import NewsComponent from '@/components/NewsComponent/NewsComponent'
import { RevalidateTag } from '@/enums/CacheEnum'
import { ArticleEnum } from '@/enums/ArticleEnum'
import { getArticles } from '@/libs/strapi/article'

export default async function news({
  params,
  searchParams,
}: {
  params: { locale: string }
  searchParams: { page?: string; search?: string }
}) {
  const locale = params.locale
  const page = Number(searchParams.page ?? 1)
  const search = searchParams.search?.trim() || undefined

  const data = await getArticles({ locale, type: ArticleEnum.PressRelease })

  return (
    <main>
      <NewsComponent
        page={page}
        totalPages={data.meta.pagination.pageCount}
        search={search}
        data={data.data}
      />
    </main>
  )
}

export async function generateMetadata({
  params: { locale },
}: {
  params: {
    locale: string
  }
}) {
  const t = await getTranslations('MetaData')

  return {
    title: t('News.Title'),
    description: t('News.Description'),
    openGraph: {
      title: t('News.Title'),
      description: t('News.Description'),
      images: [
        {
          url: `${process.env.DOMAIN_NAME}/seo/news/news-meta-img-${locale}.png`,
          width: 800,
          height: 600,
          alt: 'sahathai-news-meta-image',
        },
      ],
    },
  }
}
