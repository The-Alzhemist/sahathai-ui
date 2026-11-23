import Image from 'next/image'

import { Link } from '@/libs/intl/navigation'
import { TrackingCardProps } from './interface'

export function TrackingCard({ title, imageUrl, link }: TrackingCardProps) {
  return (
    <Link target='_blank' className='group flex' href={link}>
      <div className='w-[330px] max-w-full rounded-[10px] overflow-hidden shadow-8 bg-white'>
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
          <h3 className='text-navy headline-6 !leading-[20px] break-words !text-sm'>
            {title}
          </h3>
        </div>
      </div>
    </Link>
  )
}
