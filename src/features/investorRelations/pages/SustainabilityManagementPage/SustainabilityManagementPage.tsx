import { useTranslations } from 'next-intl'

import { InvestorRelationEnum } from '@/enums/investorRelations/InvestorRelationEnum'
import { BannerGroup } from '../../components/BannerGroup'
import { Card } from './components/Card'
import { SustainabilityManagementPolicy } from './components/SustainabilityManagementPolicy'
import Image from 'next/image'

export function SustainabilityManagementPage() {
  const t = useTranslations('SustainabilityManagementPage')
  return (
    <main>
      <BannerGroup activeMenu={InvestorRelationEnum.SustainabilityManagement} />
      <h1 className='headline-1 text-center whitespace-pre-wrap text-black-80 py-[81.5px]'>
        {t('title')}
      </h1>
      <section className='max-w-[1140px] mx-auto flex justify-center flex-wrap gap-[48px]'>
        <Card
          title={t('economicDimension.title')}
          descriptions={[t('economicDimension.description')]}
        />
        <Card
          title={t('socialDimension.title')}
          descriptions={[
            t('socialDimension.description'),
            t('socialDimension.description2'),
            t('socialDimension.description3'),
          ]}
        />
        <Card
          title={t('environmentalDimension.title')}
          descriptions={[
            t('environmentalDimension.description'),
            t('environmentalDimension.description2'),
            t('environmentalDimension.description3'),
          ]}
        />
      </section>
      <SustainabilityManagementPolicy className='mt-[102px]' />
      <section className='space-y-[40px] mt-[86px] mb-[105px]'>
        <div className='max-w-[960px] w-full mx-auto'>
          <div className='relative pt-[86.88%] w-full'>
            <Image
              src='/investor-relations/sustainability-management-1.png'
              alt=''
              fill
            />
          </div>
        </div>
        <div className='max-w-[969px] w-full mx-auto'>
          <div className='relative pt-[49.85%] w-full'>
            <Image
              src='/investor-relations/sustainability-management-2.png'
              alt=''
              fill
            />
          </div>
        </div>
        <div className='max-w-[965px] w-full mx-auto'>
          <div className='relative pt-[95.03%] w-full'>
            <Image
              src='/investor-relations/sustainability-management-3.png'
              alt=''
              fill
            />
          </div>
        </div>
      </section>
    </main>
  )
}
