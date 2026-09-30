import { AboutUsPage } from '@/features/aboutUs/pages/AboutUsPage'
import { getPersons } from '@/libs/strapi/person'
import { getCommittees } from '@/libs/strapi/committee'
import { getTranslations } from 'next-intl/server'

export default async function AboutUs({
  params,
}: {
  params: { locale: string }
}) {
  const { locale } = params
  const [personResponse, committeeResponse] = await Promise.all([
    getPersons(locale),
    getCommittees(locale),
  ])

  return (
    <AboutUsPage
      boardData={personResponse.data}
      committeeData={committeeResponse.data}
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
