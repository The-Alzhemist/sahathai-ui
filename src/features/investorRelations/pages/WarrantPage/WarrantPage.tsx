'use client'

import { useTranslations } from 'next-intl'
import { Menu } from '@/components/Menu'

import { WarrantPageProps } from '@/features/investorRelations/pages/WarrantPage/interface'

import BannerImage from '@/components/Header/components/BannerImage/BannerImage'
import { GroupStoryblok } from '@/types/storyblok'
import GroupAccordionTabs from '@/features/investorRelations/components/GroupAccordionTabs/GroupAccordionTabs'
import { useRouter } from '@/libs/intl/navigation'
import { AnimatePresence } from 'framer-motion'
import { Animation } from '@/components/Animation'

export function WarrantPage({ data }: WarrantPageProps) {
  useRouter()
  const tMenu = useTranslations('Menu')

  if (!data) {
    return <div>No data</div>
  }

  const group = (data.story.content.body[0].group as GroupStoryblok[]) || []

  return (
    <main className='pb-[176px] bg-white'>
      <AnimatePresence mode='wait'>
        <Animation key={`warrant-${Date.now()}`}>
          <Menu />
          <BannerImage
            mobileImageSrc='/investor-relations/new/investor-banner-mobile-11.webp'
            imageSrc='/investor-relations/new/investor-banner-11.webp'
            alt='investor-banner-11'
          />
          <section className='px-5 pb-5  pt-[50px] md:pt-[100px] max-w-4xl mx-auto space-y-6'>
            <h1 className='text-lg md:text-3xl mb-10 text-blue-400 text-center'>
              {tMenu('investorRelations.Warrant')}
            </h1>
            <GroupAccordionTabs group={group} pageKey='warrant' />
          </section>
        </Animation>
      </AnimatePresence>
    </main>
  )
}
