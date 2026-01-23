'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
import type { SwiperProps } from 'swiper/react'
import { useEffect, useState } from 'react'
import { Animation } from '@/components/Animation'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

type Slide =
  | { type: 'image'; src: string }
  | { type: 'video'; src: string; poster?: string }

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`)

    const handleChange = () => setIsMobile(mq.matches)
    handleChange()

    mq.addEventListener('change', handleChange)
    return () => mq.removeEventListener('change', handleChange)
  }, [breakpoint])

  return isMobile
}

export default function SwiperVertical() {
  const isMobile = useIsMobile()

  const slidesDesktop: Slide[] = [
    { type: 'image', src: '/home/new/new-banner-1.webp' },
    { type: 'image', src: '/home/new/new-banner-2.webp' },
    { type: 'image', src: '/home/new/new-banner-3.webp' },
  ]

  const slidesMobile: Slide[] = [
    { type: 'image', src: '/home/new/mobile-1.webp' },
    { type: 'image', src: '/home/new/mobile-2.webp' },
    { type: 'image', src: '/home/new/mobile-3.webp' },
  ]

  const activeSlides = isMobile ? slidesMobile : slidesDesktop

  const swiperConfig: SwiperProps = {
    modules: [Navigation, Autoplay, Pagination],
    direction: 'vertical',
    slidesPerView: 1,
    loop: true,
    autoplay: { delay: 10000 },
    className: 'mySwiper w-full h-full',
    pagination: {
      el: '.custom-pagination',
      clickable: true,
    },
  }

  return (
    <Animation>
      <section className='relative w-full h-[230px] md:h-[630px] z-0 -mt-[50px] top-[50px] md:top-0'>
        <Swiper {...swiperConfig}>
          {activeSlides.map((slide, index) => (
            <SwiperSlide key={`banner-slide-${index}`}>
              <div className='relative w-full h-[230px] md:h-[630px]'>
                {slide.type === 'image' && (
                  <Image
                    src={slide.src}
                    alt={`Slide ${index + 1}`}
                    fill
                    sizes='(max-width: 768px) 100vw, 100vw'
                    className='object-cover md:rounded-b-[60px]'
                    priority={index === 0}
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className='custom-pagination absolute right-2 top-1/2 -translate-y-1/2 flex flex-col z-50' />
      </section>
    </Animation>
  )
}
