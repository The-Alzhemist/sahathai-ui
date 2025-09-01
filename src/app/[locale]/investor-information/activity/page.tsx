
import { ActivityPage } from '@/features/investorRelations/pages/ActivityPage/ActivityPage'

import { GoodCorporatePage } from '@/features/investorRelations/pages/GoodCorporatePage/GoodCorporatePage'
import { fetchStoryblokStory } from '@/libs/storyblok/accordionsQuery'

export default async function Activity({
                                         params,
                                       }: {
  params: { locale: string }
}) {
  const { locale } = params

  const response = await fetchStoryblokStory(
    'invrester-relartion/f7414f1c-4de7-4cfb-88f7-5bed4e23ffce',
    locale,
    'draft'
  )
  return <ActivityPage data={response} />
}
