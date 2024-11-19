import { useTranslations } from 'next-intl'

import { Animation } from '@/components/Animation'
import { Background } from '@/components/Background'

export function InventoryManagementServices() {
  const t = useTranslations('ServicesPage.InventoryManagementServices')

  return (
    <Background className=''>
      <section className='bg-modellBgDark/60 text-white pt-[100px] pb-[140px]'>
        <Animation className='max-w-[1040px] mx-auto'>
          <h2 className='font-[500] text-[40px] leading-[60.48px] text-white text-center'>
            {t('title')}
          </h2>
          <p className='mt-[20px] body-1 text-white-1'>{t('content')}</p>
        </Animation>
      </section>
    </Background>
  )
}
