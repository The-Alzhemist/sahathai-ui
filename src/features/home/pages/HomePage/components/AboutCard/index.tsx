'use client'
import Image from 'next/image'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

import { AboutCardProps } from './interface'
import { cn } from '@/libs/util'

export function AboutCard({ title, content, imageUrl }: AboutCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div
      ref={ref}
      className={cn(
        'max-w-[330px] w-full transition-all opacity-0 duration-1000 rounded-[8px] shadow-3 overflow-hidden',
        {
          'opacity-100': isInView,
        }
      )}
    >
      <div className='w-full'>
        <div className='relative pt-[72.73%] w-full'>
          <Image src={imageUrl} fill alt='' />
        </div>
      </div>
      <div className='p-[22px_30px_32px]'>
        <h2 className='headline-4 text-navy'>{title}</h2>
        <p className='mt-[14px] body-1 text-black-6'>{content}</p>
      </div>
    </div>
  )
}
