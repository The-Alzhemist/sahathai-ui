import { useTranslations } from 'next-intl'

import { Animation } from '@/components/Animation'
import { Card } from './Card'

export function TerminalOperatingSystem() {
  const t = useTranslations(
    'InfrastructureContainersPage.TerminalOperatingSystem'
  )

  return (
    <Animation className='mt-[182px] max-w-[896px] w-full mx-auto'>
      <h2 className='headline-2 text-blue-400'>{t('title')}</h2>
      <section className='mt-[32px] flex flex-wrap gap-[24px]'>
        <Card
          title={t('modernEfficiency.title')}
          description={t('modernEfficiency.description')}
        />
        <Card
          title={t('costEffectiveSolutions.title')}
          description={t('costEffectiveSolutions.description')}
        />
        <Card
          title={t('efficientOperations.title')}
          description={t('efficientOperations.description')}
        />
      </section>
    </Animation>
  )
}
