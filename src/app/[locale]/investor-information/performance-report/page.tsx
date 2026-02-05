import { PerformanceReportPage } from '@/features/investorRelations/pages/PerformanceReportPage/PerformanceReportPage'
import { fetchStoryblokStory } from '@/libs/storyblok/accordionsQuery'
import { getTranslations } from 'next-intl/server'

export default async function PerformanceReport({
  params,
}: {
  params: { locale: string }
}) {
  const { locale } = params

  const response = await fetchStoryblokStory(
    'investor-relations/1c52b131-12fd-4d51-9daa-dccd33b4e410',
    locale,
    'published'
  )

  return <PerformanceReportPage performanceReportData={response} />
}

export async function generateMetadata({
  params: { locale },
}: {
  params: {
    locale: string
  }
}) {
  const t = await getTranslations('MetaData')

  return {
    title: t('PerformanceReport.Title'),
    description: t('PerformanceReport.Description'),
    openGraph: {
      title: t('PerformanceReport.Title'),
      description: t('PerformanceReport.Description'),
      images: [
        {
          url: `${process.env.DOMAIN_NAME}/seo/investor/investor-meta-img-${locale}.png`,
          width: 800,
          height: 600,
          alt: 'sahathai-investor-meta-image',
        },
      ],
    },
  }
}
