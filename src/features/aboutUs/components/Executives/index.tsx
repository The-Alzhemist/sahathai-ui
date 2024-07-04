'use client'
import { Fragment } from 'react'
import { useTranslations } from 'next-intl'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import { PeopleCard } from '../PeopleCard'

export function Executives() {
  const t = useTranslations('AboutUsPage.BoardAndExecutives.Executives')

  return (
    <section className='mt-[128px]'>
      <h2 className='headline-2 text-center text-blue-400'>{t('title')}</h2>
      <Swiper
        className='mt-[24px]'
        slidesPerView='auto'
        spaceBetween={24}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide className='!w-[206px] py-[56px]'>
          <PeopleCard
            name={t('person1.title')}
            imageClassName='left-[-34px] top-0 w-[276px]'
            imageUrl='/about-us/sauwakun-karuchit.png'
            jobTitle={
              <Fragment>
                <span className='font-[700]'>{t('person1.position')}</span>
                <br />
                <br />
                {t('person1.description')}
              </Fragment>
            }
          />
        </SwiperSlide>
        <SwiperSlide className='!w-[206px] py-[56px]'>
          <PeopleCard
            name={t('person2.title')}
            imageClassName='left-[-34px] top-0 w-[258px]'
            imageUrl='/about-us/banchai-karuchit.png'
            jobTitle={
              <Fragment>
                <span className='font-[700]'>{t('person2.position')}</span>
                <br />
                <br />
                {t('person2.description')}
              </Fragment>
            }
          />
        </SwiperSlide>
        <SwiperSlide className='!w-[206px] py-[56px]'>
          <PeopleCard
            name={t('person3.title')}
            imageClassName='left-[-46.33px] top-0 w-[323px]'
            imageUrl='/about-us/kittikhun-lochaya.png'
            jobTitle={
              <span className='font-[700]'>{t('person3.position')}</span>
            }
          />
        </SwiperSlide>
        <SwiperSlide className='!w-[206px] py-[56px]'>
          <PeopleCard
            name={t('person4.title')}
            imageClassName='left-[-34px] top-0 w-[258px]'
            imageUrl='/about-us/minrawi-phodee.png'
            jobTitle={
              <span className='font-[700]'>{t('person4.position')}</span>
            }
          />
        </SwiperSlide>
        <SwiperSlide className='!w-[206px] py-[56px]'>
          <PeopleCard
            name={t('person5.title')}
            imageClassName='left-[-53px] top-[-7.14px] w-[297px]'
            imageUrl='/about-us/bundit-rungsimanon.png'
            jobTitle={
              <span className='font-[700]'>{t('person5.position')}</span>
            }
          />
        </SwiperSlide>
        <SwiperSlide className='!w-[206px] py-[56px]'>
          <PeopleCard
            name={t('person6.title')}
            imageClassName='left-[-53px] top-[-7.14px] w-[297px]'
            imageUrl='/about-us/bundit-rungsimanon.png'
            jobTitle={
              <span className='font-[700]'>{t('person6.position')}</span>
            }
          />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
