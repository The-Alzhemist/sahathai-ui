import { useTranslations } from 'next-intl'

import { PolicyCard } from '../PolicyCard'

export function Policy() {
  const t = useTranslations('JoinUsPage.Policy')

  return (
    <section className='max-w-[896px] mx-auto space-y-[16px] shadow-4 border border-dark-80 rounded-[22px] px-[10px] py-[34px]'>
      <PolicyCard title={t('workplaceSafetyHygienePolicy')} downloadLink='' />
      <PolicyCard title={t('employeeCompensationPolicy')} downloadLink='' />
      <PolicyCard
        title={t('companyPersonnelDevelopmentPolicy')}
        downloadLink=''
      />
      <PolicyCard
        title={t('humanResourcesLaborRelationsPolicy')}
        downloadLink=''
      />
      <PolicyCard
        title={t('measuresPreventSpreadCovid19Virus')}
        downloadLink=''
      />
    </section>
  )
}
