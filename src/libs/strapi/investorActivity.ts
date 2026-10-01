import { InvestorActivity } from '@/types/InvestorActivity'
import { ResponseData } from '@/types/ResponseData'
import { REVALIDATE_TIME } from '@/config/environtment'
import { StrapiRevalidateTag } from '@/enums/StrapiCacheEnum'

export async function getInvestorActivities(
  locale: string,
  perPage = 100,
  revalidate = REVALIDATE_TIME
): Promise<ResponseData<InvestorActivity[]>> {
  const res = await fetch(
    `${process.env.STRAPI_BASE_URL}/api/investor-activities?status=published&sort=year:desc&locale=${locale}&pagination[pageSize]=${perPage}`,
    {
      next: {
        revalidate,
        tags: [StrapiRevalidateTag.InvestorActivity],
      },
    }
  )

  if (!res.ok) throw new Error('Failed to fetch investor activities')

  return await res.json()
}
