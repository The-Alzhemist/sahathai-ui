import { useTranslations } from 'next-intl'
import { Fragment } from 'react'

import { TimelineCard } from '../TimelineCard'
import Image from 'next/image'
import { cn } from '@/libs/util'

export function Timeline() {
  const t = useTranslations('AboutUsPage.CommitmentSuccess')

  return (
    <section className='relative max-w-[794px] mx-auto mt-[80px] flex flex-col gap-y-[25px]'>
      <TimelineCard
        contentPosition='right'
        year={t('2551.year')}
        imageUrl='/about-us/2551.png'
      >
        <Image
          className='mb-[10px]'
          src='/about-us/shcp.png'
          width={90}
          height={67}
          alt=''
        />
        <div className='headline-4'>{t('2551.title')}</div>
      </TimelineCard>
      <TimelineCard
        contentPosition='left'
        year={t('2556.year')}
        imageUrl='/about-us/2556.png'
      >
        <Image
          className='mb-[30px]'
          src='/about-us/sahathai.png'
          width={152}
          height={35}
          alt=''
        />
        <div className='headline-4'>{t('2556.title')}</div>
      </TimelineCard>
      <TimelineCard
        contentPosition='right'
        year={t('2558.year')}
        imageUrl='/about-us/2558.png'
      >
        <Image
          className='mb-[20px]'
          src='/bbt.png'
          width={90}
          height={41}
          alt=''
        />

        <div className='headline-4'>{t('2558.title')}</div>
        <p className='body-2 text-black-6 mt-[10px]'>{t('2558.content')}</p>
      </TimelineCard>
      <TimelineCard
        contentPosition='left'
        year={t('2559_2560.year')}
        imageUrl='/about-us/2559_2560.png'
      >
        <Image
          className='mb-[20px]'
          src='/bbs.png'
          width={90}
          height={41}
          alt=''
        />

        <div className='headline-4'>{t('2559_2560.title')}</div>
        <p className='body-2 text-black-6 mt-[10px]'>
          {t('2559_2560.content')}
        </p>
      </TimelineCard>
      <TimelineCard
        contentPosition='right'
        year={t('2560_2562.year')}
        imageUrl='/about-us/2560_2562.png'
      >
        <Image
          className='mb-[20px]'
          src='/about-us/sahathai.png'
          width={152}
          height={35}
          alt=''
        />

        {[
          t('2560_2562.content'),
          t('2560_2562.content2'),
          t('2560_2562.content3'),
          t('2560_2562.content4'),
        ].map((row, index, arr) => (
          <div
            key={index}
            className={cn('flex gap-x-[10px] text-black-6 body-2', {
              'mb-[5px]': index !== arr.length - 1,
            })}
          >
            <span className='block text-center'>&bull;</span>
            <span className='block text-left'>{row}</span>
          </div>
        ))}
      </TimelineCard>
      <TimelineCard
        contentPosition='left'
        year={t('2568.year')}
        imageUrl='/about-us/2568.png'
      >
        <Image
          className='mb-[30px]'
          src='/about-us/circle.png'
          width={114}
          height={76}
          alt=''
        />
        <p className='body-2 text-black-6 whitespace-pre-line'>{t('2568.content')}</p>
      </TimelineCard>
    </section>
  )
}
