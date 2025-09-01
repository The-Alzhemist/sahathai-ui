import {
  FinancialInformationPage
} from '@/features/investorRelations/pages/FinancialInformationPage/FinancialInformationPage'
import { fetchStoryblokStory } from '@/libs/storyblok/accordionsQuery'



export default async function FinancialInformation({
                                                     params,
                                                   }: {
  params: { locale: string }
}) {

  const { locale } = params

  const response = await fetchStoryblokStory(
    'invrester-relartion/financialinformationpage',
    locale,
    'draft'
  )


  return <FinancialInformationPage financialInformationData={response} />
}
