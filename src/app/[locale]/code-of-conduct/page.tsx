import { CodeOfConductPage } from '@/features/investorRelations/pages/CodeConductPage/CodeConductPage'
import { getPolicies } from '@/libs/strapi/policy'
import { getTranslations } from 'next-intl/server'

export default async function CodeOfConduct({
  params,
}: {
  params: { locale: string }
}) {
  const { locale } = params

  const response = await getPolicies(locale)

  return <CodeOfConductPage policyData={response.data} />
}

export async function generateMetadata() {
  const t = await getTranslations('MetaData')

  return {
    title: t('codeOfConduct.Title'),
    description: t('codeOfConduct.Description'),
    openGraph: {
      title: t('codeOfConduct.Title'),
      description: t('codeOfConduct.Description'),
    },
  }
}
