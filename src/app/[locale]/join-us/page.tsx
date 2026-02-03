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
    title: t('JoinUs.Title'),
    description: t('JoinUs.Description'),
    openGraph: {
      title: t('JoinUs.Title'),
      description: t('JoinUs.Description'),
      images: [
        {
          url: `https://sahathai-ui.vercel.app/seo/join-us/joinus-meta-img-${locale}.png`,
          width: 800,
          height: 600,
          alt: 'sahathai-join-us-meta-image',
        },
      ],
    },
  }
}
