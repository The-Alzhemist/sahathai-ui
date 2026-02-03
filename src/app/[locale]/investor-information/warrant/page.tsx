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
    'investor-relations/f777dd5a-6232-450c-b6c8-7b1850a1d3ec',
    locale,
    'published'
  )

  return <WarrantPage data={response} />
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
    title: t('Warrant.Title'),
    description: t('Warrant.Description'),
    openGraph: {
      title: t('Warrant.Title'),
      description: t('Warrant.Description'),
      images: [
        {
          url: `https://sahathai-ui.vercel.app/seo/investor/investor-meta-img-${locale}.png`,
          width: 800,
          height: 600,
          alt: 'sahathai-investor-meta-image',
        },
      ],
    },
  }
}
