'use client'

import { Menu } from '../Menu'
import HomeVideoBanner from '@/components/Header/components/HomeVideoBanner/HomeVideoBanner'

export function Banner() {
  return (
    <section className='relative  bg-white'>
      {/* <SwiperVertical /> */}
      <HomeVideoBanner />
      <Menu />
    </section>
  )
}
