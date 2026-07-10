import { useTranslations } from 'next-intl'

import { AboutCard } from '../AboutCard'
import { WhyChooseSahathai } from '@/features/home/pages/HomePage/components/About/component/WhyChooseSahathai/WhyChooseSahathai'
import { BuildingIcon } from '@/components/icons/AboutUsBuildingIcon'
import { ScaleIcon } from '@/components/icons/ScaleIcon'
import { RoadIcon } from '@/components/icons/RoadIcon'
import { ContainerIcon } from '@/components/icons/ContainerIcon'
import { WorldIcon } from '@/components/icons/WorldIcon'
import Image from 'next/image'
import React from 'react'
export function About() {
  const t = useTranslations('HomePage.About')
  const tBanner = useTranslations('HomePage.Banner')

  return (
    <section className='relative w-full'>
      <div className='absolute inset-0 bg-white to-transparent'></div>

      <div className='relative pt-[100px]'>
        <section className='max-w-[1040px] mx-auto flex  flex-col md:flex-row items-center gap-x-2 mb-10'>
          <div className='text-[48px] font-medium'>
            <span className='text-blue-300'>{tBanner('title')}</span>
          </div>
          <div className='text-[32px] font-light text-red-400'>
            {tBanner('subTitle')}
          </div>
        </section>
        <WhyChooseSahathai />
        <div
          className='relative flex justify-center mt-[72px] w-full  z-10 py-[90px] bg-no-repeat bg-cover'
          style={{}}
        >
          <Image
            src='/home/new/container-image.webp'
            alt='Sustainability Background'
            fill
            className='absolute inset-0 z-0 object-cover object-center opacity-100'
            priority
          />
          <div className='max-w-[1040px] flex flex-wrap gap-x-[25px] gap-y-[45px] justify-center'>
            <AboutCard
              title={t('comprehensiveService.title')}
              content={t('comprehensiveService.content')}
              imageUrl='/home/new/sustain-1-2x.webp'
              icon={<BuildingIcon width={'30'} height={'30'} />}
            />
            <AboutCard
              title={t('globalTransportationNetwork.title')}
              content={t('globalTransportationNetwork.content')}
              imageUrl='/home/new/sustain-2-2x.webp'
              icon={<ScaleIcon width={'30'} height={'30'} />}
            />
            <AboutCard
              title={t('worldClassStandards.title')}
              content={t('worldClassStandards.content')}
              imageUrl='/home/new/sustain-3-2x.webp'
              icon={<RoadIcon width={'30'} height={'30'} />}
            />
            <AboutCard
              title={t('convenientLocation.title')}
              content={t('convenientLocation.content')}
              imageUrl='/home/new/sustain-4-2x-new.webp'
              icon={<ContainerIcon width={'30'} height={'30'} />}
            />
            <AboutCard
              title={t('coversAllNeeds.title')}
              content={t('coversAllNeeds.content')}
              imageUrl='/home/new/sustain-5-2x-new.webp'
              icon={<WorldIcon width={'34'} height={'34'} />}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
