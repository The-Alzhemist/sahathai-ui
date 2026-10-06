'use client'

import { useTranslations } from 'next-intl'
import { Menu } from '@/components/Menu'

import { DocumentAnnouncementPageProps } from '@/features/investorRelations/pages/DocumentAnnouncementPage/interface'

import BannerImage from '@/components/Header/components/BannerImage/BannerImage'
import { PublishedDocumentAccordion } from '@/features/investorRelations/pages/DocumentAnnouncementPage/components/PublishedDocumentAccordion'
import { AnimatePresence } from 'framer-motion'
import { Animation } from '@/components/Animation'
import { useNavigationTick } from '@/context/NavigationTickContext'

export function DocumentAnnouncementPage({
  data,
}: DocumentAnnouncementPageProps) {
  const tMenu = useTranslations('Menu')
  const { tick } = useNavigationTick()

  return (
    <main className='pb-[176px] bg-white'>
      <AnimatePresence mode='wait'>
        <Animation key={tick}>
          <Menu />
          <BannerImage
            mobileImageSrc='/investor-relations/new/investor-banner-mobile-8.webp'
            imageSrc='/investor-relations/new/investor-banner-8.webp'
            alt='investor-banner-8'
          />

          <section className='px-5 pb-5  pt-[50px] md:pt-[100px] max-w-4xl mx-auto space-y-6'>
            <h1 className='text-lg md:text-3xl mb-10 text-blue-400 text-center'>
              {tMenu('investorRelations.DocumentAnnouncement')}
            </h1>

            <PublishedDocumentAccordion data={data} />
          </section>
        </Animation>
      </AnimatePresence>
    </main>
  )
}
