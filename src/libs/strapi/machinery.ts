import { fetchStrapi } from './fetchStrapi'
import { Machinery } from '@/types/Machinery'
import { ResponseData } from '@/types/ResponseData'
import { REVALIDATE_TIME } from '@/config/environtment'
import { StrapiRevalidateTag } from '@/enums/StrapiCacheEnum'

export async function getMachineries(
  locale: string,
  revalidate = REVALIDATE_TIME
): Promise<ResponseData<Machinery[]>> {
  const res = await fetchStrapi(
    l => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/machineries?status=published&locale=${l}&sort=order:asc&populate=image`,
    locale,
    {
      next: {
        revalidate,
        tags: [StrapiRevalidateTag.Machinery],
      },
    }
  )

  if (!res.ok) throw new Error('Failed to fetch machineries')

  return await res.json()
}
