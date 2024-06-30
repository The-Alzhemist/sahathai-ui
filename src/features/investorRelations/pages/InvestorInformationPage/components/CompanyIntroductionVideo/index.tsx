import { LocaleButton } from '@/components/LocaleButton'
import { InvestorInformationEnum } from '@/enums/investorRelations/InvestorInformationEnum'
import { useTranslations } from 'next-intl'

export function CompanyIntroductionVideo() {
  const t = useTranslations('InvestorInformationPage.CompanyIntroductionVideo')

  return (
    <section className='bg-black-1'>
      <div className='max-w-[896px] w-full mx-auto py-[40px]'>
        <div className='flex items-center justify-between'>
          <h2
            className='font-[700] text-[36px] leading-[44px] text-white'
            id={InvestorInformationEnum.CompanyIntroductionVideo}
          >
            {t('title')}
          </h2>
          <LocaleButton className='text-white' />
        </div>
        <div className='mt-[32px] w-full h-[484px] bg-dark' />
      </div>
    </section>
  )
}
