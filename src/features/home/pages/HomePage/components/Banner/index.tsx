'use client'
import { useInView } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useRef } from 'react'

import { cn } from '@/libs/util'
import { Menu } from '../Menu'
import SwiperComponent from '@/components/Header/components/BannerSwiper/BannerSwiper'

export function Banner() {
  const t = useTranslations('HomePage.Banner')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className='relative h-[550px] bg-white'>
      {/*<Image*/}
      {/*  className='hidden md:flex absolute top-0 left-0 w-full object-cover h-[490px]'*/}
      {/*  src='/home/banner.png'*/}
      {/*  width={0}*/}
      {/*  height={0}*/}
      {/*  sizes='100vw'*/}
      {/*  alt='เชื่อมโยง คุณสู่โลจิสติกส์ไทย'*/}
      {/*/>*/}

      {/*<Image*/}
      {/*  className='flex md:hidden absolute top-0 left-0 w-full object-cover h-[490px]'*/}
      {/*  src='/home/banner_mobile.jpeg'*/}
      {/*  width={0}*/}
      {/*  height={0}*/}
      {/*  sizes='100vw'*/}
      {/*  alt='เชื่อมโยง คุณสู่โลจิสติกส์ไทย'*/}
      {/*/>*/}


      <SwiperComponent />
      <Menu />

    </section>
  )
}
