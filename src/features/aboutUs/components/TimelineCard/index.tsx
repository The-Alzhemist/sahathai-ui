'use client'
import Image from 'next/image'

import { cn } from '@/libs/util'
import { useAnimation } from '@/hooks/useAnimation'
import { TimelineCardProps } from './interface'
import { TimeLine } from './TimeLine'

export function TimelineCard({
  className,
  year,
  imageUrl,
  contentPosition,
  children,
}: TimelineCardProps) {
  const { ref, animationClassName } = useAnimation()

  return (
    <div ref={ref}>
      <section
        className={cn(
          'hidden md:grid grid-cols-[330px_15px_1fr] items-center gap-x-[57.5px] gap-y-[14px] w-full',
          className,
          animationClassName
        )}
      >
        <div className='order-1 col-span-3 text-black-6 span-subtitle !font-[400] text-center'>
          {year}
        </div>
        <div
          className={cn('w-full shrink-0 order-2', {
            'order-4': contentPosition === 'left',
          })}
        >
          <div className='relative pt-[60.61%] w-full'>
            <Image src={imageUrl} fill alt='' />
          </div>
        </div>
        <TimeLine />
        <div
          className={cn('flex flex-col justify-center order-4', {
            'order-2': contentPosition === 'left',
          })}
        >
          {children}
        </div>
      </section>

      <section
        className={cn(
          'grid md:hidden grid-cols-[15%, 85%] items-center gap-x-3 gap-y-3 w-full mb-5',
          className,
          animationClassName
        )}
      >
        <div className='order-1 col-span-3 text-black-6 text-3xl !font-[400] text-left'>
          {year}
        </div>
        <div className='order-1'>
          <TimeLine />
        </div>

        <section className='order-2'>
          <div className={cn('flex flex-col justify-center mb-5')}>
            {children}
          </div>
          <div className={cn('w-full shrink-0 order-2')}>
            <div className='relative pt-[60.61%] w-full'>
              <Image src={imageUrl} fill alt='' />
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}
