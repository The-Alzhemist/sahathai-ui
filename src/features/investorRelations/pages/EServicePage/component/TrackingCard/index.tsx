import Image from 'next/image'

import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon'
import { Link } from '@/libs/intl/navigation'
import { TrackingCardProps } from './interface'
import { useTranslations } from 'next-intl'

export function TrackingCard({
  title,

  imageUrl,
  link,
}: TrackingCardProps) {
  const t = useTranslations('common')

  return (
    <Link target='_blank' className='group' href={link}>
      <div className='w-[330px] rounded-[10px] overflow-hidden shadow-8 bg-white'>
        <div className='relative pt-[63.64%] w-full overflow-hidden'>
          <Image
            src={imageUrl}
            fill
            alt=''
            className='
          transition-transform
          duration-300
          ease-out
          group-hover:scale-105
        '
          />
        </div>

        <div className='py-[22px] px-[30px]  relative'>
          <h3 className='text-navy headline-6 !leading-[20px] flex flex-wrap items-center whitespace-nowrap !text-sm'>
            {title}
          </h3>

          <div className='rounded-full bg-primary'></div>
        </div>
      </div>
    </Link>
  )
}
