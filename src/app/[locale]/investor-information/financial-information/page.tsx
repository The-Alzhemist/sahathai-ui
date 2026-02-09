import { REVALIDATE_TIME } from '@/config/environtment'
import { RevalidateTag } from '@/enums/CacheEnum'
import { FinancialInformationPage } from '@/features/investorRelations/pages/FinancialInformationPage/FinancialInformationPage'
import { fetchStoryblokStory } from '@/libs/storyblok/accordionsQuery'
import { StoryblokStoryResponse } from '@/libs/storyblok/types'
import { getTranslations } from 'next-intl/server'

export default async function FinancialInformation({
  params,
}: {
  params: { locale: string }
}) {
  const { locale } = params

  const response: StoryblokStoryResponse = await fetchStoryblokStory(
    'investor-relations/financialinformationpage',
    locale,
    'published',
    REVALIDATE_TIME,
    RevalidateTag.FINANCIAL_INFORMATION
  )

  return <FinancialInformationPage financialInformationData={response} />
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
    title: t('FinancialInformation.Title'),
    description: t('FinancialInformation.Description'),
    openGraph: {
      title: t('FinancialInformation.Title'),
      description: t('FinancialInformation.Description'),
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
