
import { ActivityPage } from '@/features/investorRelations/pages/ActivityPage/ActivityPage'

import { fetchStoryblokStory } from '@/libs/storyblok/accordionsQuery'
import { getTranslations } from 'next-intl/server'

export default async function Activity({
                                         params,
                                       }: {
  params: { locale: string }
}) {
  const { locale } = params

  const response = await fetchStoryblokStory(
    'invrester-relartion/f7414f1c-4de7-4cfb-88f7-5bed4e23ffce',
    locale,
    'published'
  )
  return <ActivityPage data={response} />
}

export async function generateMetadata() {
  const t = await getTranslations('MetaData')

  return {
    title: t('Activity.Title'),
    description: t('Activity.Description'),
    openGraph: {
      title: t('Activity.Title'),
      description: t('Activity.Description'),
    },
  }
}