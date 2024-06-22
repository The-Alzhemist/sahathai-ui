import { useTranslations } from 'next-intl'
import { GeneralWarehouseCard } from '../GeneralWarehouseCard'

export function GeneralWarehouse() {
  const t = useTranslations('PortFacilitiesPage.GeneralWarehouse')

  return (
    <section className='mt-[76px] max-w-[1315px] mx-auto mt-[76px]'>
      <h2 className='text-center font-[700] text-[36px] leading-[44px]'>
        {t('title')}
      </h2>
      <p className='mt-[32px] whitespace-pre-wrap text-center text-[18px] leading-[28px] sarabun'>
        {t('description')}
      </p>
      <div className='mt-[48px] flex justify-center flex-wrap gap-[24px] max-w-[1280px] mx-auto'>
        <GeneralWarehouseCard
          title={t('domesticWarehouse.title')}
          description={t('domesticWarehouse.description')}
        />
        <GeneralWarehouseCard
          title={t('importWarehouse.title')}
          description={t('importWarehouse.description')}
        />
        <GeneralWarehouseCard
          title={t('dutyFreeWarehouse.title')}
          description={t('dutyFreeWarehouse.description')}
        />
        <GeneralWarehouseCard
          title={t('warehouseConsolidateProducts.title')}
          description={t('warehouseConsolidateProducts.description')}
        />
      </div>
    </section>
  )
}
