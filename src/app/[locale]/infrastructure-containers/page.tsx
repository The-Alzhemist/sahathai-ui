import { InfrastructureContainersPage } from '@/features/infrastructureContainers/pages/InfrastructureContainersPage'
import { getTranslations } from 'next-intl/server'

export default function InfrastructureContainers() {
  return <InfrastructureContainersPage />
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
    title: t('Infrastructure.Title'),
    description: t('Infrastructure.Description'),
    openGraph: {
      title: t('Infrastructure.Title'),
      description: t('Infrastructure.Description'),
      images: [
        {
          url: 'https://sahathai-ui.vercel.app' + '/seo/meta-image-infra.jpg',
          width: 800,
          height: 600,
          alt: 'sahathai-infra-meta-image',
        },
        {
          url: 'https://sahathai-ui.vercel.app' + '/seo/meta-image-infra.jpg',
          width: 1800,
          height: 1600,
          alt: 'sahathai-infra-meta-image',
        },
      ],
    },
    type: 'website',
  }
}
