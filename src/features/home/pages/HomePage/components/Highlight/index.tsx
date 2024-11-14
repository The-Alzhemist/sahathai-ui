import { useTranslations } from 'next-intl'

import { Animation } from '@/components/Animation'
import { DoubleQuoteIcon } from '@/components/icons/DoubleQuoteIcon'
import { HighlightCard } from '../HighlightCard'
import Image from 'next/image'

export function Highlight() {
  const t = useTranslations('HomePage.Highlight')

  return (
    <section className='mt-[132px] max-w-[951px] mx-auto'>
      <div className='grid grid-cols-[36px_1fr] gap-x-[16px] gap-y-[8px]'>
        <DoubleQuoteIcon
          className='text-secondary self-center'
          width='36'
          height='17'
        />
        <h2 className='headline-2 text-navy'>{t('title')}</h2>
        <div />
        <p className='body-1 text-black-6'>{t('description')}</p>
      </div>

      <Animation className='mt-[50px] flex justify-center flex-wrap gap-[32px]'>
        <HighlightCard
          title={t('location.title')}
          description={t('location.description')}
          imageUrl='/home/location.png'
          imageSize={70}
        />
        <HighlightCard
          title={t('flexibility.title')}
          description={t('flexibility.description')}
          imageUrl='/home/customer-review.png'
          imageSize={78}
        />
        <HighlightCard
          title={t('locationEasyAccess.title')}
          description={t('locationEasyAccess.description')}
          imageUrl='/home/target.png'
          imageSize={70}
        />
      </Animation>
    </section>
  )
}
