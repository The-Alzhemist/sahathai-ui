import { useTranslations } from 'next-intl'
import { MissionCard } from '../MissionCard'

export function OurMission() {
  const t = useTranslations('VisionMissionValuesPage.OurMission')

  return (
    <section className='py-[80px]'>
      <h2 className='font-[700] text-[36px] leading-[44px] text-center'>
        {t('title')}
      </h2>
      <div className='mt-[40px] max-w-[1084px] w-full mx-auto flex flex-wrap gap-[40px]'>
        <MissionCard
          title={t('missionToCustomers.title')}
          description={t('missionToCustomers.description')}
        />
        <MissionCard
          title={t('missionToShareholders.title')}
          description={t('missionToShareholders.description')}
        />
        <MissionCard
          title={t('missionToEmployees.title')}
          description={t('missionToEmployees.description')}
        />
        <MissionCard
          title={t('missionToSociety.title')}
          description={t('missionToSociety.description')}
        />
      </div>
    </section>
  )
}
