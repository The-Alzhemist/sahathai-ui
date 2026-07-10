'use client'

import { BlogCard } from '@/components/BlogCard'
import { LatestBlogCard } from '@/components/LatestBlogCard/LatestBlogCard'
import { Menu } from '@/components/Menu'
import { useTranslations } from 'next-intl'
import React from 'react'
import { Pagination } from '@/features/blog/components/Paginate/Pagination'
import { Animation } from '@/components/Animation'
import { useRouter } from '@/libs/intl/navigation'
export default function NewsComponent({
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
  return (
    <section>
      <Animation key={`news-${Date.now()}`}>
        <Menu />
        <section
          id='latestNews'
          className='flex flex-col items-center justify-center pt-14 pb-[100px] px-6 min-h-[400px]'
        >
          <h2 className='headline-2 text-blue-400 text-center mb-7'>
            {t('latestNews')}
          </h2>

          <LatestBlogCard blog={latestBlog} locale={locale} page={'news'} />
        </section>

        {/*All blog*/}
        <section
          className='bg-white pt-[70px] min-h-[400px]'
          id='press-releases'
        >
          <div className='max-w-[1100px] mx-auto p-6'>
            <h2 className='headline-2 text-blue-400 text-center mb-7'>
              {t('pressRelease')}
            </h2>

            {/* Search box แบบง่าย (Server + link) */}
            {/*<form action="" className="mb-4 flex gap-2">*/}
            {/*  <input*/}
            {/*    name="search"*/}
            {/*    defaultValue={search ?? ''}*/}
            {/*    placeholder="Search news..."*/}
            {/*    className="border px-3 py-1 rounded w-full"*/}
            {/*  />*/}
            {/*  <button className="px-4 py-1 bg-blue-600 text-white rounded">Search</button>*/}
            {/*</form>*/}

            <section className='flex flex-col justify-center items-center '>
              <div className=' flex flex-wrap px-5 gap-5 mx-auto mb-10 flex-col md:flex-row justify-center items-center'>
                {stories.length ? (
                  stories.map((s: any) => (
                    <BlogCard
                      key={s.content.body[0]._uid}
                      title={s.content.body[0].newsTitle}
                      content={s.content}
                      createdAt={s.created_at ?? ''}
                      slug={s.slug}
                      page={'news'}
                    />
                  ))
                ) : (
                  <p className='text-gray-500'>No results found.</p>
                )}
              </div>
            </section>

            {/**/}
            <section className='flex justify-center mb-[90px]'>
              <Pagination page={page} totalPages={totalPages} search={search} />
            </section>
            {/*  */}
          </div>
        </section>

        {/* Brochure */}
        {/* <section className='relative  min-h-[700px] flex justify-center items-center  px-5'>
          <Image
            src='/news/new/news-bg.webp'
            alt='Sustainability Background'
            fill
            className='absolute inset-0 object-cover object-center z-0'
            priority
          />

          <Brochure className='z-10 mt-[300px]' />
        </section> */}
      </Animation>
    </section>
  )
}
