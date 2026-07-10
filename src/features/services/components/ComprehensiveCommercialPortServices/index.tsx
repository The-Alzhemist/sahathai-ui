import { Fragment } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { Animation } from '@/components/Animation'
import { ComprehensiveCommercialPortCard } from '../ComprehensiveCommercialPortCard'

export function ComprehensiveCommercialPortServices() {
  const t = useTranslations('ServicesPage.ComprehensiveCommercialPortServices')

  return (
    <section className='relative py-[50px] mt-[-40px]'>
      <div className='absolute inset-x-0 bottom-0 h-[420px] md:h-full -z-10 pointer-events-none overflow-hidden'>
        <Image
          src='/services/new/services-bg.webp'
          alt='license background'
          fill
          className='object-cover '
          priority
        />
      </div>

      <Animation className='max-w-[1100px] w-full mt-[90px] mx-auto px-5'>
        <h2 className='headline-2 text-navy text-[40px] font-[500] leading-[60.48px] text-center'>
          {t('title')}
        </h2>
        <p className='mt-[15px] body-1 text-center text-black-6'>
          {t('content')}
        </p>

        <section className='flex justify-center flex-wrap mt-[80px]  gap-6 mb-[200px]'>
          <ComprehensiveCommercialPortCard
            title={
              <Fragment>
                {t('commercialDock.title')}&nbsp;|&nbsp;
                <Image src='/bbt.png' width={46} height={20.7} alt='' />
              </Fragment>
            }
            content={t('commercialDock.bbt.content')}
            imageUrl='/services/new/service-1.webp'
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
            imageUrl='/services/new/service-2.webp'
            link='/services/barge-services'
          />
          <ComprehensiveCommercialPortCard
            title={t('containerHandling.title')}
            content={t('containerHandling.content')}
            imageUrl='/services/new/service-inside-3.webp'
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
            imageUrl='/services/new/service-4.webp'
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
            imageUrl='/services/new/service-5.webp'
            link='/services/ground-container-transportation-services'
          />
          <ComprehensiveCommercialPortCard
            title={<Fragment>{t('containerService.title')}</Fragment>}
            content={t('containerService.content')}
            imageUrl='/services/new/service-6.webp'
            link='/services/container-services'
          />
          <ComprehensiveCommercialPortCard
            title={<Fragment>{t('sahathaiTerminal.title')}</Fragment>}
            content={t('sahathaiTerminal.content')}
            imageUrl='/services/new/service-inside-7.webp'
            link='/services/sahathai-terminal'
          />
          <ComprehensiveCommercialPortCard
            title={<Fragment>{t('feederVesselServices.title')}</Fragment>}
            content={t('feederVesselServices.content')}
            imageUrl='/services/new/service-inside-8.webp'
            link='/services/feeder-vessel-services'
          />
        </section>
      </Animation>
    </section>
  )
}
