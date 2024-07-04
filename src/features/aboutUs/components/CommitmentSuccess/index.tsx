import { useTranslations } from 'next-intl'

import { Timeline } from '../Timeline'

export function CommitmentSuccess() {
  const t = useTranslations('AboutUsPage.CommitmentSuccess')
  const common = useTranslations('common')

  return (
    <section className='mt-[80px] max-w-[896px] w-full mx-auto'>
      <h2 className='headline-1 text-blue-400'>
        {common('sahathai')} {common('terminal')}
      </h2>
      <h3 className='mt-[14px] headline-4'>{t('startingBusiness')}</h3>
      <p className='mt-[21px] body-1 text-black-60'>{t('description')}</p>

      <Timeline />
    </section>
  )
}
