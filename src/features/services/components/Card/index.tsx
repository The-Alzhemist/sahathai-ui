import Image from 'next/image'

import { cn } from '@/libs/util'
import { Animation } from '@/components/Animation'
import { CardProps } from './interface'

export function Card({ imageUrl, title, content, position }: CardProps) {
  const [title1, title2] = title.split('-')

  return (
    <>
      {/* Desktop */}
      <Animation className="hidden md:flex gap-x-[16px] p-[20px] rounded-[20px] shadow-8 bg-white">
        <div
          className={cn(
            'max-w-[488px] h-[260px] w-full shrink-0 rounded-[15px] overflow-hidden order-1',
            { 'order-2': position === 'right' }
          )}
        >
          {/* 👇 container ของ image ต้อง relative + มีขนาดชัดเจน */}
          <div className="relative w-full h-full">
            <Image
              src={imageUrl}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>


        <div
          className={cn('mt-[32px] order-2', {
            'order-1': position === 'right'
          })}
        >
          <h3 className="text-navy text-[16px] font-semibold">{title1}</h3>
          <div className="text-navy">{title2}</div>
          <p className="mt-[20px]  text-darkGray font-light whitespace-pre-wrap">
            {content}
          </p>
        </div>
      </Animation>

      {/* mobile */}
      <Animation className="flex flex-col md:hidden gap-x-[32px] p-[20px] rounded-[20px] shadow-8">
        <div
          className={cn(
            'max-w-[488px] w-full rounded-[15px] overflow-hidden order-1'
          )}
        >
          <div className="relative pt-[69.67%] w-full">
            <Image src={imageUrl} fill alt="" />
          </div>
        </div>
        <div className={cn('mt-[32px] order-2')}>
          <h3 className='text-navy text-[16px] text-center font-semibold'>{title1}</h3>
          <div className="text-navy text-center">{title2}</div>
          <p className='mt-[20px] mx-[9px] text-darkGray text-[16px] whitespace-pre-wrap'>
            {content}
          </p>
        </div>
      </Animation>
    </>
  )
}
