import { useTranslations } from 'next-intl'

import { Animation } from '@/components/Animation'
import { PolicyCard } from '../PolicyCard'

export function Policy() {
  const t = useTranslations('JoinUsPage.Policy')

  return (
    <Animation className='max-w-[896px] mx-auto space-y-[32px] shadow-2 rounded-[8px] p-[24px]'>
      <PolicyCard title={t('workplaceSafetyHygienePolicy')} downloadLink='https://storage.googleapis.com/sahathai-prod/about-us-page/ข้อ8.1นโยบายและแนวปฏิบัติเกี่ยวกับความปลอดภัย-และสุขอนามัยในสถานที่ทำงาน.pdf' />
      <PolicyCard title={t('employeeCompensationPolicy')} downloadLink='https://storage.googleapis.com/sahathai-prod/about-us-page/ข้อ8.2นโยบายอัตราค่าตอบแทนพนักงาน-04032019.pdf' />
      <PolicyCard
        title={t('companyPersonnelDevelopmentPolicy')}
        downloadLink='https://storage.googleapis.com/sahathai-prod/about-us-page/ข้อ8.3-นโยบายการพัฒนาบุคลากรของบริษัท.pdf'
      />
      <PolicyCard
        title={t('humanResourcesLaborRelationsPolicy')}
        downloadLink='https://storage.googleapis.com/sahathai-prod/about-us-page/ข้อ8.4-นโยบายการบริหารทรัพยากรบุคคล-และแรงงานสัมพันธ์.pdf'
      />
      <PolicyCard
        title={t('measuresPreventSpreadCovid19Virus')}
        downloadLink='https://storage.googleapis.com/sahathai-prod/about-us-page/Covid-19-1.pdf'
      />
    </Animation>
  )
}
