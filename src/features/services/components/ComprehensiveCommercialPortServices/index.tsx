import { Fragment } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { Animation } from '@/components/Animation'
import { ComprehensiveCommercialPortCard } from '../ComprehensiveCommercialPortCard'
import ContainerServices from '@/app/[locale]/services/container-services/page'

export function ComprehensiveCommercialPortServices() {
  const t = useTranslations('ServicesPage.ComprehensiveCommercialPortServices')

  return (
    <section className='relative py-[50px]'>
      {/* bottom-anchored background */}
      <div className="absolute inset-x-0 bottom-0 h-[420px] md:h-[500px] -z-10 pointer-events-none overflow-hidden">
        <Image
          src="/services/ComprehensiveCommercialPort-bg.webp"
          alt="license background"
          fill
          className="object-cover object-bottom"  // <— stick to bottom
          priority
        />
      </div>



      <Animation className='max-w-[1100px] w-full mx-auto px-5'>
        <h2 className='text-navy text-[40px] font-[500] leading-[60.48px] text-center'>
          {t('title')}
        </h2>
        <p className='mt-[15px] body-1 text-center text-black-6'>
          {t('content')}
        </p>

        <section className='flex justify-center flex-wrap mt-[80px]  gap-6'>
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
          <ComprehensiveCommercialPortCard
            title={
              <Fragment>
                {t('containerService.title')}
              </Fragment>
            }
            content={t('containerService.content')}
            imageUrl='/services/container-service.png'
            link='/services/container-services'
          />
        </section>
      </Animation>
    </section>

  )
}
