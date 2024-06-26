import { DateTime } from 'luxon'
import { useTranslations } from 'next-intl'

import { Link } from '@/libs/intl/navigation'
import { NewsCardProps } from './interface'

export function NewsCard({ title, description, createdAt }: NewsCardProps) {
  const common = useTranslations('common')
  return (
    <div className='w-[283px] rounded-[8px] overflow-hidden shadow-2'>
      <div className='w-full h-[200px] bg-dark' />
      <div className='p-[16px]'>
        <h2 className='headline-4 line-clamp-2'>{title}</h2>
        <p className='mt-[8px] body-2 line-clamp-2'>{description}</p>
        <div className='mt-[8px] caption'>
          {DateTime.fromISO(createdAt).toFormat('dd LLLL yyyy')}
        </div>
        <Link
          href=''
          className='mt-[16px] py-[5px] px-[20px] button bg-blue-300 text-white block w-fit rounded-[8px]'
        >
          {common('readMore')}
        </Link>
      </div>
    </div>
  )
}
