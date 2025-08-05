'use client'
import Image from 'next/image'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

import { AboutCardProps } from './interface'
import { cn } from '@/libs/util'
import { BuildingIcon } from '@/components/icons/AboutUsBuildingIcon'

export function AboutCard({ title, content, imageUrl }: AboutCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div
      ref={ref}
      className={cn(
        'max-w-[310px] w-full transition-all opacity-0 duration-1000 rounded-[25px] shadow-3 overflow-hidden bg-white',
        {
          'opacity-100': isInView,
        }
      )}
    >
      <div className='w-full relative'>
        <div className='relative pt-[70%] w-full '>
          <Image src={imageUrl} fill alt='' />

        </div>
      </div>
      <div className='relative'>
        <div
          className="w-[60px] h-[60px]  bg-gradient-to-b from-blue-300 to-red-500 rounded-full flex justify-center items-center absolute -top-7 left-4 border-4 border-white"><BuildingIcon/>
        </div>
      </div>


      <div className="p-[40px_30px_32px]">
        <h2 className="headline-4 text-navy">{title}</h2>
        <p className='mt-[14px] text-black-6 whitespace-pre-line font-light'>{content}</p>
      </div>
    </div>
  )
}
