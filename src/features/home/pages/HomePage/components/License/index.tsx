import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { Animation } from '@/components/Animation'
import { DoubleQuoteIcon } from '@/components/icons/DoubleQuoteIcon'
import { LicenseCard } from '../LicenseCard'

export function License() {
  const t = useTranslations('HomePage.License')
  return (
    <section className='container'>
      <DoubleQuoteIcon
        className='text-secondary mx-auto mb-[59px]'
        width='36'
        height='17'
      />
      <h2 className='headline-2 text-navy text-center mb-[10px]'>
        {t('title')}
      </h2>
      <p className='body-2 text-black-6 text-center mb-[45px] max-w-[896px] mx-auto'>
        {t('content')}
      </p>
      <Animation className='flex flex-wrap justify-center gap-[15px]'>
        <LicenseCard
          contentClassName='mt-[23px]'
          imageUrl='/home/license1.png'
          width={116}
          height={71}
          content={t('iso')}
        />
        <LicenseCard
          contentClassName='mt-[8px]'
          imageUrl='/home/license2.png'
          width={58.67}
          height={88}
          content={t('iso')}
        />
        <LicenseCard
          contentClassName='mt-[6px]'
          imageUrl='/home/license3.png'
          width={151.01}
          height={88}
          content={t('iso')}
        />
        <LicenseCard
          contentClassName='mt-[6px]'
          imageUrl='/home/license4.png'
          width={129.68}
          height={88}
          content={t('iso')}
        />
        <LicenseCard
          contentClassName='mt-[22px]'
          imageUrl='/home/license5.png'
          width={141}
          height={56}
          content={t('iso')}
        />
      </Animation>
    </section>
  )
}
