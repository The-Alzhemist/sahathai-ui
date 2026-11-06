import { useTranslations } from 'next-intl'

import { MissionCard } from '../MissionCard'
import { Line } from '@/components/Line'
import { getStrapiImageUrl } from '@/libs/util'
import { MissionCard as MissionCardType } from '@/types/VisionMission'

export function OurMission({ missions }: { missions: MissionCardType[] }) {
  const t = useTranslations('AboutUsPage.VisionMissionValues.OurMission')

  if (!missions.length) return null

  return (
    <section className='mt-[80px] max-w-[930px] w-full mx-auto'>
      <h2 className='text-[40px] leading-[60.48px] font-[500] text-navy prompt text-center'>
        {t('title')}
      </h2>
      <div className='flex justify-center'>
        <Line className='mt-[14px]' />
      </div>
      <div className='mt-[50px] flex flex-col  md:flex-row  items-center  justify-center flex-wrap  gap-x-5 gap-y-7 md:gap-x-6 md:gap-y-6 px-5 md:px-2'>
        {missions.map(mission => (
          <MissionCard
            key={mission.id}
            imageUrl={mission.image ? getStrapiImageUrl(mission.image.url) : ''}
            title={mission.title}
            content={mission.description}
          />
        ))}
      </div>
    </section>
  )
}
