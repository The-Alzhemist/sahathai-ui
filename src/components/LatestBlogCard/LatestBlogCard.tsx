import React from 'react'
import Image from 'next/image'

import { cn, formatDateTime, getStrapiImageUrl } from '@/libs/util'
import { extractTextFieldsStoryblok } from '@/utils/extractTextFieldsStoryblok'
import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon'
import { Link } from '@/libs/intl/navigation'

import { useTranslations } from 'next-intl'
import { EventNewsDetailCardStoryblok } from '@/types/storyblok'
import { LatestBlogCardProps } from './interface'

export function LatestBlogCard({ blog, page }: LatestBlogCardProps) {
  const common = useTranslations('common')

  if (!blog) {
    return (
      <div className='flex max-w-[862px] flex-col overflow-hidden rounded-[10px] bg-white shadow-1 md:flex-row'>
        <div className='relative w-full aspect-[16/9] bg-gray-100'>
          <Image
            src='https://placehold.co/600x400'
            alt='Placeholder image'
            fill
            className='object-cover'
          />
        </div>

        <div className='p-5'>
          <h2 className='headline-4 text-gray-400'>No latest news available</h2>
        </div>
      </div>
    )
  }

  return (
    <Link
      href={`/${page}/${blog.slug}`}
      className='group block transition-transform duration-300 hover:scale-[1.02]'
    >
      <section
        className={cn(
          'flex max-w-[862px] flex-col overflow-hidden rounded-[10px] bg-white shadow-1 md:flex-row'
        )}
      >
        <div className='w-full md:w-[48%] md:min-w-[400px]'>
          <div className='relative w-full aspect-[16/9] md:aspect-[4/3] overflow-hidden'>
            <Image
              src={getStrapiImageUrl(blog.cover.url)}
              alt={blog.title || 'News image'}
              fill
              priority
              className='object-cover transition-transform duration-300 group-hover:scale-105'
              sizes='(min-width: 768px) 400px, 100vw'
            />
          </div>
        </div>

        <div className='w-full md:w-[52%] md:min-w-[400px] p-5'>
          <h2 className='mt-[23px] line-clamp-2 text-black headline-4'>
            {blog.title}
          </h2>

          <p className='mt-[10px] line-clamp-2 text-black-6 body-2'>
            {blog.shortDescription}
          </p>

          <div className='mt-[10px] caption text-black-3'>
            {formatDateTime(blog.publishDate)}
          </div>

          <div className='mt-[23px] flex w-fit items-center gap-[10px] text-navy button-small'>
            <span className='inline-flex rounded-full bg-navy p-[10px] text-white'>
              <ArrowRightIcon width='20' height='20' />
            </span>
            {common('readMore')}
          </div>
        </div>
      </section>
    </Link>
  )
}
