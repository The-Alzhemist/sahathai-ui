import { useTranslations } from 'next-intl'

import { Animation } from '@/components/Animation'
import { PolicyCard } from '../PolicyCard'

export function Policy() {
  const t = useTranslations('JoinUsPage.Policy')

  return (
    <Animation className='max-w-[896px] mx-auto space-y-[32px] shadow-2 rounded-[8px] p-[24px]'>
      <PolicyCard title={t('workplaceSafetyHygienePolicy')} downloadLink='https://a.storyblok.com/f/316761/x/75ef1ec657/security-policy-2561.pdf?cv=1757652967941' />
      <PolicyCard title={t('employeeCompensationPolicy')} downloadLink='https://a.storyblok.com/f/316761/x/d03e288856/salary-policy.pdf' />
      <PolicyCard
        title={t('companyPersonnelDevelopmentPolicy')}
        downloadLink='https://a.storyblok.com/f/316761/x/61a1c17f0d/human-development-policy.pdf'
      />
      <PolicyCard
        title={t('humanResourcesLaborRelationsPolicy')}
        downloadLink='https://a.storyblok.com/f/316761/x/39f1ade70d/human-resource-policy.pdf'
      />
      <PolicyCard
        title={t('measuresPreventSpreadCovid19Virus')}
        downloadLink='https://a.storyblok.com/f/316761/x/d6cd3c801e/covid-19-policy.pdf'
      />
    </Animation>
  )
}
