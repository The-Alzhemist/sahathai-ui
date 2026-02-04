'use client'

import { useTranslations } from 'next-intl'
import { Menu } from '@/components/Menu'

import { PerformanceReportPageProps } from '@/features/investorRelations/pages/PerformanceReportPage/interface'

import BannerImage from '@/components/Header/components/BannerImage/BannerImage'
import { GroupStoryblok, TabStoryblok } from '@/types/storyblok'
import GroupAccordionTabs from '@/features/investorRelations/components/GroupAccordionTabs/GroupAccordionTabs'
import { useRouter } from '@/libs/intl/navigation'

import { AnimatePresence } from 'framer-motion'

import { Animation } from '@/components/Animation'

export function PerformanceReportPage({
  performanceReportData,
}: PerformanceReportPageProps) {
  useRouter()
  const tMenu = useTranslations('Menu')

  if (!performanceReportData) {
    return <div>No data</div>
  }

  const group =
    (performanceReportData.story.content.body[0].group as GroupStoryblok[]) ||
    []

  return (
    <main className='pb-[176px] bg-white'>
      <AnimatePresence mode='wait'>
        <Animation key={`financial-information-${Date.now()}`}>
          <Menu />

          <BannerImage
            mobileImageSrc='/investor-relations/new/investor-banner-mobile-7.webp'
            imageSrc='/investor-relations/new/investor-banner-7.webp'
            alt='investor-banner-7'
          />

          <section className='px-5 pb-5  pt-[50px] md:pt-[100px] max-w-4xl mx-auto space-y-6'>
            <h1 className='text-lg md:text-3xl mb-7 text-blue-400 text-center'>
              {tMenu('investorRelations.PerformanceReport')}
            </h1>

            <div className='space-y-4'>
              <GroupAccordionTabs group={group} pageKey='performance-report' />
            </div>
          </section>
        </Animation>
      </AnimatePresence>
    </main>
  )
}
