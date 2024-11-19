import { CoreValues } from '../CoreValues'
import { OurMission } from '../OurMission'
import { Vision } from '../Vision'
import { Slogan } from '../Slogan'

export function VisionMissionValues() {
  return (
    <section className='mb-[128px]'>
      <Vision />
      <Slogan />
      <OurMission />
      <CoreValues />
    </section>
  )
}
