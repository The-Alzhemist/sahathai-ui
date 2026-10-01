import { FinancialInfo } from '@/types/FinancialInfo'
import { ResponseData } from '@/types/ResponseData'
import { REVALIDATE_TIME } from '@/config/environtment'
import { StrapiRevalidateTag } from '@/enums/StrapiCacheEnum'

export async function getFinancialInfos(
  locale: string,
  revalidate = REVALIDATE_TIME
): Promise<ResponseData<FinancialInfo[]>> {
  const res = await fetch(
    `${process.env.STRAPI_BASE_URL}/api/financial-infos?status=published&sort=year:desc&populate[q1][populate]=file&populate[q2][populate]=file&populate[q3][populate]=file&populate[annual][populate]=file&locale=${locale}`,
    {
      next: {
        revalidate,
        tags: [StrapiRevalidateTag.FinancialInfo],
      },
    }
  )

  if (!res.ok) throw new Error('Failed to fetch financial infos')

  return await res.json()
}
