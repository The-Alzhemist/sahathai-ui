import React from 'react'
import Image from 'next/image'

import { cn } from '@/libs/util'
import { extractTextFieldsStoryblok } from '@/utils/extractTextFieldsStoryblok'
import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon'
import { Link } from '@/libs/intl/navigation'
import { getTranslations } from 'next-intl/server'

export async function LatestBlogCard({ blog, locale, page }: LatestBlogCardProps) {
  const common = await getTranslations('common')

  if (!blog) {
    return (
      <div className="flex flex-col md:flex-row max-w-[862px] bg-white rounded-[10px] overflow-hidden shadow-1">
        <img
          src="https://placehold.co/600x400"
          alt="Placeholder image"
          className="w-full"
        />
        <div className="p-5 w-full">
          <h2 className="headline-4 text-gray-500">No latest news available</h2>
        </div>
      </div>
    )
  }

  const content = blog.content.body[0]

  return (
    <Link
      href={`/${page}/${blog.slug}`}
      className="group block hover:scale-105 transition-all"
    >
      <section
        className={cn(
          'flex flex-col md:flex-row max-w-[862px] bg-white rounded-[10px] overflow-hidden shadow-1'
        )}
      >
        <div className="w-full md:w-[48%]">
          <Image
            src={content.newsImageCover.filename}
            alt={content.newsTitle || 'News image'}
            width={600}
            height={500}
            className="w-full h-full"
          />
        </div>

        <div className="w-full md:w-[52%] p-5">
          <h2 className="mt-[23px] headline-4 line-clamp-2 text-black">
            {content.newsTitle}
          </h2>
          <p className="mt-[10px] body-2 line-clamp-2 text-black-6">
            {extractTextFieldsStoryblok(content.newsDescription)}
          </p>
          <div className="mt-[10px] caption text-black-3">{content.newsDate}</div>

          <div className="mt-[23px] button-small text-navy w-fit flex gap-[10px] items-center">
        <span className="p-[10px] bg-navy rounded-full text-white inline-flex">
          <ArrowRightIcon width="20" height="20" />
        </span>
            {common('readMore')}
          </div>
        </div>
      </section>
    </Link>

  )
}
