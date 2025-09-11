
import { ShareHolderPage } from '@/features/investorRelations/pages/ShareHolderPage'
import { getTranslations } from 'next-intl/server'



export default async function ShareHolder() {
  return <ShareHolderPage />
}


export async function generateMetadata() {
  const t = await getTranslations('MetaData')

  return {
    title: t('PerformanceReport.Title'),
    description: t('PerformanceReport.Description'),
    openGraph: {
      title: t('PerformanceReport.Title'),
      description: t('PerformanceReport.Description'),
    },
  }
}