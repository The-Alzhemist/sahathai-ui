import { REVALIDATE_TIME } from '@/config/environtment'
import { RevalidateTag } from '@/enums/CacheEnum'
import { GoodCorporatePage } from '@/features/investorRelations/pages/GoodCorporatePage/GoodCorporatePage'
import { fetchStoryblokStory } from '@/libs/storyblok/accordionsQuery'
import { StoryblokStoryResponse } from '@/libs/storyblok/types'
import { getTranslations } from 'next-intl/server'

export default async function GoodCorporate({
  params,
}: {
  params: { locale: string }
}) {
  const { locale } = params

  const response: StoryblokStoryResponse = await fetchStoryblokStory(
    'investor-relations/b2c20980-2a9d-4536-b06d-5f299c26314e',
    locale,
    'published',
    REVALIDATE_TIME,
    RevalidateTag.GOOD_CORPORATE
  )
  return <GoodCorporatePage data={response} />
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
    title: t('GoodCorporate.Title'),
    description: t('GoodCorporate.Description'),
    openGraph: {
      title: t('GoodCorporate.Title'),
      description: t('GoodCorporate.Description'),
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
