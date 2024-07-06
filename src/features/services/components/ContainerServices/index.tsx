import { useTranslations } from 'next-intl'

import { Animation } from '@/components/Animation'
import { ContainerServicesCard } from '../ContainerServicesCard'
import Image from 'next/image'

export function ContainerServices() {
  const t = useTranslations('ServicesPage.ContainerServices')

  return (
    <section className='space-y-[72px] max-w-[896px] w-full mx-auto'>
      <Animation>
        <h2 className='headline-2 text-blue-400 text-center'>{t('title')}</h2>
      </Animation>

      <ContainerServicesCard>
        <h3 className='headline-3 text-blue-300'>
          {t('containerMaintenanceAndRepairServices.title')}
        </h3>
        <div className='flex gap-[40px]'>
          <Image
            className='rounded-[8px] shrink-0'
            src='/services/container-maintenance-repair-services.png'
            width={404}
            height={232}
            alt=''
          />
          <p className='body-1 text-black-60'>
            {t('containerMaintenanceAndRepairServices.description')}
          </p>
        </div>
      </ContainerServicesCard>

      <ContainerServicesCard className='bg-blue-200'>
        <h3 className='headline-3 text-white'>{t('cfsCy.title')}</h3>
        <div className='flex gap-[40px]'>
          <p className='body-1 text-white'>{t('cfsCy.description')}</p>
          <Image
            className='rounded-[8px] shrink-0'
            src='/services/cfs-cy.png'
            width={404}
            height={252}
            alt=''
          />
        </div>
      </ContainerServicesCard>

      <ContainerServicesCard>
        <h3 className='headline-3 text-blue-300'>{t('dutyFreeZone.title')}</h3>
        <div className='flex gap-[40px]'>
          <Image
            className='rounded-[8px] shrink-0'
            src='/services/duty-free-zone.png'
            width={404}
            height={252}
            alt=''
          />
          <p className='body-1 text-black-60'>
            {t('dutyFreeZone.description')}
          </p>
        </div>
      </ContainerServicesCard>
    </section>
  )
}
