import { fetchStrapi } from './fetchStrapi'
import { EService } from '@/types/EService'
import { ResponseData } from '@/types/ResponseData'
import { REVALIDATE_TIME } from '@/config/environtment'
import { StrapiRevalidateTag } from '@/enums/StrapiCacheEnum'

export async function getEServices(
  locale: string,
  revalidate = REVALIDATE_TIME
): Promise<ResponseData<EService[]>> {
  const res = await fetchStrapi(
    l => `${process.env.STRAPI_BASE_URL}/api/e-services?status=published&locale=${l}&sort=order:asc&populate=image`,
    locale,
    {
      next: {
        revalidate,
        tags: [StrapiRevalidateTag.EService],
      },
    }
  )

  if (!res.ok) throw new Error('Failed to fetch e-services')

  return await res.json()
}
