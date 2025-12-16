'use client'
import { useInView } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useRef } from 'react'

import { cn } from '@/libs/util'
import { Menu } from '../Menu'
import SwiperVertical from '@/components/Header/components/BannerSwiper/BannerSwiper'
import HomeVideoBanner from '@/components/Header/components/HomeVideoBanner/HomeVideoBanner'

export function Banner() {
  const t = useTranslations('HomePage.Banner')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className='relative h-[850px] bg-white'>
      {/* <SwiperVertical /> */}
      <HomeVideoBanner />
      <Menu />
    </section>
  )
}
