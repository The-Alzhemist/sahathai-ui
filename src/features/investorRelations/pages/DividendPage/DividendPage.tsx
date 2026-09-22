'use client'

import { useTranslations } from 'next-intl'
import { AnimatePresence } from 'framer-motion'

import { Menu } from '@/components/Menu'
import { Animation } from '@/components/Animation'
import BannerImage from '@/components/Header/components/BannerImage/BannerImage'
import { useNavigationTick } from '@/context/NavigationTickContext'
import DividendPolicy from '@/features/investorRelations/pages/DividendPage/components/DividendPolicy/DividendPolicy'

export function DividendPage() {
  const t = useTranslations('InvestorInformationPage.Shareholder')
  const { tick } = useNavigationTick()

  return (
    <main className='bg-gradient-to-b from-[#F5F5F5] to-[#EBF5FD]'>
      <AnimatePresence mode='wait'>
        <Animation key={tick}>
          <Menu />

          <BannerImage
            mobileImageSrc='/investor-relations/new/investor-banner-mobile-3.webp'
            imageSrc='/investor-relations/new/investor-banner-3.webp'
            alt='investor-banner-3'
          />

          <Animation>
            <h2
              className='headline-2 text-black-80 mb-5 text-center text-navy pt-[80px]'
            >
              {t('profit.title')}
            </h2>
            <DividendPolicy />

            <div className="h-[300px] md:h-[560px] -mt-10 bg-[url('/investor-relations/new/dividend-footer-bg.webp')] bg-cover bg-bottom mix-blend-multiply [mask-image:linear-gradient(to_bottom,transparent,black_40%)]" />
          </Animation>
        </Animation>
      </AnimatePresence>
    </main>
  )
}
