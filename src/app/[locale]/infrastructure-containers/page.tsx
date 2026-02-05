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
          url: `${process.env.DOMAIN_NAME}/seo/container/container-meta-img-${locale}.png`,
          width: 800,
          height: 600,
          alt: 'sahathai-infra-meta-image',
        },
      ],
    },
  }
}
