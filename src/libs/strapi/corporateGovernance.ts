import { CorporateGovernance } from '@/types/CorporateGovernance'
import { ResponseData } from '@/types/ResponseData'
import { REVALIDATE_TIME } from '@/config/environtment'
import { StrapiRevalidateTag } from '@/enums/StrapiCacheEnum'

export async function getCorporateGovernance(
  locale: string,
  revalidate = REVALIDATE_TIME
): Promise<ResponseData<CorporateGovernance>> {
  const res = await fetch(
    `${process.env.STRAPI_BASE_URL}/api/corporate-governance?status=published&populate[documents][populate]=file&locale=${locale}`,
    {
      next: {
        revalidate,
        tags: [StrapiRevalidateTag.CorporateGovernance],
      },
    }
  )

  if (!res.ok) throw new Error('Failed to fetch corporate governance')

  return await res.json()
}
