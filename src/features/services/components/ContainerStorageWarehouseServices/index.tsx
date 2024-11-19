import { useTranslations } from 'next-intl'

import { Background } from '@/components/Background'
import { Animation } from '@/components/Animation'
import { MiniCard } from '../MiniCard'
import { Card } from '../Card'

export function ContainerStorageWarehouseServices() {
  const t = useTranslations('ServicesPage.ContainerStorageWarehouseServices')

  return (
    <section>
      <Background>
        <section className='bg-modellBgDark/60 text-white pt-[71px] pb-[83px]'>
          <Animation>
            <h2 className='headline-2 text-center'>{t('title')}</h2>
            <section className='mt-[60px] flex justify-center gap-[73px]'>
              <MiniCard
                imageUrl='/services/container.png'
                content={t('content1')}
              />
              <MiniCard
                imageUrl='/services/forklift.png'
                content={t('content2')}
              />
              <MiniCard imageUrl='/services/tax.png' content={t('content3')} />
              <MiniCard
                imageUrl='/services/warehouse.png'
                content={t('content4')}
              />
            </section>
          </Animation>
        </section>
      </Background>
      <section className='max-w-[1040px] w-full mx-auto space-y-[100px] py-[170px]'>
        <Card
          imageUrl='/services/free-trade-zone-container-yard.png'
          title={t('freeTradeZoneContainerYard.title')}
          content={t('freeTradeZoneContainerYard.content')}
          position='left'
        />
        <Card
          imageUrl='/services/general-warehouseand-bonded-warehouse.png'
          title={t('generalWarehouseandBondedWarehouse.title')}
          content={t('generalWarehouseandBondedWarehouse.content')}
          position='right'
        />
        <Card
          imageUrl='/services/cold-storage-warehouse.png'
          title={t('coldStorageWarehouse.title')}
          content={t('coldStorageWarehouse.content')}
          position='left'
        />
        <Card
          imageUrl='/services/free-trade-zone-warehouse.png'
          title={t('freeTradeZoneWarehouse.title')}
          content={t('freeTradeZoneWarehouse.content')}
          position='right'
        />
        <Card
          imageUrl='/services/service-provider-import-export.png'
          title={t('serviceProviderImportExport.title')}
          content={t('serviceProviderImportExport.content')}
          position='left'
        />
      </section>
    </section>
  )
}
