

import { WarrantPage } from '@/features/investorRelations/pages/WarrantPage/WarrantPage'
import { fetchStoryblokStory } from '@/libs/storyblok/accordionsQuery'




export default async function Warrant({
                                        params,
                                      }: {
  params: { locale: string }
}) {

  const { locale } = params

  const response = await fetchStoryblokStory(
    'invrester-relartion/f777dd5a-6232-450c-b6c8-7b1850a1d3ec',
    locale,
    'draft'
  )

  return <WarrantPage data={response} />
}
