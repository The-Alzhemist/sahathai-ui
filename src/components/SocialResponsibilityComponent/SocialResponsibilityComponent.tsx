'use client'

import React from 'react'
import { BlogCard } from '@/components/BlogCard'
import { Menu } from '@/components/Menu'
import { useTranslations } from 'next-intl'

import { Pagination } from '@/features/blog/components/Paginate/Pagination'
import { Animation } from '@/components/Animation'
import { Link, useRouter } from '@/libs/intl/navigation'
import BannerImage from '@/components/Header/components/BannerImage/BannerImage'
import { SustainabilityManagementContent } from '@/features/investorRelations/pages/SustainabilityManagementPage/components/SustainabilityManagementContent'
import { useNavigationTick } from '@/context/NavigationTickContext'
import { ArticleCardDataType } from '@/types/ArticleCardDataType'

export default function SocialResponsibilityComponent({
  data,
  page,
  totalPages,
  search,
}: {
  data: ArticleCardDataType[]
  page: number
  totalPages: number
  search?: string
}) {
  useRouter()
  const t = useTranslations('NewsPage')
  const tSocial = useTranslations('Responsibility')

  const { tick } = useNavigationTick()

  return (
    <div>
      <Animation key={tick}>
        <Menu />

        <BannerImage
          mobileImageSrc='/social-responsibility/social-responsibility-3x.webp'
          imageSrc='/social-responsibility/social-responsibility-3x.webp'
          alt='social-responsibility-banner'
          imageClassName='md:rounded-b-none'
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
          </div>
        </BannerImage>

        <SustainabilityManagementContent />

        <section
          id='social-responsibility'
          className='bg-white pt-[70px]'
        >
          <div className='max-w-[1100px] mx-auto p-6 flex flex-col min-h-[calc(100vh-240px)]'>
            <h2 className='headline-2 text-blue-400 text-center mb-7'>
              {t('allBlog')}
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
                      page='social-responsibility'
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
    </div>
  )
}
