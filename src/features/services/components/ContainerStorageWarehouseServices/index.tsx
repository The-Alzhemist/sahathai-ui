import { useTranslations } from 'next-intl'

import { Background } from '@/components/Background'
import { Animation } from '@/components/Animation'
import { MiniCard } from '../MiniCard'
import { Card } from '../Card'
import { BannerTextCard } from '@/features/services/components/BannerTextCard'
import { Line } from '@/components/Line'

export function ContainerStorageWarehouseServices() {
  const t = useTranslations('ServicesPage.ContainerStorageWarehouseServices')

  return (
    <section>
      <section className='pt-[71px] pb-[83px]'>
        <Animation>
          <h2 className='headline-2 text-center mb-5 text-navy'>
            {t('title')}
          </h2>
          <div className='flex justify-center mb-10'>
            <Line />
          </div>

          <section className='flex  flex-col md:flex-row justify-center items-center gap-[73px] flex-wrap'>
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

      <BannerTextCard
        imageUrl='/services/new/container-service-1.webp'
        title={t('freeTradeZoneContainerYard.title')}
        content={t('freeTradeZoneContainerYard.content')}
        position='left'
      />

      <BannerTextCard
        imageUrl='/services/new/container-service-2.webp'
        title={t('generalWarehouseandBondedWarehouse.title')}
        content={t('generalWarehouseandBondedWarehouse.content')}
        position='right'
      />

      <BannerTextCard
        imageUrl='/services/new/container-service-3.webp'
        title={t('coldStorageWarehouse.title')}
        content={t('coldStorageWarehouse.content')}
        position='left'
      />

      <BannerTextCard
        imageUrl='/services/new/container-service-4.webp'
        title={t('freeTradeZoneWarehouse.title')}
        content={t('freeTradeZoneWarehouse.content')}
        position='right'
      />

      <BannerTextCard
        imageUrl='/services/new/container-service-5.webp'
        title={t('serviceProviderImportExport.title')}
        content={t('serviceProviderImportExport.content')}
        position='left'
      />
    </section>
  )
}
