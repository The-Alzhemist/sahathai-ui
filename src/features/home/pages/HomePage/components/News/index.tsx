import { useTranslations } from 'next-intl'

import { Animation } from '@/components/Animation'
import LatestNewsHomePageList from '@/features/home/pages/HomePage/components/News/LatestNewsHomePageList/LatestNewsHomePageList'

export function News() {
  const t = useTranslations('HomePage.News')

  return (
    <section className='container mt-[83px]'>
      <h2 className='headline-2 text-center text-navy'>{t('title')}</h2>
      <Animation className='mt-[42px] flex flex-wrap justify-center gap-[32px] max-w-[1100px] mx-auto'>
        <LatestNewsHomePageList />
      </Animation>
    </section>
  )
}
