import { useTranslations } from 'next-intl'

export function DividendPaymentPage() {
  const t = useTranslations('DividendPaymentPage')

  return (
    <main className='max-w-[1007px] mx-auto py-[80px]'>
      <h1 className='font-[700] text-[36px] leading-[44px] text-center'>
        {t('title')}
      </h1>
      <h2 className='mt-[115px] font-[700] text-[36px] leading-[44px]'>
        {t('companyDividendPolicy.title')}
      </h2>
      <p className='mt-[47] text-[18px] leading-[28px]'>
        {t('companyDividendPolicy.description')}
      </p>

      <h2 className='mt-[115px] font-[700] text-[36px] leading-[44px]'>
        {t('subsidiaryDividendPolicy.title')}
      </h2>
      <p className='mt-[47] text-[18px] leading-[28px]'>
        {t('subsidiaryDividendPolicy.description')}
      </p>
    </main>
  )
}
