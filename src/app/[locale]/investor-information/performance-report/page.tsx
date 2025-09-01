
import { PerformanceReportPage } from '@/features/investorRelations/pages/PerformanceReportPage/PerformanceReportPage'
import { fetchStoryblokStory } from '@/libs/storyblok/accordionsQuery'


export default async function PerformanceReport({
                                                  params,
                                                }: {
  params: { locale: string }
}) {

  const { locale } = params

  const response = await fetchStoryblokStory(
    'invrester-relartion/1c52b131-12fd-4d51-9daa-dccd33b4e410',
    locale,
    'draft'
  )


  return <PerformanceReportPage performanceReportData={response} />
}
