import { useTranslations } from 'next-intl'

import { Line } from '@/components/Line'
import { MissionCard } from '../MissionCard'

export function OurMission() {
  const t = useTranslations('AboutUsPage.VisionMissionValues.OurMission')

  return (
    <section className='mt-[80px] max-w-[896px] w-full mx-auto'>
      <h2 className='headline-1 text-blue-400'>{t('title')}</h2>
      <Line className='mt-[14px]' />
      <div className='mt-[49px] flex flex-wrap gap-[24px]'>
        <MissionCard
          className='bg-[url("/about-us/mission-to-customers.png")] bg-cover'
          title={t('missionToCustomers.title')}
          description={t('missionToCustomers.description')}
        />
        <MissionCard
          className='bg-[url("/about-us/mission-to-shareholders.png")] bg-cover'
          title={t('missionToShareholders.title')}
          description={t('missionToShareholders.description')}
        />
        <MissionCard
          className='bg-[url("/about-us/mission-to-employees.png")] bg-cover'
          title={t('missionToEmployees.title')}
          description={t('missionToEmployees.description')}
        />
        <MissionCard
          className='bg-[url("/about-us/mission-to-society.png")] bg-cover'
          title={t('missionToSociety.title')}
          description={t('missionToSociety.description')}
        />
      </div>
    </section>
  )
}
