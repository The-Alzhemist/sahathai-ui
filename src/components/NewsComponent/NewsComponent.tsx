'use client'

import { BlogCard } from '@/components/BlogCard'
import { Menu } from '@/components/Menu'
import { useTranslations } from 'next-intl'
import React from 'react'
import { Pagination } from '@/features/blog/components/Paginate/Pagination'
import { Animation } from '@/components/Animation'
import { useRouter } from '@/libs/intl/navigation'
import { useNavigationTick } from '@/context/NavigationTickContext'
import { ArticleCardDataType } from '@/types/ArticleCardDataType'

export default function NewsComponent({
  page,
  totalPages,
  search,
  data,
}: {
  page: number
  totalPages: number
  search?: string
  data: ArticleCardDataType[]
}) {
  useRouter()
  const t = useTranslations('NewsPage')
  const { tick } = useNavigationTick()

  return (
    <section>
      <Animation key={tick}>
        <Menu />

        <section className='bg-white' id='press-releases'>
          <div className='max-w-[1100px] mx-auto p-6 flex flex-col min-h-[calc(100vh-240px)]'>
            <h2 className='headline-2 text-blue-400 text-center mb-7'>
              {t('pressRelease')}
            </h2>

            <div className='flex-1 flex justify-center items-center'>
              {data.length ? (
                <div className='flex flex-wrap gap-5 justify-center'>
                  {data.map((s: ArticleCardDataType) => (
                    <BlogCard
                      key={s.documentId}
                      title={s.title}
                      description={s.shortDescription}
                      createdAt={s.publishDate ?? ''}
                      slug={s.slug}
                      publishDate={s.publishDate}
                      imageUrl={s.cover.url}
                      page={'news'}
                    />
                  ))}
                </div>
              ) : (
                <p className='text-gray-500'>No results found.</p>
              )}
            </div>

            {data.length > 0 && (
              <div className='mt-auto flex justify-center mb-[90px]'>
                <Pagination
                  page={page}
                  totalPages={totalPages}
                  search={search}
                />
              </div>
            )}
          </div>
        </section>
      </Animation>
    </section>
  )
}
