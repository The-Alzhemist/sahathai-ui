import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { InvestorRelationEnum } from '@/enums/investorRelations/InvestorRelationEnum'
import { SustainabilityCard } from '../../components/SustainabilityCard'
import { SustainabilityManagementPolicy } from '../../components/SustainabilityManagementPolicy'
import { Tabs } from '../../components/Tabs'
import { RiskCard } from '../../components/RiskCard'
import { Animation } from '@/components/Animation'

export function SustainabilityManagementPage() {
  const t = useTranslations('SustainabilityManagementPage')
  return (
    <main className='pt-[56px] pb-[184px] px-5 bg-white'>
      <Tabs activeMenu={InvestorRelationEnum.SustainabilityManagement} />
      <h2 className='mt-[103px] headline-2 text-center text-blue-400'>
        {t('title')}
      </h2>
      <h3 className='mt-[8px] headline-4 text-center text-blue-400'>
        {t('subTitle')}
      </h3>
      <Animation className='mt-[29px] max-w-[1140px] mx-auto flex justify-center flex-wrap gap-[48px]'>
        <SustainabilityCard
          title={t('economicDimension.title')}
          descriptions={[t('economicDimension.description')]}
        />
        <SustainabilityCard
          title={t('socialDimension.title')}
          descriptions={[
            t('socialDimension.description'),
            t('socialDimension.description2'),
            t('socialDimension.description3'),
          ]}
        />
        <SustainabilityCard
          title={t('environmentalDimension.title')}
          descriptions={[
            t('environmentalDimension.description'),
            t('environmentalDimension.description2'),
            t('environmentalDimension.description3'),
          ]}
        />
      </Animation>
      <RiskCard>
        <RiskCard.Title>{t('esgRisk.title')}</RiskCard.Title>
        <RiskCard.Section
          title={t('esgRisk.businessContinuityManagement.title')}
          description={t('esgRisk.businessContinuityManagement.description')}
        />
        <RiskCard.Section
          title={t('esgRisk.riskManagement.title')}
          description={t('esgRisk.riskManagement.description')}
        />
      </RiskCard>
      <RiskCard>
        <RiskCard.Title>{t('emergingRisk.title')}</RiskCard.Title>
        <RiskCard.Section
          title={t('emergingRisk.cyber.title')}
          description={t('emergingRisk.cyber.description')}
        />
        <RiskCard.Section
          title={t('emergingRisk.riskManagement.title')}
          description={t('emergingRisk.riskManagement.description')}
        />
      </RiskCard>
      <SustainabilityManagementPolicy className='mt-[46px]' />
      <section className='space-y-[40px] mt-[88px]'>
        <Animation className='max-w-[960px] w-full mx-auto'>
          <div className='relative pt-[86.88%] w-full'>
            <Image
              src='/investor-relations/sustainability-management-1.png'
              alt=''
              fill
            />
          </div>
        </Animation>
        <Animation className='max-w-[969px] w-full mx-auto'>
          <div className='relative pt-[49.85%] w-full'>
            <Image
              src='/investor-relations/sustainability-management-2.png'
              alt=''
              fill
            />
          </div>
        </Animation>
        <Animation className='max-w-[965px] w-full mx-auto'>
          <div className='relative pt-[95.03%] w-full'>
            <Image
              src='/investor-relations/sustainability-management-3.png'
              alt=''
              fill
            />
          </div>
        </Animation>
      </section>
    </main>
  )
}
