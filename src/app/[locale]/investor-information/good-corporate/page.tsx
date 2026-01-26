import { GoodCorporatePage } from '@/features/investorRelations/pages/GoodCorporatePage/GoodCorporatePage'
import { fetchStoryblokStory } from '@/libs/storyblok/accordionsQuery'
import { getTranslations } from 'next-intl/server'

export default async function GoodCorporate({
  params,
}: {
  params: { locale: string }
}) {
  const { locale } = params

  const response = await fetchStoryblokStory(
    'investor-relations/b2c20980-2a9d-4536-b06d-5f299c26314e',
    locale,
    'published'
  )
  return <GoodCorporatePage data={response} />
}

export async function generateMetadata() {
  const t = await getTranslations('MetaData')

  return {
    title: t('GoodCorporate.Title'),
    description: t('GoodCorporate.Description'),
    openGraph: {
      title: t('GoodCorporate.Title'),
      description: t('GoodCorporate.Description'),
    },
  }
}
