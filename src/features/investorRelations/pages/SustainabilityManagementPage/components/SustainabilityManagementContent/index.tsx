import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Fragment } from 'react'

import { Animation } from '@/components/Animation'
import { DoubleQuoteIcon } from '@/components/icons/DoubleQuoteIcon'
import { SustainabilityCard } from '@/features/investorRelations/components/SustainabilityCard'
import { EsgRisk } from '../EsgRisk/EsgRisk'
import { EmergingRisk } from '../EmergingRisk/EmergingRisk'
import ESGPolicy from '../ESGPolicy/ESGPolicy'
import { SustainabilityGoal } from '../SustainabilityGoal'

export function SustainabilityManagementContent() {
  const t = useTranslations('SustainabilityManagementPage')

  return (
    <Fragment>
      <section className='relative pt-[-20px] pb-[30px] overflow-hidden'>
        <Image
          src='/investor-relations/new/ir-sustain-bg.webp'
          alt='Sustainability Background'
          fill
          className='absolute inset-0 object-cover object-center z-0'
          priority
        />

        {/* content */}
        <div className='relative z-10 max-w-[950px] mx-auto px-5'>
          <h2 className='flex items-center justify-center md:justify-start gap-2 mt-[30px] md:mt-[70px] headline-2 text-left text-blue-400'>
            <DoubleQuoteIcon className='text-red-400' /> {t('title')}
          </h2>
        </div>

        <Animation className='relative  mt-[50px] mb-[100px] max-w-[950px] mx-auto flex gap-y-5 justify-center md:justify-between flex-wrap'>
          <SustainabilityCard
            title={t('economicDimension.title')}
            descriptions={[t('economicDimension.description')]}
            imagePath='/investor-relations/hand-red.png'
            imgClassName='w-[70px] h-[49px] !mt-[20px]'
          />
          <SustainabilityCard
            title={t('socialDimension.title')}
            descriptions={[
              t('socialDimension.description'),
              t('socialDimension.description2'),
              t('socialDimension.description3'),
            ]}
            imagePath='/investor-relations/people-red.png'
            imgClassName='w-[80px] h-[55px] mt-[15px] '
          />
          <SustainabilityCard
            title={t('environmentalDimension.title')}
            descriptions={[
              t('environmentalDimension.description'),
              t('environmentalDimension.description2'),
              t('environmentalDimension.description3'),
            ]}
            imagePath='/investor-relations/heart-red.png'
            imgClassName='mt-[15px] w-fit h-[60px]'
          />
        </Animation>
      </section>

      <EsgRisk />
      <EmergingRisk />
      <ESGPolicy />
      <SustainabilityGoal />
    </Fragment>
  )
}
