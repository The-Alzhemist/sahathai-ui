import { useTranslations } from 'next-intl'

import { Animation } from '@/components/Animation'
import { Card } from './Card'

export function GeneralWarehouse() {
  const t = useTranslations('InfrastructureContainersPage.GeneralWarehouse')

  return (
    <Animation className='mt-[47px] p-[24px] rounded-[8px] shadow-2 max-w-[896px] w-full mx-auto'>
      <h2 className='headline-3 text-blue-300 text-center underline pt-[16px]'>
        {t('title')}
      </h2>
      <p className='mt-[16px] text-black-60 body-1 text-center px-[8px] pb-[16px]'>
        {t('description')}
      </p>
      <section className='mt-[82px] bg-blue-400 rounded-[8px] flex justify-center flex-wrap gap-[24px] p-[24px] rounded-[8px]'>
        <Card
          title={t('domesticWarehouse.title')}
          description={t('domesticWarehouse.description')}
        />
        <Card
          title={t('importWarehouse.title')}
          description={t('importWarehouse.description')}
        />
        <Card
          title={t('dutyFreeWarehouse.title')}
          description={t('dutyFreeWarehouse.description')}
        />
        <Card
          title={t('warehouseConsolidateProducts.title')}
          description={t('warehouseConsolidateProducts.description')}
        />
      </section>
    </Animation>
  )
}
