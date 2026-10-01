'use client'

import { useTranslations } from 'next-intl'
import { ShareHolderMeetingPageProps } from '@/features/investorRelations/pages/ShareHolderMeetingPage/interface'
import { Menu } from '@/components/Menu'

import BannerImage from '@/components/Header/components/BannerImage/BannerImage'
import { ShareHolderMeetingAccordion } from '@/features/investorRelations/pages/ShareHolderMeetingPage/components/ShareHolderMeetingAccordion'
import { AnimatePresence } from 'framer-motion'

import { Animation } from '@/components/Animation'
import { useRouter } from '@/libs/intl/navigation'
import { useNavigationTick } from '@/context/NavigationTickContext'

export function ShareHolderMeetingPage({
  shareHolderMeetingData,
}: ShareHolderMeetingPageProps) {
  useRouter()
  const tMenu = useTranslations('Menu')
  const { tick } = useNavigationTick()

  return (
    <main className='pb-[176px] bg-white'>
      <AnimatePresence mode='wait'>
        <Animation key={tick}>
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
            <ShareHolderMeetingAccordion data={shareHolderMeetingData} />
          </section>
        </Animation>
      </AnimatePresence>
    </main>
  )
}
