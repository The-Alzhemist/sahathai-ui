'use client'

import { useTranslations } from 'next-intl'
import { Menu } from '@/components/Menu'

import { FinancialInformationPageProps } from '@/features/investorRelations/pages/FinancialInformationPage/interface'

import BannerImage from '@/components/Header/components/BannerImage/BannerImage'
import { FinancialInformationAccordion } from '@/features/investorRelations/pages/FinancialInformationPage/components/FinancialInformationAccordion'
import { useRouter } from '@/libs/intl/navigation'

import { AnimatePresence } from 'framer-motion'
import { Animation } from '@/components/Animation'
import { useNavigationTick } from '@/context/NavigationTickContext'

export function FinancialInformationPage({
  financialInformationData,
}: FinancialInformationPageProps) {
  useRouter()

  const tMenu = useTranslations('Menu')
  const { tick } = useNavigationTick()

  return (
    <main className='pb-[176px] bg-white'>
      <AnimatePresence mode='wait'>
        <Animation key={tick}>
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
            <FinancialInformationAccordion data={financialInformationData} />
          </section>
        </Animation>
      </AnimatePresence>
    </main>
  )
}
