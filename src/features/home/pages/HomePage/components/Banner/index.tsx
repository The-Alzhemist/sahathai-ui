'use client'
import { useInView } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useRef } from 'react'

import { cn } from '@/libs/util'
import { Menu } from '../Menu'

export function Banner() {
  const t = useTranslations('HomePage.Banner')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className='relative h-[490px] flex flex-col justify-end'>
      <Image
        className='absolute top-0 left-0 w-full h-full object-cover'
        src='/home/banner.png'
        width={0}
        height={0}
        sizes='100vw'
        alt='เชื่อมโยง คุณสู่โลจิสติกส์ไทย'
      />

      <section
        ref={ref}
        className='max-w-[1440px] w-full mx-auto mb-[11.25%] pl-[12.64%] z-[1] text-white'
      >
        <h1
          className={cn(
            'transition-all duration-700 translate-x-[-200px] opacity-0',
            {
              'translate-x-0 opacity-100': isInView,
            }
          )}
        >
          <span className='font-[600] text-[64px] leading-[96px] text-primary'>
            {t('title')}
          </span>
          <span className='ml-[16px] font-[600] text-[64px] leading-[96px] text-secondary'>
            {t('title2')}
          </span>
          <br />
          <span className='font-[400] text-[36px] leading-[54px]'>
            {t('subTitle')}
          </span>
        </h1>
      </section>
      <Menu />
    </section>
  )
}
