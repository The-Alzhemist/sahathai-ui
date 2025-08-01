
import { useTranslations } from 'next-intl'
import { ShareHolderMeetingPageProps } from '@/features/investorRelations/pages/ShareHolderMeetingPage/interface'
import QuarterAccordionList
  from '@/features/investorRelations/pages/ShareHolderMeetingPage/component/QuarterAccordientList' // หรือ path ที่ถูกต้อง

export function ShareHolderMeetingPage({ shareHolderMeetingData }: ShareHolderMeetingPageProps) {
  const t = useTranslations('InvestorInformationPage.ShareHolderMeeting')

  if (!shareHolderMeetingData) {
    return <div>No data</div>
  }

  const performanceData = shareHolderMeetingData.story.content.body[0]
    .performanceBoxYearContainer

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">{t('title')}</h1>
      <QuarterAccordionList data={performanceData} />
    </main>
  )
}
