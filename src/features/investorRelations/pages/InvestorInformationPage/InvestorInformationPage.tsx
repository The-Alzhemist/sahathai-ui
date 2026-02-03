'use client'

import { FinancialReports } from '../../components/FinancialReports'

import { CompanyIntroductionVideo } from '../../components/CompanyIntroductionVideo'

import { Menu } from '@/components/Menu'
import StockMarketInformation from '@/features/investorRelations/components/StockMarketInformation/StockMarketInformation'

import { CompanyAdvertiseVideo } from '@/features/investorRelations/components/CompanyAdvertiseVideo'
import { CompanyFactSheet } from '@/features/investorRelations/components/CompanyFactSheet'
import { Background } from '@/components/Background'
import { DoubleQuoteIcon } from '@/components/icons/DoubleQuoteIcon'

import BannerImage from '@/components/Header/components/BannerImage/BannerImage'
import { InvestorInformationPageProps } from '@/features/investorRelations/pages/InvestorInformationPage/interface'
import { AnimatePresence } from 'framer-motion'
import { Animation } from '@/components/Animation'

export async function InvestorInformationPage({
  stockData,
}: InvestorInformationPageProps) {
  return (
    <main className='bg-[#F5f5f5]'>
      <AnimatePresence mode='wait'>
        <Animation key={`about-us-page+${Date.now()}`}>
          <Menu />
          <BannerImage
            mobileImageSrc='/investor-relations/new/investor-banner-mobile-1.webp'
            imageSrc='/investor-relations/new/investor-banner-1.webp'
            alt='investor-banner-1'
          />
          <section className=' w-full  mx-auto   '>
            <section className='w-full space-y-[112px] '>
              <StockMarketInformation stockData={stockData} />
              <FinancialReports />

              <Background className='!my-0'>
                <div className='flex flex-col gap-y-10 bg-modellBgDark/60 py-[100px] px-5'>
                  <CompanyIntroductionVideo />
                  <DoubleQuoteIcon
                    className='text-secondary self-center'
                    width='36'
                    height='17'
                  />
                  <CompanyAdvertiseVideo />
                </div>
              </Background>

              <div className='w-full relative px-5 !mt-0'>
                <div className="absolute opacity-100 inset-0 bottom-0 z-0 bg-[url('/investor-relations/new/investor-relation-contact-bg.webp')] bg-center bg-no-repeat bg-cover" />

                <div className='max-w-[860px]  mx-auto py-[100px] '>
                  <CompanyFactSheet />
                </div>
              </div>
            </section>
          </section>
        </Animation>
      </AnimatePresence>
    </main>
  )
}
