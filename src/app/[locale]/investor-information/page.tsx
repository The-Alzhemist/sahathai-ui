import { StockData } from '@/features/investorRelations/components/StockMarketInformation/interface'
import { InvestorInformationPage } from '@/features/investorRelations/pages/InvestorInformationPage'
import { getTranslations } from 'next-intl/server'
import { headers } from 'next/headers'

export default async function InvestorInformation() {
  const host = headers().get('host')
  let stockData: StockData[] = []

  if (host?.includes('localhost')) {
    // mock data เวลา dev
    stockData = [
      {
        date: '2025-09-11',
        open: 12,
        high: 13,
        low: 11.5,
        close: 12.8,
        adjusted_close: 12.8,
        volume: 123456,
      },
    ]
  } else {
    // free api called for 20 times/day
    const response = await fetch(
      `https://eodhd.com/api/eod/PORT.BK?api_token=677622d53db520.53886203&fmt=json`,
      { next: { revalidate: 60 * 60 * 12 } }
    ) // every 12 hr/call api again
    stockData = await response.json()
  }

  // xxx
  return <InvestorInformationPage stockData={stockData} />
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
          url: `${process.env.DOMAIN_NAME}/seo/investor/investor-meta-img-${locale}.png`,
          width: 800,
          height: 600,
          alt: 'sahathai-investor-meta-image',
        },
      ],
    },
  }
}
