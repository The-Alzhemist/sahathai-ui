'use client'
import { useTranslations } from 'next-intl'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { NewsCard } from '../NewsCard'

export function News() {
  const t = useTranslations('HomePage.News')
  return (
    <section className='mt-[80px] pt-[44px] pb-[20px] bg-dark-60'>
      <h2 className='font-[700] text-[36px] leading-[44px] text-center'>
        {t('title')}
      </h2>
      <p className='font-[500] text-[20px] leading-[24px] text-center mt-[8px]'>
        {t('description')}
      </p>

      <Swiper
        slidesPerView='auto'
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='mt-[56px] pb-[30px] max-w-[1200px] w-full'
      >
        <SwiperSlide className='max-w-[393px] w-full'>
          <NewsCard description='1เรายึดมั่นในการเติบโตไปด้วยกันในระยะยาวกับคู่ค้าของเรา ซึ่งสหไทยเทอร์มินอล ถือเป็นคู่ค้าที่มีความซื่อสัตย์และเชื่อถือได้ ในการร่วมกับเราเพื่อสร้างมูลค่าที่ดีให้กับลูกค้า' />
        </SwiperSlide>
        <SwiperSlide className='max-w-[393px] w-full'>
          <NewsCard description='2เรายึดมั่นในการเติบโตไปด้วยกันในระยะยาวกับคู่ค้าของเรา ซึ่งสหไทยเทอร์มินอล ถือเป็นคู่ค้าที่มีความซื่อสัตย์และเชื่อถือได้ ในการร่วมกับเราเพื่อสร้างมูลค่าที่ดีให้กับลูกค้า' />
        </SwiperSlide>
        <SwiperSlide className='max-w-[393px] w-full'>
          <NewsCard description='3เรายึดมั่นในการเติบโตไปด้วยกันในระยะยาวกับคู่ค้าของเรา ซึ่งสหไทยเทอร์มินอล ถือเป็นคู่ค้าที่มีความซื่อสัตย์และเชื่อถือได้ ในการร่วมกับเราเพื่อสร้างมูลค่าที่ดีให้กับลูกค้า' />
        </SwiperSlide>
        <SwiperSlide className='max-w-[393px] w-full'>
          <NewsCard description='4เรายึดมั่นในการเติบโตไปด้วยกันในระยะยาวกับคู่ค้าของเรา ซึ่งสหไทยเทอร์มินอล ถือเป็นคู่ค้าที่มีความซื่อสัตย์และเชื่อถือได้ ในการร่วมกับเราเพื่อสร้างมูลค่าที่ดีให้กับลูกค้า' />
        </SwiperSlide>
        <SwiperSlide className='max-w-[393px] w-full'>
          <NewsCard description='5เรายึดมั่นในการเติบโตไปด้วยกันในระยะยาวกับคู่ค้าของเรา ซึ่งสหไทยเทอร์มินอล ถือเป็นคู่ค้าที่มีความซื่อสัตย์และเชื่อถือได้ ในการร่วมกับเราเพื่อสร้างมูลค่าที่ดีให้กับลูกค้า' />
        </SwiperSlide>
        <SwiperSlide className='max-w-[393px] w-full'>
          <NewsCard description='6เรายึดมั่นในการเติบโตไปด้วยกันในระยะยาวกับคู่ค้าของเรา ซึ่งสหไทยเทอร์มินอล ถือเป็นคู่ค้าที่มีความซื่อสัตย์และเชื่อถือได้ ในการร่วมกับเราเพื่อสร้างมูลค่าที่ดีให้กับลูกค้า' />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
