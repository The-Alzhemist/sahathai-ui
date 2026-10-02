import { fetchStrapi } from './fetchStrapi'
import { PublishedDocument } from '@/types/PublishedDocument'
import { ResponseData } from '@/types/ResponseData'
import { REVALIDATE_TIME } from '@/config/environtment'
import { StrapiRevalidateTag } from '@/enums/StrapiCacheEnum'

export async function getPublishedDocuments(
  locale: string,
  perPage = 100,
  revalidate = REVALIDATE_TIME
): Promise<ResponseData<PublishedDocument[]>> {
  const res = await fetchStrapi(
    l => `${process.env.STRAPI_BASE_URL}/api/published-documents?status=published&sort=year:desc&populate[q1][populate]=file&populate[q2][populate]=file&populate[q3][populate]=file&populate[annual][populate]=file&locale=${l}&pagination[pageSize]=${perPage}`,
    locale,
    {
      next: {
        revalidate,
        tags: [StrapiRevalidateTag.PublishedDocument],
      },
    }
  )

  if (!res.ok) throw new Error('Failed to fetch published documents')

  return await res.json()
}
