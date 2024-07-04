'use client'
import { useTranslations } from 'next-intl'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export function ThreeHarborCranes() {
  const t = useTranslations('TechnologyEquipmentPage.ThreeHarborCranes')

  return (
    <section className='bg-dark-60 py-[40px]'>
      <h2 className='w-full font-[700] text-[36px] leading-[44px] text-center'>
        {t('title')}
      </h2>
      <section className='mt-[58px] flex flex-wrap gap-[66px] justify-center items-center'>
        <div className='w-[619px] h-[399px] border border-dark-50 bg-white rounded-[4px]' />
        <section className='max-w-[558px] w-full'>
          <h3 className='font-[500] text-[20px] leading-[24px]'>
            {t('higherWorkEfficiency.title')}
          </h3>
          <p className='leading-[24px] k2d'>
            {t('higherWorkEfficiency.description')}
          </p>
          <h3 className='font-[500] text-[20px] leading-[24px]'>
            {t('maintainTravelSchedule.title')}
          </h3>
          <p className='leading-[24px] k2d'>
            {t('maintainTravelSchedule.description')}
          </p>
          <p className='mt-[56px] text-[18px] leading-[28px]'>
            {t('videoDescription')}
          </p>
        </section>
      </section>
      <Swiper
        className='mt-[58px] h-[293px]'
        slidesPerView='auto'
        centeredSlides={true}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        initialSlide={1}
        loop
      >
        <SwiperSlide className='max-w-[568px]'>
          <div className='h-[242px] bg-dark-100' />
        </SwiperSlide>
        <SwiperSlide className='max-w-[568px]'>
          <div className='h-[242px] bg-dark-100' />
        </SwiperSlide>
        <SwiperSlide className='max-w-[568px]'>
          <div className='h-[242px] bg-dark-100' />
        </SwiperSlide>
        <SwiperSlide className='max-w-[568px]'>
          <div className='h-[242px] bg-dark-100' />
        </SwiperSlide>
        <SwiperSlide className='max-w-[568px]'>
          <div className='h-[242px] bg-dark-100' />
        </SwiperSlide>
        <SwiperSlide className='max-w-[568px]'>
          <div className='h-[242px] bg-dark-100' />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
