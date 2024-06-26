import { useTranslations } from 'next-intl'

import { Slide } from '@/components/Slide'
import { Content } from './components/Content'
import { Card } from './components/Card'
import { Strength } from '../../components/Strength'
import { ServiceForm } from '../../components/ServiceForm'

export function ContainerServicesPage() {
  const t = useTranslations('ContainerServicesPage')
  return (
    <main className='py-[83px]'>
      <Content
        title={t('containerMaintenanceAndRepairServices.title')}
        description={t('containerMaintenanceAndRepairServices.description')}
      />
      <Content
        className='mt-[176px]'
        title={t('cfsCy.title')}
        description={t('cfsCy.description')}
      />
      <Content
        className='mt-[176px]'
        title={t('dutyFreeZone.title')}
        description={t('dutyFreeZone.description')}
      />
      <Card
        className='mt-[159px]'
        title={t('bulkCargoProjectCargo.title')}
        description={t('bulkCargoProjectCargo.description')}
      />
      <Card
        className='mt-[62px] flex-row-reverse'
        title={t('coastalShipping.title')}
        description={t('coastalShipping.description')}
      />
      <Slide className='mt-[100px]' />
      <Strength className='mt-[147px]' />
      <section className='mt-[80px] max-w-[954px] w-full mx-auto'>
        <h2 className='font-[700] text-[36px] leading-[44px] text-center'>
          {t('comprehensiveServices.title')}
        </h2>
        <p className='mt-[24px] text-center text-[18px] leading-[28px]'>
          {t('comprehensiveServices.description')}
        </p>
      </section>
      <ServiceForm />
    </main>
  )
}
