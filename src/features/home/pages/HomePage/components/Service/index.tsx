import { useTranslations } from 'next-intl'

import { Link } from '@/libs/intl/navigation'
import { ArrowRightCircleIcon } from '@/components/icons/ArrowRightCircleIcon'
import { ServiceCard } from '../ServiceCard'
import { Animation } from '@/components/Animation'

export function Service() {
  const t = useTranslations('HomePage.Service')
  const common = useTranslations('common')

  return (
    <section className='mt-[152px] py-[64px] bg-[url("/home/service.png")] bg-cover'>
      <h2 className='text-[34px] leading-[36px] text-white text-center'>
        {t('title')}
      </h2>

      <Animation className='mt-[40px] w-[934px] flex flex-wrap gap-[40px] mx-auto'>
        <div className='p-[24px] rounded-[8px] shadow-5 space-y-[32px] max-w-[447px] w-full bg-white'>
          <ServiceCard
            className='border-b border-white-5'
            title={t('containerMaintenanceRepairServices.title')}
            description={t('containerMaintenanceRepairServices.description')}
          />
          <ServiceCard
            className='border-b border-white-5'
            title={t('containerFreightStationContainerYard.title')}
            description={t('containerFreightStationContainerYard.description')}
          />
          <ServiceCard
            title={t('freeTradeZone.title')}
            description={t('freeTradeZone.description')}
          />
        </div>
        <div className='p-[24px] rounded-[8px] shadow-5 space-y-[32px] max-w-[447px] w-full bg-white'>
          <ServiceCard
            className='border-b border-white-5'
            title={t('coastalShippingServices.title')}
            description={t('coastalShippingServices.description')}
          />
          <ServiceCard
            className='border-b border-white-5'
            title={t('bulkCargoProjectCargo.title')}
            description={t('bulkCargoProjectCargo.description')}
          />
          <ServiceCard
            title={t('automatedContainerReadingTechnology.title')}
            description={t('automatedContainerReadingTechnology.description')}
          />
        </div>
        <div className='w-full'>
          <Link
            className='flex gap-[8px] subtitle-1 text-white items-center block w-fit mx-auto'
            href='#'
          >
            {common('seeMore')}
            <ArrowRightCircleIcon width='40' height='40' />
          </Link>
        </div>
      </Animation>
    </section>
  )
}
