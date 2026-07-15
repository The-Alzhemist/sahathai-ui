'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
import type { SwiperProps } from 'swiper/react'
import { Animation } from '@/components/Animation'
import { cn } from '@/libs/util'

type Slide =
  | { type: 'image'; src: string; className?: string }
  | { type: 'video'; src: string; poster?: string }

export default function SwiperVertical() {
  const activeSlides: Slide[] = [
    {
      type: 'image',
      src: '/home/new/new-banner-1.webp',
      className: 'object-top',
    },
    { type: 'image', src: '/home/new/new-banner-2.webp' },
    {
      type: 'image',
      src: '/home/new/new-banner-3.webp',
      className: 'object-[center_30%]',
    },
  ]

  const swiperConfig: SwiperProps = {
    modules: [Navigation, Autoplay, Pagination],
    direction: 'vertical',
    slidesPerView: 1,
    loop: true,
    autoplay: { delay: 10000 },
    className: 'w-full h-full md:rounded-b-[60px]',
    pagination: {
      el: '.custom-pagination',
      clickable: true,
    },
  }

  return (
    <Animation>
      <section className='relative w-full h-[430px] md:h-[630px] z-0 -mt-[60px] md:top-0'>
        <Swiper {...swiperConfig}>
          {activeSlides.map((slide, index) => (
            <SwiperSlide key={`banner-slide-${index}`}>
              <div className='relative w-full h-[430px] md:h-[630px]'>
                {slide.type === 'image' && (
                  <Image
                    src={slide.src}
                    alt={`Slide ${index + 1}`}
                    fill
                    sizes='(max-width: 768px) 100vw, 100vw'
                    className={cn('object-cover', slide.className)}
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
