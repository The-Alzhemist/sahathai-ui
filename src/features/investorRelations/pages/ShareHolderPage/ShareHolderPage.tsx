'use client'

import { useTranslations } from 'next-intl'
import { Menu } from '@/components/Menu'

import { Animation } from '@/components/Animation'
import { InvestorInformationEnum } from '@/enums/investorRelations/InvestorInformationEnum'

import { Link } from '@/libs/intl/navigation'
import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon'

import ShareHolderFreeFloatTable from '@/features/investorRelations/pages/ShareHolderPage/components/ShareHolderFreeFloatTable/ShareHolderFreeFloatTable'
import ShareHolderOverviewTable from '@/features/investorRelations/pages/ShareHolderPage/components/ShareHolderOverviewTable/ShareHolderOverviewTable'

import { InvestorInformationTable } from '@/features/investorRelations/pages/ShareHolderPage/components/InvestorInformationTable/InvestorInformationTable'
import Image from 'next/image'

import BannerImage from '@/components/Header/components/BannerImage/BannerImage'
import { AnimatePresence } from 'framer-motion'
import { useNavigationTick } from '@/context/NavigationTickContext'

export function ShareHolderPage() {
  const t = useTranslations('InvestorInformationPage.Shareholder')

  const { tick } = useNavigationTick()

  return (
    <main className='bg-white'>
      <AnimatePresence mode='wait'>
        <Animation key={tick}>
          <Menu />

          <BannerImage
            mobileImageSrc='/investor-relations/new/investor-banner-mobile-3.webp'
            imageSrc='/investor-relations/new/investor-banner-3.webp'
            alt='investor-banner-3'
          />
          <section className='relative w-full mx-auto'>
            <section>
              <Animation>
                <section className='relative'>
                  {/* Background image */}
                  <Image
                    src='/investor-relations/stock-bg.webp'
                    alt='Sustainability Background'
                    fill
                    className='absolute inset-0 object-cover object-center z-0'
                    priority
                  />

                  {/* Overlay content wrapper */}
                  <div className='relative z-0 space-y-[50px] px-3 '>
                    <h2
                      id={InvestorInformationEnum.Shareholder}
                      className='headline-2 text-black-80 text-center text-navy pt-[60px]'
                    >
                      {t('title')}
                    </h2>

                    <Link
                      className=' w-full text-blue-400 subtitle-1 flex items-center justify-center  gap-[9px] !mt-5'
                      href='https://www.set.or.th/th/market/product/stock/quote/PORT/major-shareholders'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {t('stockDistribution')}
                      <ArrowRightIcon width='16' height='16' />
                    </Link>

                    <ShareHolderFreeFloatTable />
                    <ShareHolderOverviewTable />
                    <div className='pb-[100px] overflow-x-auto'>
                      <InvestorInformationTable />
                    </div>
                  </div>
                </section>

                <Link
                  href='/investor-information/dividend'
                  className='relative block w-full h-[200px] md:h-[300px] overflow-hidden hover:opacity-90 transition-opacity'
                >
                  <Image
                    src='/investor-relations/new/dividend-link-banner.webp'
                    alt={t('profit.title')}
                    fill
                    className='object-cover object-right'
                  />
                </Link>
              </Animation>
            </section>
          </section>
        </Animation>
      </AnimatePresence>
    </main>
  )
}
