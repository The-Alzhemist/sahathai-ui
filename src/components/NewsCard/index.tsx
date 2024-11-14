import { DateTime } from 'luxon'
import { useTranslations } from 'next-intl'

import { Link } from '@/libs/intl/navigation'
import { NewsCardProps } from './interface'
import { cn } from '@/libs/util'
import { ArrowRightIcon } from '../icons/ArrowRightIcon'

export function NewsCard({
  title,
  content,
  createdAt,
  direction = 'vertical',
}: NewsCardProps) {
  const common = useTranslations('common')
  return (
    <div
      className={cn('w-[266px] rounded-[8px] overflow-hidden', {
        'flex w-full': direction === 'horizontal',
      })}
    >
      <div
        className={cn('w-full h-[240px] bg-dark', {
          'w-[440px] shrink-0': direction === 'horizontal',
        })}
      />

      <h2 className='mt-[23px] headline-4 line-clamp-2 text-black'>{title}</h2>
      <p className='mt-[10px] body-2 line-clamp-2 text-black-6'>{content}</p>
      <div className='mt-[10px] caption text-black-3'>
        {DateTime.fromISO(createdAt).toFormat('dd LLLL yyyy')}
      </div>
      <Link
        href=''
        className='mt-[23px] button-small text-navy block w-fit flex gap-[10px] items-center'
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
