import { Fragment } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { Animation } from '@/components/Animation'
import { ComprehensiveCommercialPortCard } from '../ComprehensiveCommercialPortCard'

export function ComprehensiveCommercialPortServices() {
  const t = useTranslations('ServicesPage.ComprehensiveCommercialPortServices')

  return (
    <Animation className='max-w-[1100px] w-full mx-auto px-5'>
      <h2 className='text-navy text-[40px] font-[500] leading-[60.48px] text-center'>
        {t('title')}
      </h2>
      <p className='mt-[15px] body-1 text-center text-black-6'>
        {t('content')}
      </p>

      <section className='flex justify-center flex-wrap mt-[80px] mb-[120px] gap-6'>
        <ComprehensiveCommercialPortCard
          title={
            <Fragment>
              {t('commercialDock.title')}&nbsp;|&nbsp;
              <Image src='/bbt.png' width={46} height={20.7} alt='' />
            </Fragment>
          }
          content={t('commercialDock.content')}
          imageUrl='/services/commercial-dock.png'
          link='/services/commercial-dock'
        />
        <ComprehensiveCommercialPortCard
          title={
            <Fragment>
              {t('bargeServices.title')}&nbsp;|&nbsp;
              <Image src='/bbs.png' width={43} height={19.59} alt='' />
            </Fragment>
          }
          content={t('bargeServices.content')}
          imageUrl='/services/barge-services.png'
          link='/services/barge-services'
        />
        <ComprehensiveCommercialPortCard
          title={t('containerHandling.title')}
          content={t('containerHandling.content')}
          imageUrl='/services/container-handling.png'
          link='/services/container-handling'
        />
        <ComprehensiveCommercialPortCard
          title={
            <Fragment>
              {t('containerMaintenance.title')}&nbsp;|&nbsp;
              <Image src='/bcds.png' width={55} height={18.99} alt='' />
            </Fragment>
          }
          content={t('containerMaintenance.content')}
          imageUrl='/services/container-maintenance.png'
          link='/services/container-maintenance'
        />
        <ComprehensiveCommercialPortCard
          title={
            <Fragment>
              {t('groundContainerTransportationServices.title')}&nbsp;|&nbsp;
              <Image src='/bts.png' width={40} height={16} alt='' />
            </Fragment>
          }
          content={t('groundContainerTransportationServices.content')}
          imageUrl='/services/ground-container-transportation-services.png'
          link='/services/ground-container-transportation-services'
        />
      </section>
    </Animation>
  )
}
