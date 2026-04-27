'use client'

import { useTranslations } from 'next-intl'
import { Menu } from '@/components/Menu'

import BannerImage from '@/components/Header/components/BannerImage/BannerImage'
import { GroupStoryblok, TabStoryblok } from '@/types/storyblok'
import GroupAccordionTabs from '@/features/investorRelations/components/GroupAccordionTabs/GroupAccordionTabs'
import { useRouter } from '@/libs/intl/navigation'
import { AnimatePresence } from 'framer-motion'
import { Animation } from '@/components/Animation'
import { SetExchangeAnnouncementPageProps } from '@/features/investorRelations/pages/SetExchangeAnnouncementPage/interface'

export function SetExchangeAnnouncementPage({
  data,
}: SetExchangeAnnouncementPageProps) {
  useRouter()
  const tMenu = useTranslations('Menu')

  if (!data) {
    return <div>No data</div>
  }

  const group = (data.story.content.body[0].group as GroupStoryblok[]) || []

  return (
    <main className='pb-[176px] bg-white'>
      <AnimatePresence mode='wait'>
        <Animation key={`set-exchange-announcement-${Date.now()}`}>
          <Menu />

          <BannerImage
            mobileImageSrc='/investor-relations/new/investor-banner-mobile-9.webp'
            imageSrc='/investor-relations/new/investor-banner-9.webp'
            alt='investor-banner-9'
          />

          <section className='px-5 pb-5  pt-[50px] md:pt-[100px] max-w-4xl mx-auto space-y-6'>
            <h1 className='text-lg md:text-3xl mb-10 text-blue-400 text-center'>
              {tMenu('investorRelations.SetExchangeAnnouncement')}
            </h1>

            <GroupAccordionTabs
              pageKey='set-exchange-announcement'
              group={group}
            />
          </section>
        </Animation>
      </AnimatePresence>
    </main>
  )
}
