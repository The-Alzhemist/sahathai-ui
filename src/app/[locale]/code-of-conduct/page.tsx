import { CodeOfConductPage } from '@/features/investorRelations/pages/CodeConductPage/CodeConductPage'
import { FinancialInformationPage } from '@/features/investorRelations/pages/FinancialInformationPage/FinancialInformationPage'
import { fetchStoryblokStory } from '@/libs/storyblok/accordionsQuery'
import { StoryblokStoryResponse } from '@/libs/storyblok/types'
import { getTranslations } from 'next-intl/server'

export default async function CodeOfConduct({
  params,
}: {
  params: { locale: string }
}) {
  const { locale } = params

  const response: StoryblokStoryResponse = await fetchStoryblokStory(
    'investor-relations/code-of-conduct',
    locale,
    'published'
  )

  return <CodeOfConductPage conOdConductData={response} />
}

export async function generateMetadata() {
  const t = await getTranslations('MetaData')

  return {
    title: t('codeOfConduct.Title'),
    description: t('codeOfConduct.Description'),
    openGraph: {
      title: t('codeOfConduct.Title'),
      description: t('codeOfConduct.Description'),
    },
  }
}
