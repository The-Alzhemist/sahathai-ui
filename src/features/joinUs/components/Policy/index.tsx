import { useTranslations } from 'next-intl'

import { Animation } from '@/components/Animation'
import { PolicyCard } from '../PolicyCard'

export function Policy() {
  const t = useTranslations('JoinUsPage.Policy')

  return (
    <Animation className='max-w-[896px] mx-auto space-y-[32px] shadow-2 rounded-[8px] p-[24px] bg-white'>
      <PolicyCard
        title={t('measuresPreventSpreadCovid19Virus')}
        downloadLink='https://storage.googleapis.com/sahathai-cms-uploads-510409/covid_19_policy_73da262239/covid_19_policy_73da262239.pdf'
      />
      <PolicyCard
        title={t('employeeCompensationPolicy')}
        downloadLink='https://storage.googleapis.com/sahathai-cms-uploads-510409/salary_policy_f19f9926bf/salary_policy_f19f9926bf.pdf'
      />
      <PolicyCard
        title={t('humanResourcesLaborRelationsPolicy')}
        downloadLink='https://storage.googleapis.com/sahathai-cms-uploads-510409/human_resource_policy_8c252b6ccb/human_resource_policy_8c252b6ccb.pdf'
      />
      <PolicyCard
        title={t('workplaceSafetyHygienePolicy')}
        downloadLink='https://storage.googleapis.com/sahathai-cms-uploads-510409/security_policy_2561_c39e5d113e/security_policy_2561_c39e5d113e.pdf'
      />

      <PolicyCard
        title={t('companyPersonnelDevelopmentPolicy')}
        downloadLink='https://storage.googleapis.com/sahathai-cms-uploads-510409/human_development_policy_9e5e4986da/human_development_policy_9e5e4986da.pdf'
      />
    </Animation>
  )
}
