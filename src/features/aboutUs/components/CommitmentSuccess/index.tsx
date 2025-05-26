import { useTranslations } from 'next-intl'

import { SahathaiText } from '@/components/SahathaiText'
import { Timeline } from '../Timeline'

export function CommitmentSuccess() {
  const t = useTranslations('AboutUsPage.CommitmentSuccess')

  return (
    <section className='mt-[80px] mb-[121px] max-w-[1000px] w-full mx-auto px-5'>
      <SahathaiText h='h1' className='headline-3 md:headline-1' />
      <h3 className='mt-[24px] headline-4'>{t('startingBusiness')}</h3>
      <p className='mt-[20px] body-1 text-black-6 whitespace-pre-line'>{t('content')}</p>
      <Timeline />
    </section>
  )
}
