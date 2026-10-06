import { fetchStrapi } from './fetchStrapi'
import { AnnualReport } from '@/types/AnnualReport'
import { ResponseData } from '@/types/ResponseData'
import { REVALIDATE_TIME } from '@/config/environtment'
import { StrapiRevalidateTag } from '@/enums/StrapiCacheEnum'

export async function getAnnualReports(
  locale: string,
  perPage = 100,
  revalidate = REVALIDATE_TIME
): Promise<ResponseData<AnnualReport[]>> {
  const res = await fetchStrapi(
    l => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/annual-reports?status=published&sort=year:desc&populate[annualReport][populate]=file&populate[report56_1][populate]=file&populate[oneReport][populate]=file&locale=${l}&pagination[pageSize]=${perPage}`,
    locale,
    {
      next: {
        revalidate,
        tags: [StrapiRevalidateTag.AnnualReport],
      },
    }
  )

  if (!res.ok) throw new Error('Failed to fetch annual reports')

  return await res.json()
}
