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
  const tBanner = useTranslations('HomePage.Banner')

  return (
    <section
      className="relative w-full"

    >
      {/* Optional overlay เพื่อให้อ่านการ์ดง่ายขึ้น */}
      <div className="absolute inset-0 bg-white to-transparent"></div>

      <div className="relative">
        <section className="max-w-[1040px] mx-auto flex  flex-col md:flex-row items-center gap-x-2 mb-10">
          <div className='text-[48px] font-medium'><span className='text-blue-300'>{tBanner('title')}</span></div>
          <div className='text-[32px] font-light text-red-400'>{tBanner('subTitle')}</div>
        </section>
        <WhyChooseSahathai />
        <div className=" flex   justify-center mt-[72px] w-full relative z-10 py-[90px] bg-no-repeat bg-cover"  style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.3)), url('/home/container-image.png')`,
        }}>

          <div className='max-w-[1040px] flex flex-wrap gap-x-[25px] gap-y-[45px] justify-center'>
            <AboutCard
              title={t('comprehensiveService.title')}
              content={t('comprehensiveService.content')}
              imageUrl="/home/comprehensive-service.png"
              icon={<BuildingIcon width={'30'} height={'30'} />}
            />
            <AboutCard
              title={t('globalTransportationNetwork.title')}
              content={t('globalTransportationNetwork.content')}
              imageUrl="/home/global-transportation-network.png"
              icon={<ScaleIcon width={'30'} height={'30'} />}
            />
            <AboutCard
              title={t('worldClassStandards.title')}
              content={t('worldClassStandards.content')}
              imageUrl="/home/world-class-standards.png"
              icon={<RoadIcon width={'30'} height={'30'} />}
            />
            <AboutCard
              title={t('convenientLocation.title')}
              content={t('convenientLocation.content')}
              imageUrl="/home/convenient-location.png"
              icon={<ContainerIcon width={'30'} height={'30'} />}
            />
            <AboutCard
              title={t('coversAllNeeds.title')}
              content={t('coversAllNeeds.content')}
              imageUrl="/home/covers-all-needs.png"
              icon={<WorldIcon width={'34'} height={'34'} />}
            />
          </div>

        </div>
      </div>
    </section>

  )
}
