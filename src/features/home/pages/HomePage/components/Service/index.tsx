import { useTranslations } from 'next-intl'

import { Link } from '@/libs/intl/navigation'
import { ArrowRightCircleIcon } from '@/components/icons/ArrowRightCircleIcon'
import { Animation } from '@/components/Animation'
import { ServiceCard } from '../ServiceCard'

export function Service() {
  const t = useTranslations('HomePage.Service')
  const common = useTranslations('common')

  return (
    <section className='mt-[122px] py-[62px] bg-modellBgDark'>
      <h2 className='headline-2 text-white text-center'>{t('title')}</h2>

      <Animation className='mt-[80px] w-full max-w-[1038px] mx-auto'>
        <div className='flex flex-wrap gap-x-[24px] gap-y-[75px]'>
          <ServiceCard
            title={t('containerMaintenanceRepairServices.title')}
            content={t('containerMaintenanceRepairServices.content')}
            imageUrl='/home/container.png'
            imageSize={75}
          />
          <ServiceCard
            title={t('containerFreightStationContainerYard.title')}
            content={t('containerFreightStationContainerYard.content')}
            imageUrl='/home/container2.png'
            imageSize={62}
          />
          <ServiceCard
            title={t('freeTradeZone.title')}
            content={t('freeTradeZone.content')}
            imageUrl='/home/taxes.png'
            imageSize={68}
          />
          <ServiceCard
            title={t('coastalShippingServices.title')}
            content={t('coastalShippingServices.content')}
            imageUrl='/home/cargo-ship.png'
            imageSize={76}
          />
          <ServiceCard
            title={t('bulkCargoProjectCargo.title')}
            content={t('bulkCargoProjectCargo.content')}
            imageUrl='/home/road-freight.png'
            imageSize={70}
          />
          <ServiceCard
            title={t('automatedContainerReadingTechnology.title')}
            content={t('automatedContainerReadingTechnology.content')}
            imageUrl='/home/phone.png'
            imageSize={64}
          />
        </div>

        <Link
          className='mt-[40px] flex gap-[20px] subtitle-1 text-white items-center block w-fit mx-auto transition-all hover:scale-125'
          href='/services'
        >
          {common('seeMore')}
          <ArrowRightCircleIcon width='40' height='40' />
        </Link>
      </Animation>
    </section>
  )
}
