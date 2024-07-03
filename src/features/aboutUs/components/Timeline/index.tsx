import { useTranslations } from 'next-intl'
import { Fragment } from 'react'

import { TimelineCard } from '../TimelineCard'

export function Timeline() {
  const t = useTranslations('AboutUsPage.CommitmentSuccess')

  return (
    <section className='relative max-w-[746px] mx-auto mt-[80px] grid grid-cols-[1fr_2px_1fr] gap-x-[90px]'>
      <section className='max-w-[283px]'>
        <TimelineCard
          position='right'
          year={t('2551.year')}
          imageUrl='/about-us/2551.png'
          logoUrl='/about-us/shcp.png'
        >
          {t('2551.description')}
        </TimelineCard>
        <TimelineCard
          className='mt-[121px]'
          position='right'
          year={t('2558.year')}
          imageUrl='/about-us/2558.png'
          logoUrl='/about-us/bbt.png'
        >
          {t('2558.description')}
        </TimelineCard>
        <TimelineCard
          className='mt-[77px]'
          position='right'
          year={t('2568.year')}
          imageUrl='/about-us/2568.png'
          logoUrl='/about-us/circle.png'
        >
          {t('2568.description')}
        </TimelineCard>
      </section>
      <div className='h-full bg-black-20' />
      <div className='w-[10px] h-[10px] rounded-full bg-black-20 absolute bottom-0 left-1/2 -translate-x-1/2' />
      <section className='max-w-[283px]'>
        <TimelineCard
          className='mt-[205px]'
          position='left'
          year={t('2556.year')}
          imageUrl='/about-us/2556.png'
          logoUrl='/about-us/sahathai.png'
        >
          {t('2556.description')}
        </TimelineCard>
        <TimelineCard
          className='mt-[121px]'
          position='left'
          year={t('2559_2560.year')}
          imageUrl='/about-us/2559_2560.png'
          logoUrl='/about-us/bbs.png'
        >
          {t('2559_2560.description')}
        </TimelineCard>
        <TimelineCard
          className='mt-[78px]'
          contentClassName='grid grid-cols-[20px_1fr]'
          position='left'
          year={t('2560_2562.year')}
          imageUrl='/about-us/2560_2562.png'
          logoUrl='/about-us/sahathai.png'
        >
          {[
            t('2560_2562.description'),
            t('2560_2562.description2'),
            t('2560_2562.description3'),
            t('2560_2562.description4'),
            t('2560_2562.description5'),
          ].map((row, index) => (
            <Fragment key={index}>
              <span className='block text-center'>&bull;</span>
              <span className='block text-left'>{row}</span>
            </Fragment>
          ))}
        </TimelineCard>
      </section>
    </section>
  )
}
