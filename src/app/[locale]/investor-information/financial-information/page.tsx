import { FinancialInformationPage } from '@/features/investorRelations/pages/FinancialInformationPage/FinancialInformationPage'
import { fetchStoryblokStory } from '@/libs/storyblok/accordionsQuery'
import { getTranslations } from 'next-intl/server'

export default async function FinancialInformation({
  params,
}: {
  params: { locale: string }
}) {
  const { locale } = params

  const response = await fetchStoryblokStory(
    'investor-relations/financialinformationpage',
    locale,
    'published'
  )

  return <FinancialInformationPage financialInformationData={response} />
}

export async function generateMetadata() {
  const t = await getTranslations('MetaData')

  return {
    title: t('FinancialInformation.Title'),
    description: t('FinancialInformation.Description'),
    openGraph: {
      title: t('FinancialInformation.Title'),
      description: t('FinancialInformation.Description'),
    },
  }
}
