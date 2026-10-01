import { AnnualReport } from '@/types/AnnualReport'
import { ResponseData } from '@/types/ResponseData'
import { REVALIDATE_TIME } from '@/config/environtment'
import { StrapiRevalidateTag } from '@/enums/StrapiCacheEnum'

export async function getAnnualReports(
  locale: string,
  perPage = 100,
  revalidate = REVALIDATE_TIME
): Promise<ResponseData<AnnualReport[]>> {
  const res = await fetch(
    `${process.env.STRAPI_BASE_URL}/api/annual-reports?status=published&sort=year:desc&populate[annualReport][populate]=file&populate[report56_1][populate]=file&populate[oneReport][populate]=file&locale=${locale}&pagination[pageSize]=${perPage}`,
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
