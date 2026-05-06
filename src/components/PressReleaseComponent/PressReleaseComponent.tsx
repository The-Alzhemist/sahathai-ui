'use client'

import React from 'react'
import { BlogCard } from '@/components/BlogCard'
import { LatestBlogCard } from '@/components/LatestBlogCard/LatestBlogCard'
import { Menu } from '@/components/Menu'
import { useTranslations } from 'next-intl'

import Image from 'next/image'
import { Pagination } from '@/features/blog/components/Paginate/Pagination'
import { Brochure } from '@/features/blog/components/Brochure'
import { Animation } from '@/components/Animation'
import { useRouter } from '@/libs/intl/navigation'
export default function PressReleaseComponent({
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
    <div>
      <Animation key={`press-release-${Date.now()}`}>
        <Menu />

        {/* Latest Blog */}
        <section
          id='latestNews'
          className='flex flex-col items-center justify-center pt-14 pb-[100px] px-6 min-h-[500px]'
        >
          <h2 className='headline-2 text-blue-400 text-center mb-7'>
            {t('latestPressRelease')}
          </h2>

          <LatestBlogCard
            blog={latestBlog}
            locale={locale}
            page='press-releases'
          />
        </section>

        {/* All Blog */}
        <section
          className='bg-white pt-[70px] min-h-[600px]'
          id='press-releases'
        >
          <div className='max-w-[1100px] mx-auto p-6 flex flex-col min-h-[600px]'>
            <h2 className='headline-2 text-blue-400 text-center mb-7'>
              {t('allPressRelease')}
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
                      page='press-releases'
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

        {/* Brochure */}
        {/* <section className='relative min-h-[450px] flex justify-center items-center px-5'>
          <Image
            src='/news/blog-contact-bg.webp'
            alt='Blog Background'
            fill
            className='absolute inset-0 object-cover object-center z-0'
            priority
          />

          <Brochure className='z-10' />
        </section> */}
      </Animation>
    </div>
  )
}
