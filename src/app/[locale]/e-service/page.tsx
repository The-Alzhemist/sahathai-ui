import { REVALIDATE_TIME } from '@/config/environtment'
import { EServicePage } from '@/features/investorRelations/pages/EServicePage'
import { fetchStoryblokStory } from '@/libs/storyblok/accordionsQuery'

export default async function EService({
  params,
}: {
  params: { locale: string }
}) {
  const locale = params.locale

  const response = await fetchStoryblokStory(
    'e-service/e-service-list',
    locale,
    'published',
    REVALIDATE_TIME,
    'e-service'
  )

  console.log(response)

  return <EServicePage data={response} />
}
