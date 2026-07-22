import { useTranslations } from 'next-intl'

import { Menu } from '@/components/Menu'

import SwiperVertical from '@/components/Header/components/SwiperVertical'
import { TrackingService } from '@/features/investorRelations/pages/EServicePage/component/TrackingService/TrackingService'
import { EServicePageProps } from '@/app/[locale]/e-service/interface'
import { AnimatePresence } from 'framer-motion'
import { Animation } from '@/components/Animation'
import { useNavigationTick } from '@/context/NavigationTickContext'

export function EServicePage({ data }: EServicePageProps) {
  const t = useTranslations('EServicePage')

  const { tick } = useNavigationTick()

  return (
    <main className='bg-white'>
      <AnimatePresence mode='wait'>
        <Animation key={tick}>
          <Menu />
          <SwiperVertical />
          <section className=' max-w-[1120px] w-full mx-auto px-5'>
            <h2 className='mt-[100px] headline-2 text-center text-blue-400'>
              {t('Title')}
            </h2>
            <p className='mt-[15px] body-1 text-center text-black-6'>
              {t('Description')}
            </p>
          </section>
          <TrackingService data={data} />
        </Animation>
      </AnimatePresence>
    </main>
  )
}
