"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import type { SwiperProps } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function SwiperVertical() {
  const slides = [
    "/home/sahathai-building-banner.jpg",
    "/home/sahathai-building-banner.jpg",
    "/home/sahathai-building-banner.jpg",
  ]

  const swiperConfig: SwiperProps = {
    modules: [Navigation, Autoplay],
    direction: "vertical",
    slidesPerView: 1,
    loop: true,
    autoplay: { delay: 10000 },
    watchSlidesProgress: true,
    className: "mySwiper w-full h-[480px]",
    navigation: {
      prevEl: ".custom-prev",
      nextEl: ".custom-next",
    },
  }

  return (
    <section className="relative w-full h-[480px]">
      <Swiper {...swiperConfig}>
        {slides.map((slide, index) => (
          <SwiperSlide key={`banner-slide-${index}`}>
            <div className="relative w-full h-[480px]">
              <Image
                src={slide}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover md:rounded-b-[60px]"
                loading="eager"
                unoptimized
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ ปุ่ม custom ใช้ className */}
      <div
        className="absolute
             right-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-y-5
             md:right-10 md:top-auto md:bottom-4 md:-translate-y-0 md:gap-y-2 z-50">
        <button
          className="custom-prev border-2 border-red-400 text-red-400 bg-red-100
               rounded-full h-[30px] w-[30px] flex items-center justify-center">
          ↑
        </button>
        <button
          className="custom-next border-2 border-red-400 text-red-400 bg-red-100
               rounded-full h-[30px] w-[30px] flex items-center justify-center">
          ↓
        </button>
      </div>
    </section>
  )
}
