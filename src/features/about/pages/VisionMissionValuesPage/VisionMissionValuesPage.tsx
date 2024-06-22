import { useTranslations } from 'next-intl'

import { Vision } from './components/Vision'
import { OurMission } from './components/OurMission'
import { CoreValues } from './components/CoreValues'

export function VisionMissionValuesPage() {
  const t = useTranslations('VisionMissionValuesPage')

  return (
    <main>
      <section className='h-[485px] flex items-center justify-center'>
        <h2 className='font-[600] text-[30px] leading-[36px] whitespace-pre text-center'>
          {t('title')}
        </h2>
      </section>
      <Vision />
      <OurMission />
      <CoreValues />
    </main>
  )
}
