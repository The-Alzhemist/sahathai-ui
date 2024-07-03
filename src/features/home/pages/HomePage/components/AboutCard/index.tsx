'use client'
import Image from 'next/image'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

import { AboutCardProps } from './interface'
import { cn } from '@/libs/util'

export function AboutCard({ title, description, imageUrl }: AboutCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div
      ref={ref}
      className={cn(
        'max-w-[283px] w-full transition-all opacity-0 duration-1000',
        {
          'opacity-100': isInView,
        }
      )}
    >
      <div className='rounded-[8px] overflow-hidden'>
        <div className='relative pt-[85.51%] w-full'>
          <Image src={imageUrl} fill alt='' />
        </div>
      </div>
      <h2 className='headline-4 mt-[16px] text-blue-400'>{title}</h2>
      <p className='mt-[8px] body-1 text-black-60'>{description}</p>
    </div>
  )
}
