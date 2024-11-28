import { useTranslations } from 'next-intl'

import { MissionCard } from '../MissionCard'

export function OurMission() {
  const t = useTranslations('AboutUsPage.VisionMissionValues.OurMission')

  return (
    <section className='mt-[80px] max-w-[930px] w-full mx-auto'>
      <h2 className='text-[40px] leading-[60.48px] font-[500] text-navy prompt text-center'>
        {t('title')}
      </h2>
      <div className='mt-[50px] flex flex-col  md:flex-row  items-center  justify-center flex-wrap  gap-x-5 gap-y-7 md:gap-x-6 md:gap-y-6 px-5 md:px-2'>
        <MissionCard
          imageUrl='/about-us/mission-to-customers.png'
          title={t('missionToCustomers.title')}
          content={t('missionToCustomers.content')}
        />
        <MissionCard
          imageUrl='/about-us/mission-to-shareholders.png'
          title={t('missionToShareholders.title')}
          content={t('missionToShareholders.content')}
        />
        <MissionCard
          imageUrl='/about-us/mission-to-employees.png'
          title={t('missionToEmployees.title')}
          content={t('missionToEmployees.content')}
        />
        <MissionCard
          imageUrl='/about-us/mission-to-society.png'
          title={t('missionToSociety.title')}
          content={t('missionToSociety.content')}
        />
      </div>
    </section>
  )
}
