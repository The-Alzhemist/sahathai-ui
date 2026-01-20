import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { SustainabilityCard } from '../../components/SustainabilityCard'

import { Animation } from '@/components/Animation'
import { Menu } from '@/components/Menu'
import { Banner } from '@/components/Banner'

import { DoubleQuoteIcon } from '@/components/icons/DoubleQuoteIcon'
import { EsgRisk } from '@/features/investorRelations/pages/SustainabilityManagementPage/components/EsgRisk/EsgRisk'
import { EmergingRisk } from '@/features/investorRelations/pages/SustainabilityManagementPage/components/EmergingRisk/EmergingRisk'
import ESGPolicy from '@/features/investorRelations/pages/SustainabilityManagementPage/components/ESGPolicy/ESGPolicy'
import SwiperVertical from '@/components/Header/components/BannerSwiper/BannerSwiper'
import BannerImage from '@/components/Header/components/BannerImage/BannerImage'

export function SustainabilityManagementPage() {
  const t = useTranslations('SustainabilityManagementPage')
  return (
    <main className=''>
      <Menu />

      <BannerImage
        mobileImageSrc='/investor-relations/new/investor-banner-mobile-2.webp'
        imageSrc='/investor-relations/new/investor-banner-2.webp'
        alt='investor-banner-2'
      />
      {/*<Tabs activeMenu={InvestorRelationEnum.SustainabilityManagement} />*/}
      <section className='relative pt-[-20px] pb-[30px] overflow-hidden'>
        {/* background image */}
        <Image
          src='/investor-relations/new/ir-sustain-bg.webp'
          alt='Sustainability Background'
          fill
          className='absolute inset-0 object-cover object-center z-0'
          priority
        />

        {/* content */}
        <div className='relative z-10 max-w-[950px] mx-auto px-5'>
          <h2 className='flex items-center justify-center md:justify-start gap-2 mt-[30px] md:mt-[70px] headline-2 text-left text-blue-400'>
            <DoubleQuoteIcon className='text-red-400' /> {t('title')}
          </h2>
        </div>

        <Animation className='relative z-10 mt-[50px] mb-[100px] max-w-[950px] mx-auto flex gap-y-5 justify-center md:justify-between flex-wrap'>
          <SustainabilityCard
            title={t('economicDimension.title')}
            descriptions={[t('economicDimension.description')]}
            imagePath='/investor-relations/hand-red.png'
            imgClassName='w-[70px] h-[49px] !mt-[20px]'
          />
          <SustainabilityCard
            title={t('socialDimension.title')}
            descriptions={[
              t('socialDimension.description'),
              t('socialDimension.description2'),
              t('socialDimension.description3'),
            ]}
            imagePath='/investor-relations/people-red.png'
            imgClassName='w-[80px] h-[55px] mt-[15px] '
          />
          <SustainabilityCard
            title={t('environmentalDimension.title')}
            descriptions={[
              t('environmentalDimension.description'),
              t('environmentalDimension.description2'),
              t('environmentalDimension.description3'),
            ]}
            imagePath='/investor-relations/heart-red.png'
            imgClassName='mt-[15px] w-fit h-[60px]'
          />
        </Animation>
      </section>

      <EsgRisk />
      <EmergingRisk />
      <ESGPolicy />

      <section className='space-y-[40px] py-[88px] bg-white'>
        <Animation className='max-w-[960px] w-full mx-auto'>
          <div className='relative pt-[86.88%] w-full '>
            <Image src='/investor-relations/sustainable-1.png' alt='' fill />
          </div>
        </Animation>
        <Animation className='max-w-[969px] w-full mx-auto'>
          <div className='relative pt-[49.85%] w-full'>
            <Image
              src='/investor-relations/sustainable-2.jpeg'
              alt='sustainable image 2'
              fill
            />
          </div>
        </Animation>
        <Animation className='max-w-[965px] w-full mx-auto'>
          <div className='relative pt-[95.03%] w-full'>
            <Image
              src='/investor-relations/sustainable-3.png'
              alt='sustainable image 3'
              fill
            />
          </div>
        </Animation>
      </section>
    </main>
  )
}
