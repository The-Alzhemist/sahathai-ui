import { fetchStrapi } from './fetchStrapi'
import { Policy } from '@/types/Policy'
import { ResponseData } from '@/types/ResponseData'
import { REVALIDATE_TIME } from '@/config/environtment'
import { StrapiRevalidateTag } from '@/enums/StrapiCacheEnum'

export async function getPolicies(
  locale: string,
  revalidate = REVALIDATE_TIME
): Promise<ResponseData<Policy[]>> {
  const res = await fetchStrapi(
    l => `${process.env.STRAPI_BASE_URL}/api/policies?status=published&locale=${l}&populate=*`,
    locale,
    {
      next: {
        revalidate,
        tags: [StrapiRevalidateTag.Policy],
      },
    }
  )

  if (!res.ok) throw new Error('Failed to fetch policies')

  return await res.json()
}
