import { getTranslations } from 'next-intl/server'

import { BlogCard } from '@/components/BlogCard'
import { ArticleEnum } from '@/enums/ArticleEnum'
import { getArticles } from '@/libs/strapi/article'
import { ArticleCardDataType } from '@/types/ArticleCardDataType'

import React from 'react'
import { HomePageProps } from '@/features/home/pages/HomePage/withHomePage'

export default async function HomePageNews({ params }: HomePageProps) {
  const t = await getTranslations('NewsPage')

  const locale = params.locale

  const { data: articles } = await getArticles({
    locale,
    type: ArticleEnum.PressRelease,
    perPage: 3,
  })

  return (
    <main>
      <section className='bg-white py-[70px]'>
        <div className='max-w-[1100px] mx-auto p-6'>
          <h2 className='headline-2 text-blue-400 text-center mb-7'>
            {t('pressRelease')}
          </h2>

          <section className='flex flex-col justify-center items-center '>
            <div className=' flex flex-wrap px-5 gap-5 mx-auto mb-10 flex-col md:flex-row justify-center items-center'>
              {articles.length ? (
                articles.map((s: ArticleCardDataType) => (
                  <BlogCard
                    key={s.documentId}
                    title={s.title}
                    description={s.shortDescription}
                    createdAt={s.publishDate ?? ''}
                    slug={s.slug}
                    publishDate={s.publishDate}
                    imageUrl={s.cover.url}
                    page={'press-releases'}
                  />
                ))
              ) : (
                <p className='text-gray-500'>No results found.</p>
              )}
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
