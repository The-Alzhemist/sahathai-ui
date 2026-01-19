import { Fragment } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { Animation } from '@/components/Animation'

import ContainerServices from '@/app/[locale]/services/container-services/page'
import { ComprehensiveCommercialPortCard } from '@/features/services/components/ComprehensiveCommercialPortCard'
import { TrackingCard } from '@/features/investorRelations/pages/EServicePage/component/TrackingCard'

export function TrackingService() {
  const t = useTranslations('EServicePage.TrackingService')

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
        <section className='flex justify-center flex-wrap mt-[80px]  gap-6 mb-[200px]'>
          <TrackingCard
            title={<Fragment>{t('TrackByContainer')}</Fragment>}
            imageUrl='/e-service/tracking-1.webp'
            link='https://stt.sahathaiterminal.com/containerinquery/Default.aspx?type=Container%20ID'
          />
          <TrackingCard
            title={<Fragment>{t('TrackByBookingNumber')}</Fragment>}
            imageUrl='/e-service/tracking-2.webp'
            link='https://stt.sahathaiterminal.com/containerinquery/Default.aspx?type=Booking%20No.'
          />
          <TrackingCard
            title={t('TrackByBLNumber')}
            imageUrl='/e-service/tracking-3.webp'
            link='https://stt.sahathaiterminal.com/containerinquery/Default.aspx?type=B/L%20No.'
          />
          <TrackingCard
            title={<Fragment>{t('ContainerDepotBooking')}</Fragment>}
            imageUrl='/e-service/tracking-4.webp'
            link='https://www.bangkokdepot.com/bookingcheck/'
          />
          <TrackingCard
            title={<Fragment>{t('FreeZone')}</Fragment>}
            imageUrl='/e-service/tracking-5.webp'
            link='https://stt.sahathaiterminal.com/FreeZone/Login.aspx'
          />
          <TrackingCard
            title={<Fragment>{t('BTSTracking')}</Fragment>}
            imageUrl='/e-service/tracking-6.webp'
            link='https://stt.sahathaiterminal.com/BtsTracking/login.aspx'
          />
          {/*  */}
          <TrackingCard
            title={<Fragment>{t('DGChecking')}</Fragment>}
            imageUrl='/e-service/tracking-7.webp'
            link='https://stt.sahathaiterminal.com/containerinquery/Default.aspx?type=DG'
          />
          <TrackingCard
            title={<Fragment>{t('BCDSBookingQueue')}</Fragment>}
            imageUrl='/e-service/tracking-8.webp'
            link='http://147.50.67.228/'
          />
          <TrackingCard
            title={<Fragment>{t('EReceipt')}</Fragment>}
            imageUrl='/e-service/tracking-9.png'
            link='https://stt.sahathaiterminal.com/EPayment/login2?redirectPage=~/booking.aspx'
          />
        </section>
      </Animation>
    </section>
  )
}
