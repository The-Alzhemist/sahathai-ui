import { getTranslations } from 'next-intl/server'

import React from 'react'
import { ArticleEnum } from '@/enums/ArticleEnum'
import { getArticles } from '@/libs/strapi/article'
import { getSustainability } from '@/libs/strapi/sustainability'
import SocialResponsibilityComponent from '@/components/SocialResponsibilityComponent/SocialResponsibilityComponent'

export default async function socialResponsibility({
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

  const [data, sustainabilityResponse] = await Promise.all([
    getArticles({
      locale,
      type: ArticleEnum.SocialResponsibility,
      page,
      perPage: 9,
    }),
    getSustainability(locale),
  ])

  return (
    <main>
      <SocialResponsibilityComponent
        page={page}
        totalPages={data.meta.pagination.pageCount}
        search={search}
        data={data.data}
        sustainability={sustainabilityResponse.data}
      />
    </main>
  )
}

export async function generateMetadata() {
  const t = await getTranslations('MetaData')

  return {
    title: t('SocialResponsibility.Title'),
    description: t('SocialResponsibility.Description'),
    openGraph: {
      title: t('SocialResponsibility.Title'),
      description: t('SocialResponsibility.Description'),
      images: [
        {
          url: `${process.env.DOMAIN_NAME}/seo/news/meta-image-sahathai.webp`,
          width: 800,
          height: 600,
          alt: 'sahathai-news-meta-image',
        },
      ],
    },
  }
}
