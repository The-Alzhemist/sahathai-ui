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
          url: 'https://sahathai-ui.vercel.app' + '/seo/meta-image-john-us.jpg',
          width: 800,
          height: 600,
          alt: 'sahathai-privacy-meta-image',
        },
        {
          url: 'https://sahathai-ui.vercel.app' + '/seo/meta-image-john-us.jpg',
          width: 1800,
          height: 1600,
          alt: 'sahathai-privacy-meta-image',
        },
      ],
    },
    type: 'website',
  }
}
