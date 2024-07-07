import { useTranslations } from 'next-intl'

import { InvestorInformationEnum } from '@/enums/investorRelations/InvestorInformationEnum'
import { Animation } from '@/components/Animation'
import { LocaleButton } from '../LocaleButton'

export function CompanyIntroductionVideo() {
  const t = useTranslations('InvestorInformationPage.CompanyIntroductionVideo')

  return (
    <Animation>
      <div className='flex items-center justify-between'>
        <h2
          className='headline-2 text-blue-400'
          id={InvestorInformationEnum.CompanyIntroductionVideo}
        >
          {t('title')}
        </h2>
        <LocaleButton />
      </div>
      <div className='mt-[32px] w-full h-[484px] bg-dark' />
    </Animation>
  )
}
