import PolicyPage from '@/features/privacy-policy/PolicyPage'
import { getTranslations } from 'next-intl/server'

export default function Privacy() {
  return <PolicyPage />
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
    title: t('PrivacyPolicy.Title'),
    description: t('PrivacyPolicy.Description'),
    openGraph: {
      title: t('PrivacyPolicy.Title'),
      description: t('PrivacyPolicy.Description'),
      images: [
        {
          url: `${process.env.DOMAIN_NAME}/seo/home/home-meta-img-${locale}.png`,
          width: 800,
          height: 600,
          alt: 'sahathai-meta-image',
        },
      ],
    },
  }
}
