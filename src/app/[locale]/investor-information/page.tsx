import { InvestorInformationPage } from '@/features/investorRelations/pages/InvestorInformationPage'
import { getTranslations } from 'next-intl/server'

export default async function InvestorInformation() {
  return <InvestorInformationPage />
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
    title: t('InvestorInformation.Title'),
    description: t('InvestorInformation.Description'),
    openGraph: {
      title: t('InvestorInformation.Title'),
      description: t('InvestorInformation.Description'),
      images: [
        {
          url: `https://sahathai-ui.vercel.app/seo/investor/investor-meta-img-${locale}.png`,
          width: 800,
          height: 600,
          alt: 'sahathai-investor-meta-image',
        },
      ],
    },
  }
}
