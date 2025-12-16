import { useTranslations } from 'next-intl'

import { InvestorRelationEnum } from '@/enums/investorRelations/InvestorRelationEnum'
import { Animation } from '@/components/Animation'
import { Tabs } from '../../components/Tabs'
import { CodeConductCard } from '../../components/CodeConductCard'
import { Menu } from '@/components/Menu'
import { Banner } from '@/components/Banner'
import SwiperVertical from '@/components/Header/components/BannerSwiper/BannerSwiper'

export function CodeConductPage() {
  const t = useTranslations('CodeConductPage')

  return (
    <main className='bg-white'>
      <Menu />
      {/* <Banner
        imagePath='/about-us/banner.png'
        alt={t('investorRelations')}
        caption={t('title')}
        className='mb-[40px]'
      /> */}
      <SwiperVertical />
      <section className='pb-[176px] max-w-[896px] w-full mx-auto px-5'>
        {/*<Tabs activeMenu={InvestorRelationEnum.CodeConduct} />*/}
        <h2 className='mt-[103px] headline-2 text-center text-blue-400'>
          {t('title')}
        </h2>

        <Animation className='mt-[105px] space-y-[32px]'>
          <CodeConductCard
            title={t('antiCorruptionPolicyTh')}
            fileUrl='https://a.storyblok.com/f/316761/x/2b67784dd9/anti-coruption.pdf'
          />
          <CodeConductCard
            title={t('antiCorruptionPolicyEn')}
            fileUrl='https://a.storyblok.com/f/316761/x/2b67784dd9/anti-coruption.pdf'
          />
        </Animation>
      </section>
    </main>
  )
}
