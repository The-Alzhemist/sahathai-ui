import Image from 'next/image'

import { cn } from '@/libs/util'
import { Animation } from '@/components/Animation'
import { CardProps } from './interface'

export function Card({ imageUrl, title, content, position }: CardProps) {
  return (
    <Animation className='p-[20px] rounded-[20px] shadow-8 flex gap-x-[32px]'>
      <div
        className={cn(
          'max-w-[488px] w-full shrink-0 rounded-[15px] overflow-hidden order-1',
          { 'order-2': position === 'right' }
        )}
      >
        <div className='relative pt-[69.67%] w-full'>
          <Image src={imageUrl} fill alt='' />
        </div>
      </div>
      <div
        className={cn('mt-[32px] order-2', { 'order-1': position === 'right' })}
      >
        <h3 className='text-navy headline-3 text-center'>{title}</h3>
        <p className='mt-[20px] mx-[9px] text-black-6 body-1 whitespace-pre-wrap'>
          {content}
        </p>
      </div>
    </Animation>
  )
}
