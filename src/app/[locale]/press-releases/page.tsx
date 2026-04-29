import { getTranslations } from 'next-intl/server'

import React from 'react'
import { fetchAllBlog, fetchLastBlog } from '@/libs/storyblok/blogQuery'

import { RevalidateTag } from '@/enums/CacheEnum'
import PressReleaseComponent from '@/components/PressReleaseComponent/PressReleaseComponent'

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

  const perPage = 9
  const search = searchParams.search?.trim() || undefined

  //  fetching data
  const { stories, total } = await fetchAllBlog({
    page,
    perPage,
    lang: locale,
    version: 'published',
    search,
    startsWith: 'press-releases/',
    tag: RevalidateTag.PRESS_RELEASE,
  })

  const latestBlog = await fetchLastBlog({
    lang: locale,
    startsWith: 'press-releases/',
    tag: RevalidateTag.PRESS_RELEASE,
  })

  const totalPages = Math.ceil(total / perPage)

  return (
    <main>
      <PressReleaseComponent
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
