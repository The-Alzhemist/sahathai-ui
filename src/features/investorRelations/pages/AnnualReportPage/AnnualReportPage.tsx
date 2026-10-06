'use client'

import { Menu } from '@/components/Menu'
import { Animation } from '@/components/Animation'
import BannerImage from '@/components/Header/components/BannerImage/BannerImage'
import { AnimatePresence } from 'framer-motion'
import { useNavigationTick } from '@/context/NavigationTickContext'
import { FinancialReports } from '@/features/investorRelations/components/FinancialReports'
import { AnnualReport } from '@/types/AnnualReport'

export function AnnualReportPage({ data }: { data: AnnualReport[] }) {
  const { tick } = useNavigationTick()

  return (
    <main className='bg-white'>
      <AnimatePresence mode='wait'>
        <Animation key={tick}>
          <Menu />

          <BannerImage
            mobileImageSrc='/investor-relations/new/investor-banner-mobile-1.webp'
            imageSrc='/investor-relations/new/investor-banner-1.webp'
            alt='investor-banner-1'
          />

          <section className='max-w-[1100px] w-full mx-auto py-[60px] px-3'>
            <FinancialReports data={data} />
          </section>
        </Animation>
      </AnimatePresence>
    </main>
  )
}
