'use client'

import React from 'react'
import { BlogCard } from '@/components/BlogCard'
import { LatestBlogCard } from '@/components/LatestBlogCard/LatestBlogCard'
import { Menu } from '@/components/Menu'
import { useTranslations } from 'next-intl'

import { Pagination } from '@/features/blog/components/Paginate/Pagination'
import { Animation } from '@/components/Animation'
import { useRouter } from '@/libs/intl/navigation'
import { useNavigationTick } from '@/context/NavigationTickContext'
export default function BlogComponent({
  stories,
  latestBlog,
  locale,
  page,
  totalPages,
  search,
}: {
  stories: any
  latestBlog: any
  locale: string
  page: number
  totalPages: number
  search?: string
}) {
  useRouter()
  const t = useTranslations('NewsPage')
  const { tick } = useNavigationTick()

  return (
    <div>
      <Animation key={tick}>
        <Menu />

        {/* Latest Blog */}
        <section className='flex flex-col items-center justify-center pt-14 pb-[100px] px-6 min-h-[500px]'>
          <h2 className='headline-2 text-blue-400 text-center mb-7'>
            {t('latestBlog')}
          </h2>

          <LatestBlogCard blog={latestBlog} locale={locale} page='blog' />
        </section>

        {/* All Blog */}
        <section className='bg-white pt-[70px] min-h-[600px]'>
          <div className='max-w-[1100px] mx-auto p-6 flex flex-col min-h-[600px]'>
            <h2 className='headline-2 text-blue-400 text-center mb-7'>
              {t('allBlog')}
            </h2>

            {/* Blog list */}
            <div className='flex-1 flex justify-center items-center'>
              {stories.length ? (
                <div className='flex flex-wrap gap-5 justify-center'>
                  {stories.map((s: any) => (
                    <BlogCard
                      key={s.content.body[0]._uid}
                      title={s.content.body[0].newsTitle}
                      content={s.content}
                      createdAt={s.created_at ?? ''}
                      slug={s.slug}
                      page='blog'
                    />
                  ))}
                </div>
              ) : (
                <p className='text-gray-500'>No results found.</p>
              )}
            </div>

            {/* Pagination */}
            <div className='mt-auto flex justify-center mb-[90px]'>
              <Pagination page={page} totalPages={totalPages} search={search} />
            </div>
          </div>
        </section>
      </Animation>
    </div>
  )
}
