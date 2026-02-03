import { REVALIDATE_TIME } from '@/config/environtment'
import { EServicePage } from '@/features/investorRelations/pages/EServicePage'
import { fetchStoryblokStory } from '@/libs/storyblok/accordionsQuery'
import { getTranslations } from 'next-intl/server'

export default async function EService({
  params,
}: {
  params: { locale: string }
}) {
  const locale = params.locale

  const response = await fetchStoryblokStory(
    'e-service/e-service-list',
    locale,
    'published',
    REVALIDATE_TIME,
    'e-service'
  )

  return <EServicePage data={response} />
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
    title: t('EService.Title'),
    description: t('EService.Description'),
    openGraph: {
      title: t('EService.Title'),
      description: t('EService.Description'),
      images: [
        {
          url: `https://sahathai-ui.vercel.app/seo/e-service/e-service-meta-img-${locale}.png`,
          width: 800,
          height: 600,
          alt: 'sahathai-contact-us-meta-image',
        },
      ],
    },
  }
}
