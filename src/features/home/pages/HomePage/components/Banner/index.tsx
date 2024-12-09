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
    <section className='relative h-[520px] flex flex-col justify-end'>
      <Image
        className='hidden md:flex absolute top-0 left-0 w-full object-cover h-[490px]'
        src='/home/banner.png'
        width={0}
        height={0}
        sizes='100vw'
        alt='เชื่อมโยง คุณสู่โลจิสติกส์ไทย'
      />

      <Image
        className='flex md:hidden absolute top-0 left-0 w-full object-cover h-[490px]'
        src='/home/banner_mobile.jpeg'
        width={0}
        height={0}
        sizes='100vw'
        alt='เชื่อมโยง คุณสู่โลจิสติกส์ไทย'
      />

      <section
        ref={ref}
        className='mb-[20%] md:mb-[13.33%] md:pl-[12.64%] z-[1] text-white'
      >
        <div
          className={cn(
            'transition-all duration-700 translate-x-[-200px] opacity-0',
            {
              'translate-x-0 opacity-100': isInView,
            }
          )}
        >
          {/* desktop  title */}
          <div
            className='hidden  md:flex'
            style={{ textShadow: '0px 2px 8.6px #00000080' }}
          >
            <span className='font-[600] text-[64px] leading-[96px] text-primary'>
              {t('title')}
            </span>
            <span className='ml-[16px] font-[600] text-[64px] leading-[96px] text-secondary'>
              {t('title2')}
            </span>
          </div>
          <span className='hidden md:flex font-[400] text-[36px] leading-[44px]'>
            {t('subTitle')}
          </span>

          {/* mobile  */}
          <div
            className='flex flex-col items-center md:hidden'
            style={{ textShadow: '0px 2px 8.6px #00000080' }}
          >
            <div>
              <span className='font-[600] text-4xl text-primary'>
                {t('title')}
              </span>
              <span className='ml-2 font-[600] text-4xl text-secondary'>
                {t('title2')}
              </span>
            </div>

            <div>
              <span className='flex md:hidden font-[400] text-[36px]'>
                {t('subTitle')}
              </span>
            </div>
          </div>
        </div>
      </section>
      <Menu />
    </section>
  )
}
