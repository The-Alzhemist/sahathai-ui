import { DateTime } from 'luxon'
import { useLocale, useTranslations } from 'next-intl'

import { Link } from '@/libs/intl/navigation'
import { NewsCardProps } from './interface'
import { cn } from '@/libs/util'
import { ArrowRightIcon } from '../icons/ArrowRightIcon'

import Image from 'next/image'
import { extractTextFieldsStoryblok } from '@/utils/extractTextFieldsStoryblok'

export function NewsCard({
  title,
  content,
  createdAt,
  slug,
  direction = 'vertical',
}: NewsCardProps) {
  const common = useTranslations('common')
  const newsDate = content.body[0].newsDate
  const image = content.body[0].newsImageCover?.filename
  const imageDefault = '/background.jpeg'

  return (
    <div
      className={cn(
        'w-full md:w-[290px]  overflow-hidden border border-gray-150 rounded-[5px] p-2'
      )}
    >
      <Image
        src={image ? image : imageDefault}
        alt='Picture of the author'
        width={500}
        height={500}
        className='w-full h-[250px] md:h-[180px] object-cover rounded-[8px]'
      />

      <h2 className='mt-[23px] headline-4 line-clamp-2 text-black'>{title}</h2>
      <p className='mt-[10px] body-2 line-clamp-2 text-black-6'>
        {extractTextFieldsStoryblok(content)}
      </p>
      <div className='mt-[10px] caption text-black-3'>
        {/* {DateTime.fromISO(createdAt).toFormat('dd LLLL yyyy')} */}
        {newsDate}
      </div>
      <Link
        href={`/news/${slug}`}
        className='mt-[23px] button-small text-navy  w-fit flex gap-[10px] items-center transition-all  hover:scale-110 '
      >
        <button
          className='p-[10px] bg-navy rounded-full text-white '
          type='button'
        >
          <ArrowRightIcon width='10' height='10' />
        </button>
        {common('readMore')}
      </Link>
    </div>
  )
}
