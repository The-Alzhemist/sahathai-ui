import { NewsPage } from '@/features/news/pages/NewsPage'
import { getTranslations } from 'next-intl/server'

export const revalidate = 3600

export default function News() {
  return <NewsPage />
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
    title: t('News.Title'),
    description: t('News.Description'),
    openGraph: {
      title: t('News.Title'),
      description: t('News.Description'),
      images: [
        {
          url: 'https://sahathai-ui.vercel.app' + '/seo/meta-image-news.jpg',
          width: 800,
          height: 600,
          alt: 'sahathai-news-meta-image',
        },
        {
          url: 'https://sahathai-ui.vercel.app' + '/seo/meta-image-news.jpg',
          width: 1800,
          height: 1600,
          alt: 'sahathai-news-meta-image',
        },
      ],
    },
    type: 'website',
  }
}
