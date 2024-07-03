'use client'
import Image from 'next/image'

import { cn } from '@/libs/util'
import { useAnimation } from '@/hooks/useAnimation'
import { TimelineCardProps } from './interface'

export function TimelineCard({
  className,
  contentClassName,
  year,
  imageUrl,
  logoUrl,
  position,
  children,
}: TimelineCardProps) {
  const { ref, animationClassName } = useAnimation()

  return (
    <figure
      ref={ref}
      className={cn(
        'space-y-[8px] w-full space-y-[10px]',
        className,
        animationClassName,
        {
          'text-right': position === 'right',
          'text-left': position === 'left',
        }
      )}
    >
      <div className='relative w-full rounded-[8px] overflow-hidden'>
        <div className='relative pt-[63.60%] w-full'>
          <Image src={imageUrl} fill alt='' />
        </div>
        <Image
          className='absolute left-[14.3px] bottom-[11.39px]'
          src='/logo.png'
          width={43.4}
          height={10.31}
          alt=''
        />
      </div>
      <div className='headline-4 text-blue-400 relative'>
        {year}
        <div
          className={cn(
            'absolute top-1/2 -translate-y-1/2 w-[35px] h-[2px] bg-black-20',
            {
              'left-[-90px]': position === 'left',
              'right-[-90px]': position === 'right',
            }
          )}
        />
        <div
          className={cn(
            'w-[10px] h-[10px] rounded-full bg-black-20 absolute top-1/2 -translate-y-1/2',
            {
              'left-[-55px]': position === 'left',
              'right-[-55px]': position === 'right',
            }
          )}
        />
      </div>
      <figcaption className={cn('body-1 text-black-60', contentClassName)}>
        {children}
      </figcaption>
      <Image
        className={cn({ 'ml-auto': position === 'right' })}
        src={logoUrl}
        width={61}
        height={40}
        alt=''
      />
    </figure>
  )
}
