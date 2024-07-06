import { useTranslations } from 'next-intl'

import { Animation } from '@/components/Animation'
import { MultipurposePortCard } from '../MultipurposePortCard'
import Image from 'next/image'

export function MultipurposePort() {
  const t = useTranslations('ServicesPage.MultipurposePort')

  return (
    <section className='mt-[72px] space-y-[80px] max-w-[896px] w-full mx-auto'>
      <Animation>
        <h2 className='headline-2 text-blue-400 text-center'>{t('title')}</h2>
      </Animation>
      <MultipurposePortCard>
        <Image
          className='rounded-[8px]'
          src='/services/coastal-shipping.png'
          width={405}
          height={451}
          alt=''
        />
        <div className='max-w-[405px] w-full'>
          <h3 className='headline-3 text-blue-300 underline'>
            {t('coastalShipping.title')}
          </h3>
          <p className='mt-[16px] body-1 text-black-60 whitespace-pre-wrap'>
            {t('coastalShipping.description')}
          </p>
        </div>
      </MultipurposePortCard>
      <MultipurposePortCard className='bg-blue-200 shadow-2'>
        <div className='max-w-[405px] w-full'>
          <h3 className='headline-3 text-white'>
            {t('bulkCargoProjectCargo.title')}
          </h3>
          <p className='mt-[16px] body-1 text-white'>
            {t('bulkCargoProjectCargo.description')}
          </p>
        </div>
        <Image
          className='rounded-[8px]'
          src='/services/bulk-cargo-project-cargo.png'
          width={405}
          height={346}
          alt=''
        />
      </MultipurposePortCard>
    </section>
  )
}
