import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { TimelineCard } from '../TimelineCard'

export function Timeline() {
  const t = useTranslations('AboutUsPage.CommitmentSuccess')

  return (
    <section className='relative max-w-[794px] mx-auto mt-[80px] flex flex-col gap-y-[25px] mb-[100px]'>
      <TimelineCard
        contentPosition='right'
        year={t('2551.year')}
        imageUrl='/about-us/new/2551.webp'
      >
        <p className='font-light'>{t('2551.content')}</p>
      </TimelineCard>
      <TimelineCard
        contentPosition='left'
        year={t('2554.year')}
        imageUrl='/about-us/new/2554.webp'
      >
        <p className='font-light'>{t('2554.content')}</p>
      </TimelineCard>
      <TimelineCard
        contentPosition='right'
        year={t('2556.year')}
        imageUrl='/about-us/new/2556.webp'
      >
        <Image
          className='mb-[30px]'
          src='/about-us/sahathai.png'
          width={152}
          height={35}
          alt=''
        />
        <p className='font-light'>
          {t.rich('2556.content', {
            b: chunks => <strong>{chunks}</strong>,
          })}
        </p>
      </TimelineCard>
      <TimelineCard
        contentPosition='left'
        year={t('2558.year')}
        imageUrl='/about-us/new/2558.webp'
      >
        <p className='font-light'>{t('2558.content')}</p>
        <p className='font-light mt-[16px]'>
          {t.rich('2558.content2', {
            b: chunks => <strong>{chunks}</strong>,
          })}
        </p>
      </TimelineCard>
      <TimelineCard
        contentPosition='right'
        year={t('2559.year')}
        imageUrl='/about-us/new/2559.webp'
      >
        <p className='font-light'>{t('2559.content')}</p>
        <p className='font-light mt-[16px]'>
          {t.rich('2559.content2', {
            b: chunks => <strong>{chunks}</strong>,
          })}
        </p>
      </TimelineCard>
      <TimelineCard
        contentPosition='left'
        year={t('2560.year')}
        imageUrl='/about-us/new/2560.webp'
      >
        <p className='font-light'>
          {t.rich('2560.content', {
            b: chunks => <strong>{chunks}</strong>,
          })}
        </p>
        <p className='font-light mt-[16px]'>{t('2560.content2')}</p>
        <p className='font-light mt-[16px]'>{t('2560.content3')}</p>
        <p className='font-light mt-[16px]'>
          {t.rich('2560.content4', {
            b: chunks => <strong>{chunks}</strong>,
          })}
        </p>
        <p className='font-light mt-[16px]'>{t('2560.content5')}</p>
      </TimelineCard>
      <TimelineCard
        contentPosition='right'
        year={t('2561.year')}
        imageUrl='/about-us/new/2561.webp'
      >
        <p className='font-light'>{t('2561.content')}</p>
        <p className='font-light mt-[16px]'>
          {t.rich('2561.content2', {
            b: chunks => <strong>{chunks}</strong>,
          })}
        </p>
      </TimelineCard>
      <TimelineCard
        contentPosition='left'
        year={t('2562.year')}
        imageUrl='/about-us/new/2562.webp'
      >
        <p className='font-light'>
          {t.rich('2562.content', {
            b: chunks => <strong>{chunks}</strong>,
          })}
        </p>
        <p className='font-light mt-[16px]'>{t('2562.content2')}</p>
        <p className='font-light mt-[16px]'>{t('2562.content3')}</p>
      </TimelineCard>
      <TimelineCard
        contentPosition='right'
        year={t('2563.year')}
        imageUrl='/about-us/new/2563.webp'
      >
        <p className='font-light'>{t('2563.content')}</p>
        <p className='font-light mt-[16px]'>{t('2563.content2')}</p>
        <p className='font-light mt-[16px]'>{t('2563.content3')}</p>
        <p className='font-light mt-[16px]'>{t('2563.content4')}</p>
      </TimelineCard>
      <TimelineCard
        contentPosition='left'
        year={t('2564.year')}
        imageUrl='/about-us/new/2564.webp'
      >
        <p className='font-light'>{t('2564.content')}</p>
      </TimelineCard>
      <TimelineCard
        contentPosition='right'
        year={t('2565.year')}
        imageUrl='/about-us/new/2565.webp'
      >
        <p className='font-light'>{t('2565.content')}</p>
        <p className='font-light mt-[16px]'>{t('2565.content2')}</p>
        <p className='font-light mt-[16px]'>{t('2565.content3')}</p>
      </TimelineCard>
      <TimelineCard
        contentPosition='left'
        year={t('2566.year')}
        imageUrl='/about-us/new/2566.webp'
      >
        <p className='font-light'>{t('2566.content')}</p>
        <p className='font-light mt-[16px]'>{t('2566.content2')}</p>
      </TimelineCard>
      <TimelineCard
        contentPosition='right'
        year={t('2567.year')}
        imageUrl='/about-us/new/2567.webp'
      >
        <p className='font-light'>{t('2567.content')}</p>
        <p className='font-light mt-[16px]'>{t('2567.content2')}</p>
        <p className='font-light mt-[16px]'>{t('2567.content3')}</p>
      </TimelineCard>
      <TimelineCard
        contentPosition='left'
        year={t('2568.year')}
        imageUrl='/about-us/new/2568.webp'
      >
        <p className='font-light'>{t('2568.content')}</p>
      </TimelineCard>
    </section>
  )
}
