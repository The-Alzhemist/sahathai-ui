import { useTranslations } from 'next-intl'

import { InvestorRelationEnum } from '@/enums/investorRelations/InvestorRelationEnum'
import { Animation } from '@/components/Animation'
import { Tabs } from '../../components/Tabs'
import { CodeConductCard } from '../../components/CodeConductCard'
import { Menu } from '@/components/Menu'
import { Banner } from '@/components/Banner'
import SwiperVertical from '@/components/Header/components/BannerSwiper/BannerSwiper'
import BannerImage from '@/components/Header/components/BannerImage/BannerImage'

export function CodeConductPage() {
  const t = useTranslations('CodeConductPage')

  return (
    <main className='bg-white'>
      <Menu />
      <BannerImage
        imageSrc='/investor-relations/new/investor-banner-4.webp'
        alt='investor-banner-4'
      />
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
