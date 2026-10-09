import React from 'react'
import { BlogCard } from '@/components/BlogCard'
import { Menu } from '@/components/Menu'
import { useTranslations } from 'next-intl'

import { Pagination } from '@/features/blog/components/Paginate/Pagination'
import { TickAnimation } from '@/components/TickAnimation'
import BannerImage from '@/components/Header/components/BannerImage/BannerImage'
import { SustainabilityManagementContent } from '@/features/investorRelations/pages/SustainabilityManagementPage/components/SustainabilityManagementContent'
import { ArticleCardDataType } from '@/types/ArticleCardDataType'
import { Sustainability } from '@/types/Sustainability'
import { getStrapiImageUrl } from '@/libs/util'

export default function SocialResponsibilityComponent({
  data,
  page,
  totalPages,
  search,
  sustainability,
}: {
  data: ArticleCardDataType[]
  page: number
  totalPages: number
  search?: string
  sustainability: Sustainability
}) {
  const t = useTranslations('NewsPage')
  const tSocial = useTranslations('Responsibility')

  const bannerImageUrl = sustainability.bannerImage
    ? getStrapiImageUrl(sustainability.bannerImage.url)
    : '/social-responsibility/social-responsibility-3x.webp'

  return (
    <div>
      <TickAnimation>
        <Menu />

        <BannerImage
          mobileImageSrc={bannerImageUrl}
          imageSrc={bannerImageUrl}
          alt='social-responsibility-banner'
          imageClassName='md:rounded-b-none'
        >
          <div className='mx-auto flex max-w-[1400px] flex-col items-center justify-center text-white'>
            <p className='max-w-[800px] text-center text-md font-normal leading-[1.25]  md:text-2xl md:leading-[1.35] mb-5'>
              {sustainability.bannerText || tSocial('Banner.Title')}
            </p>

            {sustainability.bannerFile && (
              <a
                href={getStrapiImageUrl(sustainability.bannerFile.url)}
                target='_blank'
                rel='noopener noreferrer'
                className='text-md font-normal bg-white-1 text-gray-500 border border-gray-500 px-4 py-1 rounded-3xl hover:text-blue-300 hover:border-blue-300 transition-all mb-5'
              >
                {tSocial('Banner.download')}
              </a>
            )}
          </div>
        </BannerImage>

        <SustainabilityManagementContent data={sustainability} />

        <section id='social-responsibility' className='bg-white pt-[70px]'>
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
      </TickAnimation>
    </div>
  )
}
