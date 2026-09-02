import Image from 'next/image'

import { cn } from '@/libs/util'
import { TimeLine } from './TimeLine'
import { TimelineCardVariantProps } from './interface'

export function TimelineCardMobile({
  className,
  animationClassName,
  year,
  imageUrl,
  children,
}: TimelineCardVariantProps) {
  return (
    <section
      className={cn(
        'grid md:hidden grid-cols-[15px_1fr] items-center gap-x-3 gap-y-3 w-full mb-5',
        className,
        animationClassName
      )}
    >
      <div className='order-1 col-span-2 text-blue-300 text-3xl !font-[400] text-left'>
        {year}
      </div>

      <TimeLine className='order-1' />

      <section className='order-2'>
        <div className='flex flex-col justify-center mb-5 text-darkGray'>
          {children}
        </div>
        <div className='w-full shrink-0 order-2 rounded-[10px] overflow-hidden shadow-9'>
          <div className='relative pt-[60.61%] w-full'>
            <Image src={imageUrl} fill alt='' />
          </div>
        </div>
      </section>
    </section>
  )
}
