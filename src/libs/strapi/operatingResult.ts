import { fetchStrapi } from './fetchStrapi'
import { OperatingResult } from '@/types/OperatingResult'
import { ResponseData } from '@/types/ResponseData'
import { REVALIDATE_TIME } from '@/config/environtment'
import { StrapiRevalidateTag } from '@/enums/StrapiCacheEnum'

export async function getOperatingResults(
  locale: string,
  perPage = 100,
  revalidate = REVALIDATE_TIME
): Promise<ResponseData<OperatingResult[]>> {
  const res = await fetchStrapi(
    l => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/operating-results?status=published&sort=year:desc&populate[q1][populate]=file&populate[q2][populate]=file&populate[q3][populate]=file&populate[annual][populate]=file&locale=${l}&pagination[pageSize]=${perPage}`,
    locale,
    {
      next: {
        revalidate,
        tags: [StrapiRevalidateTag.OperatingResult],
      },
    }
  )

  if (!res.ok) throw new Error('Failed to fetch operating results')

  return await res.json()
}
