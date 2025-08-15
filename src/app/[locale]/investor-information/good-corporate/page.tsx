'use client'
import { GoodCorporatePage } from '@/features/investorRelations/pages/GoodCorporatePage/GoodCorporatePage'
import { fetchStoryblokStory } from '@/utils/storyblok'


async function getData() {
  // จำลองการโหลดช้าๆ 1 ชั่วโมง
  await new Promise((resolve) => setTimeout(resolve, 60 * 60 * 1000))
  return { message: 'Data loaded!' }
}


export default async function GoodCorporate({
  params,
}: {
  params: { locale: string }
}) {
  const { locale } = params
  const data = await getData()

  const response = await fetchStoryblokStory(
    'invrester-relartion/b2c20980-2a9d-4536-b06d-5f299c26314e',
    locale,
    'draft'
  )
  return <GoodCorporatePage data={response} />
}
