import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { SustainabilityCard } from '../../components/SustainabilityCard'

import { Animation } from '@/components/Animation'
import { Menu } from '@/components/Menu'
import { Banner } from '@/components/Banner'


import { DoubleQuoteIcon } from '@/components/icons/DoubleQuoteIcon'
import { EsgRisk } from '@/features/investorRelations/pages/SustainabilityManagementPage/components/EsgRisk/EsgRisk'
import {
  EmergingRisk
} from '@/features/investorRelations/pages/SustainabilityManagementPage/components/EmergingRisk/EmergingRisk'
import ESGPolicy from '@/features/investorRelations/pages/SustainabilityManagementPage/components/ESGPolicy/ESGPolicy'


export function SustainabilityManagementPage() {
  const t = useTranslations('SustainabilityManagementPage')
  return (
    <main className=''>
      <Menu />
      <Banner
        imagePath='/about-us/banner.png'
        alt={t('investorRelations')}
        caption={t('title')}
        className=''
      />
      {/*<Tabs activeMenu={InvestorRelationEnum.SustainabilityManagement} />*/}
      <section className="relative pt-[20px] pb-[30px] overflow-hidden">
        {/* background image */}
        <Image
          src="/investor-relations/esg-section-1-bg.webp"
          alt="Sustainability Background"
          fill
          className="absolute inset-0 object-cover object-center z-0"
          priority
        />

        {/* content */}
        <div className="relative z-10 max-w-[950px] mx-auto px-5">
          <h2
            className="flex items-center justify-center md:justify-start gap-2 mt-[103px] headline-2 text-left text-blue-400">
            <DoubleQuoteIcon className="text-red-400" /> {t('title')}
          </h2>
        </div>

        <Animation
          className="relative z-10 mt-[50px] mb-[100px] max-w-[950px] mx-auto flex gap-y-5 justify-center md:justify-between flex-wrap">
          <SustainabilityCard
            title={t('economicDimension.title')}
            descriptions={[t('economicDimension.description')]}
            imagePath="/investor-relations/hand-red.png"
            imgClassName="w-[70px] h-[49px]"
          />
          <SustainabilityCard
            title={t('socialDimension.title')}
            descriptions={[
              t('socialDimension.description'),
              t('socialDimension.description2'),
              t('socialDimension.description3')
            ]}
            imagePath="/investor-relations/people-red.png"
            imgClassName="w-[80px] h-[60px]"
          />
          <SustainabilityCard
            title={t('environmentalDimension.title')}
            descriptions={[
              t('environmentalDimension.description'),
              t('environmentalDimension.description2'),
              t('environmentalDimension.description3')
            ]}
            imagePath="/investor-relations/heart-red.png"
          />
        </Animation>
      </section>


      {/*---------*/}
      <EsgRisk />
      <EmergingRisk />
      {/*----------*/}

      {/*<RiskCard>*/}
      {/*  <RiskCard.Title>{t('esgRisk.title')}</RiskCard.Title>*/}
      {/*  <RiskCard.Section*/}
      {/*    title={t('esgRisk.businessContinuityManagement.title')}*/}
      {/*    description={t('esgRisk.businessContinuityManagement.description')}*/}
      {/*  />*/}
      {/*  <RiskCard.Section*/}
      {/*    title={t('esgRisk.riskManagement.title')}*/}
      {/*    description={t('esgRisk.riskManagement.description')}*/}
      {/*  />*/}
      {/*</RiskCard>*/}
      {/*<RiskCard>*/}
      {/*  <RiskCard.Title>{t('emergingRisk.title')}</RiskCard.Title>*/}
      {/*  <RiskCard.Section*/}
      {/*    title={t('emergingRisk.cyber.title')}*/}
      {/*    description={t('emergingRisk.cyber.description')}*/}
      {/*  />*/}
      {/*  <RiskCard.Section*/}
      {/*    title={t('emergingRisk.riskManagement.title')}*/}
      {/*    description={t('emergingRisk.riskManagement.description')}*/}
      {/*  />*/}
      {/*</RiskCard>*/}
      {/*<SustainabilityManagementPolicy className="mt-[46px]" />*/}
      <ESGPolicy />

      {/*<section className="p-5 max-w-4xl mx-auto">*/}
      {/*  {sustainabilityDocuments.map((doc: any, index: number) => (*/}
      {/*    <div*/}
      {/*      key={index}*/}
      {/*      className="mt-[32px] w-full flex justify-between items-center mb-5 border border-gray-200 bg-gray-50 rounded-md p-5"*/}
      {/*    >*/}
      {/*      <div>{doc.title}</div>*/}
      {/*      <div>*/}
      {/*        <DownloadButton className="mx-auto" href={doc.href} />*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  ))}*/}

      {/*</section>*/}


      <section className="space-y-[40px] mt-[88px]">
        <Animation className='max-w-[960px] w-full mx-auto'>
          <div className='relative pt-[86.88%] w-full'>
            <Image
              src='/investor-relations/sustainable-1.png'
              alt=''
              fill
            />
          </div>
        </Animation>
        <Animation className='max-w-[969px] w-full mx-auto'>
          <div className='relative pt-[49.85%] w-full'>
            <Image
              src='/investor-relations/sustainable-2.jpeg'
              alt=''
              fill
            />
          </div>
        </Animation>
        <Animation className='max-w-[965px] w-full mx-auto'>
          <div className='relative pt-[95.03%] w-full'>
            <Image
              src='/investor-relations/sustainable-3.png'
              alt=''
              fill
            />
          </div>
        </Animation>
      </section>
    </main>
  )
}
