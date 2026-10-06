'use client'

import { useTranslations } from 'next-intl'
import { Menu } from '@/components/Menu'

import BannerImage from '@/components/Header/components/BannerImage/BannerImage'
import { SetAnnouncementAccordion } from '@/features/investorRelations/pages/SetExchangeAnnouncementPage/components/SetAnnouncementAccordion'
import { useRouter } from '@/libs/intl/navigation'
import { AnimatePresence } from 'framer-motion'
import { Animation } from '@/components/Animation'
import { SetExchangeAnnouncementPageProps } from '@/features/investorRelations/pages/SetExchangeAnnouncementPage/interface'
import { useNavigationTick } from '@/context/NavigationTickContext'

export function SetExchangeAnnouncementPage({
  data,
}: SetExchangeAnnouncementPageProps) {
  useRouter()
  const tMenu = useTranslations('Menu')
  const { tick } = useNavigationTick()

  return (
    <main className='pb-[176px] bg-white'>
      <AnimatePresence mode='wait'>
        <Animation key={tick}>
          <Menu />

          <BannerImage
            mobileImageSrc='/investor-relations/new/set-banner-3x.webp'
            imageSrc='/investor-relations/new/set-banner-3x.webp'
            alt='set-banner-3x'
          />

          <section className='px-5 pb-5  pt-[50px] md:pt-[100px] max-w-4xl mx-auto space-y-6'>
            <h1 className='text-lg md:text-3xl mb-10 text-blue-400 text-center'>
              {tMenu('investorRelations.SetExchangeAnnouncement')}
            </h1>

            <SetAnnouncementAccordion data={data} />
          </section>
        </Animation>
      </AnimatePresence>
    </main>
  )
}
