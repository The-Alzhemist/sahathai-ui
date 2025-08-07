
"use client"
import { GoodCorporatePage } from '@/features/investorRelations/pages/GoodCorporatePage/GoodCorporatePage'
import { fetchStoryblokStory } from '@/utils/storyblok'


export default async function GoodCorporate({
                                              params,
                                            }: {
  params: { locale: string }
}) {

  const { locale } = params

  const response = await fetchStoryblokStory(
    'invrester-relartion/b2c20980-2a9d-4536-b06d-5f299c26314e',
    locale,
    'draft'
  )
  return <GoodCorporatePage data={response} />
}
