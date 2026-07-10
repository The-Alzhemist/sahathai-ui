'use client'

import { useTranslations } from 'next-intl'
import { Menu } from '@/components/Menu'

import { FinancialInformationPageProps } from '@/features/investorRelations/pages/FinancialInformationPage/interface'

import BannerImage from '@/components/Header/components/BannerImage/BannerImage'
import { GroupStoryblok } from '@/types/storyblok'
import GroupAccordionTabs from '@/features/investorRelations/components/GroupAccordionTabs/GroupAccordionTabs'
import { useRouter } from '@/libs/intl/navigation'

import { AnimatePresence } from 'framer-motion'
import { Animation } from '@/components/Animation'

export function FinancialInformationPage({
  financialInformationData,
}: FinancialInformationPageProps) {
  useRouter()

  const tMenu = useTranslations('Menu')

  if (!financialInformationData) {
    return <div>No data</div>
  }

  const group =
    (financialInformationData.story.content.body[0]
      .group as GroupStoryblok[]) || []

  return (
    <main className='pb-[176px] bg-white'>
      <AnimatePresence mode='wait'>
        <Animation key={`financial-information-${Date.now()}`}>
          <Menu />
          <BannerImage
            mobileImageSrc='/investor-relations/new/investor-banner-mobile-6.webp'
            imageSrc='/investor-relations/new/investor-banner-6.webp'
            alt='investor-banner-6'
          />

          <section className='px-5 pb-5  pt-[50px] md:pt-[100px] max-w-4xl mx-auto space-y-6'>
            <h1 className='text-lg md:text-3xl mb-1 md:mb-10 text-blue-400 text-center'>
              {tMenu('investorRelations.FinancialInformation')}
            </h1>
            {group.map((groupItem: GroupStoryblok, groupIndex: number) => (
              <div key={groupIndex} className=' rounded-md px-0 py-0 md:p-4'>
                <h2 className='   text-left text-lg mb-7 text-blue-400 '>
                  {groupItem.heading}
                </h2>

                <div className='space-y-4'>
                  <GroupAccordionTabs
                    pageKey='financial-information'
                    group={group}
                  />
                </div>
              </div>
            ))}
          </section>
        </Animation>
      </AnimatePresence>
    </main>
  )
}
