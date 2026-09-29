import { getTranslations } from 'next-intl/server'

import React from 'react'
import { ArticleEnum } from '@/enums/ArticleEnum'
import { getArticles } from '@/libs/strapi/article'
import PressReleaseListComponent from '@/components/PressReleaseListComponent/PressReleaseListComponent'

export default async function pressRelease({
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

  const data = await getArticles({ locale, type: ArticleEnum.PressRelease })

  return (
    <main>
      <PressReleaseListComponent
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
    title: t('PressRelease.Title'),
    description: t('PressRelease.Description'),
    openGraph: {
      title: t('PressRelease.Title'),
      description: t('PressRelease.Description'),
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
