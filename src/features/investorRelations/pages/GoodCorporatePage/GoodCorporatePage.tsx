'use client'

import { useTranslations } from 'next-intl'
import { Menu } from '@/components/Menu'

import { GoodCorporatePageProps } from '@/features/investorRelations/pages/GoodCorporatePage/interface'

import BannerImage from '@/components/Header/components/BannerImage/BannerImage'
import { CorporateGovernanceDocumentList } from '@/features/investorRelations/pages/GoodCorporatePage/components/CorporateGovernanceDocumentList'
import { useRouter } from '@/libs/intl/navigation'
import { AnimatePresence } from 'framer-motion'
import { Animation } from '@/components/Animation'
import { useNavigationTick } from '@/context/NavigationTickContext'

export function GoodCorporatePage({ data }: GoodCorporatePageProps) {
  useRouter()
  const tMenu = useTranslations('Menu')
  const { tick } = useNavigationTick()

  return (
    <main className='pb-[176px] bg-white'>
      <AnimatePresence mode='wait'>
        <Animation key={tick}>
          <Menu />

          <BannerImage
            mobileImageSrc='/investor-relations/new/investor-banner-mobile-9.webp'
            imageSrc='/investor-relations/new/investor-banner-9.webp'
            alt='investor-banner-9'
          />

          <section className='px-5 pb-5  pt-[50px] md:pt-[100px] max-w-4xl mx-auto space-y-6'>
            <h1 className='text-lg md:text-3xl mb-10 text-blue-400 text-center'>
              {tMenu('investorRelations.GoodCorporate')}
            </h1>

            <CorporateGovernanceDocumentList
              id={data.id}
              documents={data.documents}
            />
          </section>
        </Animation>
      </AnimatePresence>
    </main>
  )
}
