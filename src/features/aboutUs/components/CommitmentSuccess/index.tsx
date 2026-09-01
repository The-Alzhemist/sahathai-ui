import { useTranslations } from 'next-intl'

import { SahathaiText } from '@/components/SahathaiText'
import { Timeline } from '../Timeline'
import Image from 'next/image'

export function CommitmentSuccess() {
  const t = useTranslations('AboutUsPage.CommitmentSuccess')

  return (
    <section
      className='pt-[80px] pb-[300px] w-full relative'
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 40%, #E4F6FF 100%)',
      }}
    >
      <div className='w-full absolute bottom-0'>
        <div className='relative pt-[57.08%] w-full'>
          <Image
            src='/about-us/new/commitment-bg.webp'
            alt='About us background'
            fill
          />
        </div>
      </div>
      <div className='max-w-[1000px] w-full mx-auto px-5'>
        <SahathaiText h='h1' className='headline-3 md:headline-1' />
        <h3 className='mt-[24px] headline-4'>{t('startingBusiness')}</h3>
        <p className='mt-[20px] body-1 text-black-6 whitespace-pre-line'>
          {t('content')}
        </p>
        <Timeline />
      </div>
    </section>
  )
}
