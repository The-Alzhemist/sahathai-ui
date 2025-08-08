import { REVALIDATE_TIME } from '@/config/environtment'
import { NewsPage } from '@/features/news/pages/NewsPage'
import { getTranslations } from 'next-intl/server'
import { BlogPage } from '@/features/blog/pages/NewsPage/BlogPage'

export const revalidate = 300 // 5 min

export default function blog() {
  return <BlogPage />
}

export async function generateMetadata() {
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

  }
}
