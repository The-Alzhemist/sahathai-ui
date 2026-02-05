import { REVALIDATE_TIME } from '@/config/environtment'
import { ActivityPage } from '@/features/investorRelations/pages/ActivityPage/ActivityPage'

import { fetchStoryblokStory } from '@/libs/storyblok/accordionsQuery'
import { StoryblokStoryResponse } from '@/libs/storyblok/types'
import { getTranslations } from 'next-intl/server'

export default async function Activity({
  params,
}: {
  params: { locale: string }
}) {
  const { locale } = params

  const response: StoryblokStoryResponse = await fetchStoryblokStory(
    'investor-relations/f7414f1c-4de7-4cfb-88f7-5bed4e23ffce',
    locale,
    'published',
    REVALIDATE_TIME,
    'activity'
  )
  return <ActivityPage data={response} />
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
    title: t('Activity.Title'),
    description: t('Activity.Description'),
    openGraph: {
      title: t('Activity.Title'),
      description: t('Activity.Description'),
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
