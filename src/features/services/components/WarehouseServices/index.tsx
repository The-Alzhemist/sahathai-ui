import { Animation } from '@/components/Animation'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function WarehouseServices() {
  const t = useTranslations('ServicesPage.WarehouseServices')

  return (
    <Animation className='max-w-[896px] w-full mx-auto mt-[72px] p-[24px] rounded-[8px] shadow-2'>
      <h2 className='headline-2 text-blue-400 text-center'>{t('title')}</h2>
      <p className='mt-[17px] body-1 text-black-60 text-center'>
        {t('description')}
      </p>
      <Image
        className='mt-[39px] rounded-[8px]'
        src='/services/warehouse-services.png'
        width={848}
        height={240}
        alt=''
      />
      <div className='mt-[39px] flex flex-wrap gap-[24px]'>
        <div className='max-w-[266.67px] w-full'>
          <h3 className='text-blue-300 reg-20'>
            {t('diverseWarehouseServices.title')}
          </h3>
          <p className='mt-[16px] body-1 text-black-60'>
            {t('diverseWarehouseServices.description')}
          </p>
        </div>
        <div className='max-w-[266.67px] w-full'>
          <h3 className='text-blue-300 reg-20'>{t('careAndSecurity.title')}</h3>
          <p className='mt-[16px] body-1 text-black-60'>
            {t('careAndSecurity.description')}
          </p>
        </div>
        <div className='max-w-[266.67px] w-full'>
          <h3 className='text-blue-300 reg-20'>
            {t('careAndSecurity2.title')}
          </h3>
          <p className='mt-[16px] body-1 text-black-60'>
            {t('careAndSecurity2.description')}
          </p>
        </div>
      </div>
    </Animation>
  )
}
