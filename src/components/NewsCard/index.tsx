import { DateTime } from 'luxon'
import { useTranslations } from 'next-intl'

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
  fullSlug,
  direction = 'vertical',
}: NewsCardProps) {
  const common = useTranslations('common')

  return (
    <div className={cn('w-[266px]  overflow-hidden')}>
      <Image
        src='https://images.pexels.com/photos/8833426/pexels-photo-8833426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        alt='Picture of the author'
        width={500}
        height={500}
        className='w-full h-auto object-cover rounded-[8px]'
      />

      <h2 className='mt-[23px] headline-4 line-clamp-2 text-black'>{title}</h2>
      <p className='mt-[10px] body-2 line-clamp-2 text-black-6'>
        {extractTextFieldsStoryblok(content)}
      </p>
      <div className='mt-[10px] caption text-black-3'>
        {DateTime.fromISO(createdAt).toFormat('dd LLLL yyyy')}
      </div>
      <Link
        href={`/${fullSlug}`}
        className='mt-[23px] button-small text-navy  w-fit flex gap-[10px] items-center'
      >
        <button
          className='p-[10px] bg-navy rounded-full text-white'
          type='button'
        >
          <ArrowRightIcon width='20' height='20' />
        </button>
        {common('readMore')}
      </Link>
    </div>
  )
}
