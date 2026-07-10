'use client'

import { useTranslations } from 'next-intl'
import { ShareHolderMeetingPageProps } from '@/features/investorRelations/pages/ShareHolderMeetingPage/interface'
import { Menu } from '@/components/Menu'

import BannerImage from '@/components/Header/components/BannerImage/BannerImage'
import { GroupStoryblok } from '@/types/storyblok'
import GroupAccordionTabs from '@/features/investorRelations/components/GroupAccordionTabs/GroupAccordionTabs'
import { AnimatePresence } from 'framer-motion'

import { Animation } from '@/components/Animation'
import { useRouter } from '@/libs/intl/navigation'

export function ShareHolderMeetingPage({
  shareHolderMeetingData,
}: ShareHolderMeetingPageProps) {
  useRouter()
  const tMenu = useTranslations('Menu')

  if (!shareHolderMeetingData) {
    return <div>No data</div>
  }

  const group =
    (shareHolderMeetingData.story.content.body[0].group as GroupStoryblok[]) ||
    []

  return (
    <main className='pb-[176px] bg-white'>
      <AnimatePresence mode='wait'>
        <Animation key={`code-of-conduct-${Date.now()}`}>
          <Menu />
          <BannerImage
            mobileImageSrc='/investor-relations/new/investor-banner-mobile-5.webp'
            imageSrc='/investor-relations/new/investor-banner-5.webp'
            alt='investor-banner-5'
          />

          <section className='px-5 pb-5  pt-[50px] md:pt-[100px] max-w-4xl mx-auto space-y-6'>
            <h1 className='text-lg md:text-3xl mb-7 text-blue-400 text-center'>
              {tMenu('investorRelations.shareHolderMeeting')}
            </h1>
            <GroupAccordionTabs pageKey='share-holder-meeting' group={group} />
          </section>
        </Animation>
      </AnimatePresence>
    </main>
  )
}
