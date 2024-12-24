import { JoinUsPage } from '@/features/joinUs/pages/JoinUsPage'
import { getTranslations } from 'next-intl/server'

export default function JoinUs() {
  return <JoinUsPage />
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
    title: t('JohnUs.Title'),
    description: t('JohnUs.Description'),
    openGraph: {
      title: t('JohnUs.Title'),
      description: t('JohnUs.Description'),
      images: [
        {
          url: 'https://sahathai-ui.vercel.app' + '/seo/meta-image-join-us.jpg',
          width: 800,
          height: 600,
          alt: 'sahathai-join-us-meta-image',
        },
        {
          url: 'https://sahathai-ui.vercel.app' + '/seo/meta-image-join-us.jpg',
          width: 1800,
          height: 1600,
          alt: 'sahathai-join-us-meta-image',
        },
      ],
    },
    type: 'website',
  }
}
