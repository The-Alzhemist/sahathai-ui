import { useTranslations } from 'next-intl'

import { Animation } from '@/components/Animation'
import Image from 'next/image'

export function ToolsEquipmentTechnology() {
  const t = useTranslations(
    'InfrastructureContainersPage.ToolsEquipmentTechnology'
  )

  return (
    <Animation className='mt-[70px] p-[24px] rounded-[8px] shadow-2 max-w-[896px] w-full mx-auto'>
      <h2 className='headline-2 text-blue-400'>{t('title')}</h2>
      <section className='mt-[44px] flex flex-wrap gap-[40px]'>
        <Image
          className='rounded-[8px]'
          src='/infrastructure-containers/tools-equipment-technology.png'
          width={359}
          height={345}
          alt=''
        />
        <div className='max-w-[449px] w-full'>
          <h3 className='headline-4 text-blue-300'>
            {t('modernTechnologyAndEquipment.title')}
          </h3>
          <p className='mt-[8px] body-1 text-black-60'>
            {t('modernTechnologyAndEquipment.description')}
          </p>
          <h3 className='mt-[24px] headline-4 text-blue-300'>
            {t('improvingAndAddingEquipment.title')}
          </h3>
          <p className='mt-[8px] body-1 text-black-60'>
            {t('improvingAndAddingEquipment.description')}
          </p>
          <h3 className='mt-[24px] headline-4 text-blue-300'>
            {t('confidenceInService.title')}
          </h3>
          <p className='mt-[8px] body-1 text-black-60'>
            {t('confidenceInService.description')}
          </p>
        </div>
      </section>
    </Animation>
  )
}
