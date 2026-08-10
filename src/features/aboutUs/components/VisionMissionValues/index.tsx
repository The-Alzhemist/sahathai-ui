import { CoreValues } from '../CoreValues'
import { OurMission } from '../OurMission'
import { Vision } from '../Vision'
import Image from 'next/image'

export function VisionMissionValues() {
  return (
    <section className='pb-[128px] relative'>
      <Vision />
      <OurMission />
      <CoreValues />
      <div className='absolute -z-10 bottom-0 left-0 h-[704px] w-full'>
        <Image
          src='/about-us/new/our-mission-bg.webp'
          alt='our-mission-bg'
          fill
          className='object-bottom'
        />
      </div>
    </section>
  )
}
