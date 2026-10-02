import { fetchStrapi } from './fetchStrapi'
import { Committee } from '@/types/Committee'
import { ResponseData } from '@/types/ResponseData'
import { REVALIDATE_TIME } from '@/config/environtment'
import { StrapiRevalidateTag } from '@/enums/StrapiCacheEnum'

export async function getCommittees(
  locale: string,
  revalidate = REVALIDATE_TIME
): Promise<ResponseData<Committee[]>> {
  const res = await fetchStrapi(
    l => `${process.env.STRAPI_BASE_URL}/api/committees?status=published&sort=order:asc&populate[content][on][shared.rich-text]=true&populate[content][on][shared.committee-member]=true&locale=${l}`,
    locale,
    {
      next: {
        revalidate,
        tags: [StrapiRevalidateTag.Committee],
      },
    }
  )

  if (!res.ok) throw new Error('Failed to fetch committees')

  return await res.json()
}
