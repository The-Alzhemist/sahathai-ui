import { DateTime } from 'luxon'
import { useTranslations } from 'next-intl'

import { Link } from '@/libs/intl/navigation'
import { cn } from '@/libs/util'
import { ArrowRightIcon } from '../icons/ArrowRightIcon'
import { LastestNewsProps } from '@/components/LastestNews/interface'

export function LastestNews({
  title,
  content,
  createdAt,
  direction = 'vertical',
}: LastestNewsProps) {
  const common = useTranslations('common')
  return (
    <section
      className={cn(
        'flex flex-col md:flex-row max-w-[862px] bg-white rounded-[10px] overflow-hidden',
        {
          'flex w-full': direction === 'horizontal',
        }
      )}
    >
      <div className='w-full md:w-[48%]'>
        <img src='https://placehold.co/600x400' className='w-full' />
      </div>

      <div className='w-full md:w-[52%] p-5'>
        <h2 className='mt-[23px] headline-4 line-clamp-2 text-black'>Hello</h2>
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
    </section>
  )
}
