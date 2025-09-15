import { useTranslations } from 'next-intl'

import { SahathaiText } from '@/components/SahathaiText'
import { Timeline } from '../Timeline'
import Image from 'next/image'

export function CommitmentSuccess() {
  const t = useTranslations('AboutUsPage.CommitmentSuccess')

  return (
    <section className='mt-[80px] pb-[121px] w-full relative'>
      <div className=' max-w-[1000px] w-full mx-auto px-5'>
        <SahathaiText h='h1' className='headline-3 md:headline-1' />
        <h3 className='mt-[24px] headline-4'>{t('startingBusiness')}</h3>
        <p className='mt-[20px] body-1 text-black-6 whitespace-pre-line'>
          {t('content')}
        </p>
        <Timeline />
      </div>
      <div className='absolute -z-10 bottom-0 left-0 h-[704px] w-full'>
        <Image
          src='/about-us/about-us-bg.png'
          alt='About us background'
          fill
          className='object-bottom'
        />
      </div>
    </section>
  )
}
