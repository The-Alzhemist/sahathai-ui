import { Service } from '@/types/Service'
import { ResponseData } from '@/types/ResponseData'
import { REVALIDATE_TIME } from '@/config/environtment'
import { StrapiRevalidateTag } from '@/enums/StrapiCacheEnum'

export async function getServices(
  locale: string,
  revalidate = REVALIDATE_TIME
): Promise<ResponseData<Service[]>> {
  const res = await fetch(
    `${process.env.STRAPI_BASE_URL}/api/services?status=published&locale=${locale}&sort=order:asc&populate=icon`,
    {
      next: {
        revalidate,
        tags: [StrapiRevalidateTag.Service],
      },
    }
  )

  if (!res.ok) throw new Error('Failed to fetch services')

  return await res.json()
}
