'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
import type { SwiperProps } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

type Slide =
  | { type: 'image'; src: string }
  | { type: 'video'; src: string; poster?: string }

export default function SwiperVertical() {
  const slides: Slide[] = [
    { type: 'image', src: '/home/new/new-banner-1.webp' },
    { type: 'image', src: '/home/new/new-banner-2.webp' },
    { type: 'image', src: '/home/new/new-banner-3.webp' },
  ]

  const swiperConfig: SwiperProps = {
    modules: [Navigation, Autoplay, Pagination],
    direction: 'vertical',
    slidesPerView: 1,
    loop: true,
    autoplay: { delay: 10000 },
    watchSlidesProgress: true,
    className: 'mySwiper w-full h-[605px]',
    navigation: {
      prevEl: '.custom-prev',
      nextEl: '.custom-next',
    },
    pagination: {
      el: '.custom-pagination',
      clickable: true,
    },
  }

  return (
    <section className='relative w-full h-[605px] z-0 -mt-[50px]'>
      <Swiper {...swiperConfig}>
        {slides.map((slide, index) => (
          <SwiperSlide key={`banner-slide-${index}`}>
            <div className='relative w-full h-[605px]'>
              {slide.type === 'image' && (
                <Image
                  src={slide.src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className='object-cover md:rounded-b-[60px]'
                  priority={index === 0}
                />
              )}

              {slide.type === 'video' && (
                <>
                  <div className='absolute inset-0 w-full h-full bg-transparent' />
                  <video
                    className='w-full h-full object-cover md:rounded-b-[60px]'
                    autoPlay
                    preload='metadata'
                    loop
                    muted
                  >
                    <source
                      src='https://sahathai-ui.vercel.app/home/new/sahathai-full-hd.mp4'
                      type='video/mp4'
                    />
                  </video>
                </>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className='custom-pagination absolute right-2 top-1/2 -translate-y-1/2
                   flex flex-col items-center gap-0.5 !w-auto z-50'
      />
    </section>
  )
}
