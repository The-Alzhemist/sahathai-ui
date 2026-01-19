import { useTranslations } from 'next-intl'
import { Animation } from '@/components/Animation'

import { CodeConductCard } from '../../components/CodeConductCard'
import { Menu } from '@/components/Menu'

import SwiperVertical from '@/components/Header/components/BannerSwiper/BannerSwiper'
import { TrackingService } from '@/features/investorRelations/pages/EServicePage/component/TrackingService/TrackingService'

export function EServicePage() {
  const t = useTranslations('EServicePage')

  return (
    <main className='bg-white'>
      <Menu />
      <SwiperVertical />
      <section className=' max-w-[1120px] w-full mx-auto px-5'>
        <h2 className='mt-[100px] md:mt-[50px]  headline-2 text-center text-blue-400'>
          {t('Title')}
        </h2>
        <p className='mt-[15px] body-1 text-center text-black-6'>
          {t('Description')}
        </p>
      </section>
      <TrackingService />
    </main>
  )
}
