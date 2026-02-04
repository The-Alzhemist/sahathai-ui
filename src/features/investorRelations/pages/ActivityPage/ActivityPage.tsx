'use client'

import { useTranslations } from 'next-intl'
import { Menu } from '@/components/Menu'

import { ActivityPageProps } from '@/features/investorRelations/pages/ActivityPage/interface'

import BannerImage from '@/components/Header/components/BannerImage/BannerImage'
import { GroupStoryblok, TabStoryblok } from '@/types/storyblok'
import GroupAccordionTabs from '@/features/investorRelations/components/GroupAccordionTabs/GroupAccordionTabs'
import { useRouter } from '@/libs/intl/navigation'

import { AnimatePresence } from 'framer-motion'
import { Animation } from '@/components/Animation'
export function ActivityPage({ data }: ActivityPageProps) {
  useRouter()
  const tMenu = useTranslations('Menu')

  if (!data) {
    return <div>No data</div>
  }

  const group = (data.story.content.body[0].group as GroupStoryblok[]) || []

  return (
    <main className='pb-[176px] bg-white'>
      <AnimatePresence mode='wait'>
        <Animation key={`good-corporate-${Date.now()}`}>
          <Menu />
          <BannerImage
            mobileImageSrc='/investor-relations/new/investor-banner-mobile-10.webp'
            imageSrc='/investor-relations/new/investor-banner-10.webp'
            alt='investor-banner-10'
          />

          <section className='px-5 pb-5  pt-[50px] md:pt-[100px] max-w-4xl mx-auto space-y-6'>
            <h1 className='text-lg md:text-3xl mb-7 text-blue-400 text-center'>
              {tMenu('investorRelations.Activity')}
            </h1>
            <GroupAccordionTabs group={group} pageKey='activity' />
          </section>
        </Animation>
      </AnimatePresence>
    </main>
  )
}
