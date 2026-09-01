import Image from 'next/image'

import { cn } from '@/libs/util'
import { TimeLine } from './TimeLine'
import { TimelineCardVariantProps } from './interface'

export function TimelineCardDesktop({
  className,
  animationClassName,
  year,
  imageUrl,
  contentPosition,
  children,
}: TimelineCardVariantProps) {
  return (
    <section
      className={cn(
        'hidden md:grid grid-cols-[330px_15px_1fr] items-center gap-x-[57.5px] gap-y-[14px] w-full',
        className,
        animationClassName
      )}
    >
      <div className='order-1 col-span-3 text-blue-300 span-subtitle !font-[400] text-center'>
        {year}
      </div>
      <div
        className={cn(
          'w-full shrink-0 order-2 rounded-[10px] overflow-hidden shadow-9',
          {
            'order-4': contentPosition === 'left',
          }
        )}
      >
        <div className='relative pt-[60.61%] w-full'>
          <Image src={imageUrl} fill alt='' />
        </div>
      </div>
      <TimeLine />
      <div
        className={cn('flex flex-col justify-center order-4 text-darkGray', {
          'order-2': contentPosition === 'left',
        })}
      >
        {children}
      </div>
    </section>
  )
}
