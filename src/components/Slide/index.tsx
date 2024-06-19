'use client'
import { SwiperSlide, Swiper, SwiperRef } from 'swiper/react'

import { cn } from '@/libs/util'
import { NextButton } from './NextButton'
import { useRef } from 'react'
import { PrevButton } from './PrevButton'

export function Slide() {
  const swiperRef = useRef<SwiperRef>(null)
  const arr = [
    'https://swiperjs.com/demos/images/nature-1.jpg',
    'https://swiperjs.com/demos/images/nature-2.jpg',
    'https://swiperjs.com/demos/images/nature-3.jpg',
    'https://swiperjs.com/demos/images/nature-4.jpg',
    'https://swiperjs.com/demos/images/nature-5.jpg',
    'https://swiperjs.com/demos/images/nature-6.jpg',
    'https://swiperjs.com/demos/images/nature-7.jpg',
    'https://swiperjs.com/demos/images/nature-8.jpg',
    'https://swiperjs.com/demos/images/nature-9.jpg',
  ]

  return (
    <section className='relative mx-auto max-w-[1156px]'>
      <Swiper
        ref={swiperRef}
        centeredSlides={true}
        spaceBetween={0}
        slidesPerView={3}
        className='custome-banner max-w-[1090px] !mx-[33px]'
        initialSlide={1}
        loop
      >
        {arr.map(row => (
          <SwiperSlide className='!relative !flex items-center' key={row}>
            {({ isActive, isNext, isPrev }) => (
              <div
                className={cn(
                  'max-w-[363.33px] w-full rounded-[8px] overflow-hidden',
                  {
                    'scale-[1.566]': isActive,
                    'scale-[1.233] absolute': isPrev || isNext,
                    'left-[11.65%]': isPrev,
                    'right-[11.65%]': isNext,
                    'px-[5px]': !isActive && !isPrev && !isNext,
                  }
                )}
              >
                <div className='relative pt-[59.15%] w-full'>
                  <img className='absolute inset-0 w-full h-full' src={row} />
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <PrevButton
        onClick={() => {
          swiperRef.current?.swiper.slidePrev()
        }}
      />
      <NextButton
        onClick={() => {
          swiperRef.current?.swiper.slideNext()
        }}
      />
    </section>
  )
}
