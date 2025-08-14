import { useTranslations } from 'next-intl'

import { AboutCard } from '../AboutCard'
import { SahathaiText } from '@/components/SahathaiText'
import styles from './ford.module.scss';
import {
  WhyChooseSahathai
} from '@/features/home/pages/HomePage/components/About/component/WhyChooseSahathai/WhyChooseSahathai'
import { BuildingIcon } from '@/components/icons/AboutUsBuildingIcon'
import { ScaleIcon } from '@/components/icons/ScaleIcon'
import { RoadIcon } from '@/components/icons/RoadIcon'
import { ContainerIcon } from '@/components/icons/ContainerIcon'
import { WorldIcon } from '@/components/icons/WorldIcon'
export function About() {
  const t = useTranslations('HomePage.About')

  return (
    <section
      className="relative w-full"

    >
      {/* Optional overlay เพื่อให้อ่านการ์ดง่ายขึ้น */}
      <div className="absolute inset-0 bg-white to-transparent"></div>

      <div className="relative"  >
        <WhyChooseSahathai />
        <div className=" flex   justify-center mt-[72px] w-full relative z-10 py-[90px] bg-no-repeat bg-cover"  style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.3)), url('/home/container-image.png')`,
        }}>

          <div className='max-w-[1040px] flex flex-wrap gap-x-[25px] gap-y-[45px] justify-center'>
            <AboutCard
              title={t('comprehensiveService.title')}
              content={t('comprehensiveService.content')}
              imageUrl="/home/comprehensive-service.png"
              icon={<BuildingIcon/>}
            />
            <AboutCard
              title={t('globalTransportationNetwork.title')}
              content={t('globalTransportationNetwork.content')}
              imageUrl="/home/global-transportation-network.png"
              icon={<ScaleIcon/>}
            />
            <AboutCard
              title={t('worldClassStandards.title')}
              content={t('worldClassStandards.content')}
              imageUrl="/home/world-class-standards.png"
              icon={<RoadIcon/>}
            />
            <AboutCard
              title={t('convenientLocation.title')}
              content={t('convenientLocation.content')}
              imageUrl="/home/convenient-location.png"
              icon={<ContainerIcon/>}
            />
            <AboutCard
              title={t('coversAllNeeds.title')}
              content={t('coversAllNeeds.content')}
              imageUrl="/home/covers-all-needs.png"
              icon={<WorldIcon className='w-[20px] h-[20px]'/>}
            />
          </div>

        </div>
      </div>
    </section>

  )
}
