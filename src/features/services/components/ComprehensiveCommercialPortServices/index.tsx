import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Animation } from '@/components/Animation'

export function ComprehensiveCommercialPortServices() {
  const t = useTranslations('ServicesPage.ComprehensiveCommercialPortServices')
  return (
    <Animation className='mt-[72px] max-w-[896px] w-full mx-auto py-[24px] shadow-2 space-y-[40px]'>
      <section className='px-[24px]'>
        <h2 className='headline-2 text-blue-400 text-center'>{t('title')}</h2>
        <p className='mt-[17px] body-1 text-center text-black-60'>
          {t('description')}
        </p>
      </section>
      <Image
        className='px-[5px]'
        src='/services/comprehensive-commercial-port-services.png'
        alt=''
        width={886}
        height={250}
      />
      <section className='px-[24px] space-y-[16px]'>
        <h3 className='reg-20 text-blue-300 underline'>
          {t('commercialDockingServices.title')}
        </h3>
        <p className='body-1 text-black-60 whitespace-pre-wrap'>
          {t('commercialDockingServices.description')}
        </p>
      </section>
      <section className='px-[24px] space-y-[16px]'>
        <h3 className='reg-20 text-blue-300 underline'>
          {t('terminalHandlingService.title')}
        </h3>
        <div className='grid grid-cols-[10px_1fr] body-1 text-black-60'>
          <span>&bull;</span>
          <p>{t('terminalHandlingService.description')}</p>
          <span>&bull;</span>
          <p>{t('terminalHandlingService.description2')}</p>
        </div>
      </section>
      <section className='px-[24px] space-y-[16px]'>
        <h3 className='reg-20 text-blue-300 underline'>
          {t('volumeContainersServicedPast3Years.title')}
        </h3>
        <div className='grid grid-cols-[10px_1fr] body-1 text-black-60'>
          <span>&bull;</span>
          <p>{t('volumeContainersServicedPast3Years.description')}</p>
          <span>&bull;</span>
          <p>{t('volumeContainersServicedPast3Years.description2')}</p>
        </div>
      </section>
      <section className='px-[24px] space-y-[16px]'>
        <h3 className='reg-20 text-blue-300 underline'>
          {t('containerFreightStation.title')}
        </h3>
        <div className='grid grid-cols-[10px_1fr] body-1 text-black-60'>
          <span>&bull;</span>
          <p>{t('containerFreightStation.description')}</p>
          <span>&bull;</span>
          <p>{t('containerFreightStation.description2')}</p>
          <span>&bull;</span>
          <p>{t('containerFreightStation.description3')}</p>
        </div>
      </section>
      <section className='px-[24px] space-y-[16px]'>
        <h3 className='reg-20 text-blue-300 underline'>
          {t('containerDepot.title')}
        </h3>
        <div className='grid grid-cols-[10px_1fr] body-1 text-black-60'>
          <span>&bull;</span>
          <p>{t('containerDepot.description')}</p>
          <span>&bull;</span>
          <p>{t('containerDepot.description2')}</p>
        </div>
      </section>
    </Animation>
  )
}
