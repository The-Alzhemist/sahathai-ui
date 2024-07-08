import { useTranslations } from 'next-intl'

import { Animation } from '@/components/Animation'
import { Card } from './Card'

export function ThreeHarborCranes() {
  const t = useTranslations('InfrastructureContainersPage.ThreeHarborCranes')

  return (
    <Animation className='mt-[32px] p-[24px] rounded-[8px] shadow-2 max-w-[896px] w-full mx-auto'>
      <h2 className='headline-3 text-blue-400 text-center'>{t('title')}</h2>
      <div className='w-full mt-[40px]'>
        <div className='relative pt-[57.19%] w-full'>
          <div className='bg-dark absolute inset-0' />
        </div>
      </div>
      <section className='mt-[39px] flex flex-wrap gap-[24px]'>
        <Card
          title={t('higherWorkEfficiency.title')}
          description={t('higherWorkEfficiency.description')}
        />
        <Card
          title={t('maintainTravelSchedule.title')}
          description={t('maintainTravelSchedule.description')}
        />
      </section>
    </Animation>
  )
}
