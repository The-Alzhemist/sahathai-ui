'use client'

import { useTranslations } from 'next-intl'
import { Menu } from '@/components/Menu'

import { ActivityPageProps } from '@/features/investorRelations/pages/ActivityPage/interface'

import BannerImage from '@/components/Header/components/BannerImage/BannerImage'
import { InvestorActivityAccordion } from '@/features/investorRelations/pages/ActivityPage/components/InvestorActivityAccordion'
import { useRouter } from '@/libs/intl/navigation'

import { AnimatePresence } from 'framer-motion'
import { Animation } from '@/components/Animation'
import { useNavigationTick } from '@/context/NavigationTickContext'

export function ActivityPage({ data }: ActivityPageProps) {
  useRouter()
  const tMenu = useTranslations('Menu')
  const { tick } = useNavigationTick()

  return (
    <main className='pb-[176px] bg-white'>
      <AnimatePresence mode='wait'>
        <Animation key={tick}>
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
            <InvestorActivityAccordion data={data} />
          </section>
        </Animation>
      </AnimatePresence>
    </main>
  )
}
