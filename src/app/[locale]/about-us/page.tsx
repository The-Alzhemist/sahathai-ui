import { AboutUsPage } from '@/features/aboutUs/pages/AboutUsPage'
import { getTranslations } from 'next-intl/server'

export default function AboutUs() {
  return <AboutUsPage />
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
          url:
            'https://sahathai-ui.vercel.app' + '/seo/meta-image-about-us.jpg',
          width: 800,
          height: 600,
          alt: 'sahathai-about-us-meta-image',
        },
        {
          url:
            'https://sahathai-ui.vercel.app' + '/seo/meta-image-about-us.jpg',
          width: 1800,
          height: 1600,
          alt: 'sahathai-about-us-meta-image',
        },
      ],
    },
  }
}
