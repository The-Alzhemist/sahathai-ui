import { AboutUsPage } from '@/features/aboutUs/pages/AboutUsPage'
import { getBoardMembers, getExecutives } from '@/libs/strapi/person'
import { getCommittees } from '@/libs/strapi/committee'
import { getCompanyHistory } from '@/libs/strapi/companyHistory'
import { getShareholdingStructure } from '@/libs/strapi/shareholdingStructure'
import { getGovernanceStructure } from '@/libs/strapi/governanceStructure'
import { getTranslations } from 'next-intl/server'

export default async function AboutUs({
  params,
}: {
  params: { locale: string }
}) {
  const { locale } = params
  const [
    boardResponse,
    executiveResponse,
    committeeResponse,
    companyHistoryResponse,
    shareholdingStructureResponse,
    governanceStructureResponse,
  ] = await Promise.all([
    getBoardMembers(locale),
    getExecutives(locale),
    getCommittees(locale),
    getCompanyHistory(locale),
    getShareholdingStructure(locale),
    getGovernanceStructure(locale),
  ])

  return (
    <AboutUsPage
      boardData={boardResponse.data}
      executiveData={executiveResponse.data}
      committeeData={committeeResponse.data}
      companyHistoryData={companyHistoryResponse.data}
      shareholdingStructureData={shareholdingStructureResponse.data}
      governanceStructureData={governanceStructureResponse.data}
    />
  )
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
    title: t('AboutUs.Title'),
    description: t('AboutUs.Description'),
    openGraph: {
      title: t('AboutUs.Title'),
      description: t('AboutUs.Description'),
      images: [
        {
          url: `${process.env.DOMAIN_NAME}/seo/about-us/aboutus-meta-img-${locale}.png`,
          width: 800,
          height: 600,
          alt: 'sahathai-about-us-meta-image',
        },
      ],
    },
  }
}
