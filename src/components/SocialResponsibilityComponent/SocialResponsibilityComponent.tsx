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
import { Link, useRouter } from '@/libs/intl/navigation'
import BannerImage from '@/components/Header/components/BannerImage/BannerImage'
export default function SocialResponsibilityComponent({
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
  const tSocial = useTranslations('Responsibility')

  return (
    <div>
      <Animation key={`social-responsibility-${Date.now()}`}>
        <Menu />

        <BannerImage
          mobileImageSrc='/social-responsibility/social-responsibility-3x.webp'
          imageSrc='/social-responsibility/social-responsibility-3x.webp'
          alt='social-responsibility-banner'
        >
          <div className='mx-auto flex max-w-[1400px] flex-col items-center justify-center text-white'>
            <p className='max-w-[800px] text-center text-md font-normal leading-[1.25]  md:text-2xl md:leading-[1.35] mb-5'>
              {tSocial('Banner.Title')}
            </p>

            <button className='text-md bg-white-1 text-gray-500 border border-gray-500 px-4 py-1 rounded-3xl hover:text-blue-300 hover:border-blue-300 transition-all mb-5'>
              <Link
                href='https://a.storyblok.com/f/316761/x/2eeaaaa42d/csr-policy.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='font-normal '
              >
                {tSocial('Banner.download')}
              </Link>
            </button>

            {/* <button className='text-md bg-white-1 text-gray-500 border border-gray-500 px-4 py-1 rounded-3xl hover:text-blue-300 hover:border-blue-300 transition-all'>
              โครงการมอบทุนการศึกษา
            </button> */}
          </div>
        </BannerImage>

        {/* Latest Blog */}
        <section
          id='latestNews'
          className='flex flex-col items-center justify-center pt-14 pb-[100px] px-6 min-h-[500px]'
        >
          <h2 className='headline-2 text-blue-400 text-center mb-7'>
            {t('latestBlog')}
          </h2>

          <LatestBlogCard
            blog={latestBlog}
            locale={locale}
            page='social-responsibility'
          />
        </section>

        {/* All Blog */}
        <section
          id='press-releases'
          className='bg-white pt-[70px] min-h-[600px]'
        >
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
                      page='social-responsibility'
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
