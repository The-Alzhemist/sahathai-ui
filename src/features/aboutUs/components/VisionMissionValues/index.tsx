import { CoreValues } from '../CoreValues'
import { OurMission } from '../OurMission'
import { Vision } from '../Vision'
import { Slogan } from '../Slogan'
import Image from 'next/image'

export function VisionMissionValues() {
  return (
    <section className='pb-[128px] relative'>
      <Vision />
      <Slogan />
      <OurMission />
      <CoreValues />
      <div className='absolute -z-10 bottom-0 left-0 min-h-[704px] w-full'>
        <Image
          src='/about-us/bg.png'
          alt='About us background'
          fill
          className='object-bottom'
        />
      </div>
    </section>
  )
}
