import { HomePage } from '@/features/home/pages/HomePage'
import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

export default function Home() {
  return <HomePage />
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
    title: t('Home.Title'),
    description: t('Home.Description'),
    openGraph: {
      title: t('Home.Title'),
      description: t('Home.Description'),
      images: [
        {
          url: 'https://sahathai-ui.vercel.app' + '/seo/meta-image-home.jpg',
          width: 800,
          height: 600,
          alt: 'sahathai-meta-image',
        },
        {
          url:
            'https://sahathai-ui.vercel.app/' +
            '/logo/meta/meta-tag-projects.jpg',
          width: 1800,
          height: 1600,
          alt: 'sahathai-meta-image',
        },
      ],
    },
    type: 'website',
  }
}
