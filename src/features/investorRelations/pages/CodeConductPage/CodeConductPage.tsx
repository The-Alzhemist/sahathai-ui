import { useTranslations } from 'next-intl'

import { InvestorRelationEnum } from '@/enums/investorRelations/InvestorRelationEnum'
import { Animation } from '@/components/Animation'
import { Tabs } from '../../components/Tabs'
import { CodeConductCard } from '../../components/CodeConductCard'
import { Menu } from '@/components/Menu'
import { Banner } from '@/components/Banner'

export function CodeConductPage() {
  const t = useTranslations('CodeConductPage')

  return (
    <main className='bg-white'>
      <Menu />
      <Banner
        imagePath='/about-us/banner.png'
        alt={t('investorRelations')}
        caption={t('title')}
        className='mb-[40px]'
      />
      <section className='pb-[176px] max-w-[896px] w-full mx-auto px-5'>
        <Tabs activeMenu={InvestorRelationEnum.CodeConduct} />
        <h2 className='mt-[103px] headline-2 text-center text-blue-400'>
          {t('title')}
        </h2>
        <h3 className='mt-[8px] headline-4 text-center text-blue-400'>
          {t('subTitle')}
        </h3>
        <Animation className='mt-[105px] space-y-[32px]'>
          <CodeConductCard title={t('antiCorruptionPolicyTh')} fileUrl='' />
          <CodeConductCard title={t('antiCorruptionPolicyEn')} fileUrl='' />
        </Animation>
      </section>
    </main>
  )
}
