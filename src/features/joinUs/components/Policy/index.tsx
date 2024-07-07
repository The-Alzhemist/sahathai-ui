import { useTranslations } from 'next-intl'

import { Animation } from '@/components/Animation'
import { PolicyCard } from '../PolicyCard'

export function Policy() {
  const t = useTranslations('JoinUsPage.Policy')

  return (
    <Animation className='max-w-[896px] mx-auto space-y-[32px] shadow-2 rounded-[8px] p-[24px]'>
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
    </Animation>
  )
}
