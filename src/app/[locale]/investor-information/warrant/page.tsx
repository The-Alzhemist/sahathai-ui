

import { WarrantPage } from '@/features/investorRelations/pages/WarrantPage/WarrantPage'
import { fetchStoryblokStory } from '@/libs/storyblok/accordionsQuery'
import { getTranslations } from 'next-intl/server'




export default async function Warrant({
                                        params,
                                      }: {
  params: { locale: string }
}) {

  const { locale } = params

  const response = await fetchStoryblokStory(
    'invrester-relartion/f777dd5a-6232-450c-b6c8-7b1850a1d3ec',
    locale,
    'published'
  )

  return <WarrantPage data={response} />
}


export async function generateMetadata() {
  const t = await getTranslations('MetaData')

  return {
    title: t('Warrant.Title'),
    description: t('Warrant.Description'),
    openGraph: {
      title: t('Warrant.Title'),
      description: t('Warrant.Description'),
    },
  }
}