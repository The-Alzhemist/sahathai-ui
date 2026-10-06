import { DocumentAnnouncementPage } from '@/features/investorRelations/pages/DocumentAnnouncementPage/DocumentAnnouncementPage'
import { getPublishedDocuments } from '@/libs/strapi/publishedDocument'
import { getTranslations } from 'next-intl/server'

export default async function DocumentAnnouncement({
  params,
}: {
  params: { locale: string }
}) {
  const { locale } = params

  const response = await getPublishedDocuments(locale)

  return <DocumentAnnouncementPage data={response.data} />
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
    title: t('DocumentAnnouncement.Title'),
    description: t('DocumentAnnouncement.Description'),
    openGraph: {
      title: t('DocumentAnnouncement.Title'),
      description: t('DocumentAnnouncement.Description'),
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
