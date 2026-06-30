import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { Animation } from '@/components/Animation'
import { LicenseCard } from '../LicenseCard'

export function License() {
  const t = useTranslations('HomePage.License')
  return (
    <section className='relative container min-h-[550px] flex flex-col justify-center items-center py-10 md:py-0'>
      <div className='absolute inset-0 -z-10'>
        <Image
          src='/home/license-bg.webp'
          alt='lisense background'
          fill
          className='object-cover'
          priority
        />
      </div>

      <h2 className='headline-2 text-navy text-center mb-[10px]'>
        {t('title')}
      </h2>
      <p className='text-black-6 font-light text-sm text-center mb-[45px] max-w-[896px] mx-auto'>
        {t('content')}
      </p>
      <Animation className='flex flex-wrap justify-center gap-[15px]'>
        <LicenseCard
          imageUrl='/home/license1.png'
          width={116}
          height={71}
          content={t('iso')}
        />
        <LicenseCard
          imageUrl='/home/license2.png'
          width={58.67}
          height={88}
          content={t('globalSecurityVerification')}
        />
        <LicenseCard
          imageUrl='/home/license3.png'
          width={151.01}
          height={88}
          content={t('thaiInvestorAssociation')}
        />
        <LicenseCard
          imageUrl='/home/license4.png'
          width={129.68}
          height={88}
          content={t('sustainability')}
        />
        <LicenseCard
          imageUrl='/home/license5.png'
          width={141}
          height={56}
          content={t('acknowledgements')}
        />
      </Animation>
    </section>
  )
}
