import { Sustainability } from '@/types/Sustainability'
import { ResponseData } from '@/types/ResponseData'
import { REVALIDATE_TIME } from '@/config/environtment'
import { StrapiRevalidateTag } from '@/enums/StrapiCacheEnum'

export async function getSustainability(
  locale: string,
  revalidate = REVALIDATE_TIME
): Promise<ResponseData<Sustainability>> {
  const res = await fetch(
    `${process.env.STRAPI_BASE_URL}/api/sustainability?status=published&locale=${locale}&populate[bannerImage]=true&populate[bannerFile]=true&populate[policy][populate]=image&populate[goals][populate]=image`,
    {
      next: {
        revalidate,
        tags: [StrapiRevalidateTag.Sustainability],
      },
    }
  )

  if (res.status === 404) {
    return {
      data: {
        id: 0,
        documentId: '',
        bannerText: '',
        bannerImage: null,
        bannerFile: null,
        policy: null,
        goals: null,
        locale,
        publishedAt: '',
        createdAt: '',
        updatedAt: '',
      },
      meta: { pagination: { page: 1, pageSize: 0, pageCount: 0, total: 0 } },
    }
  }

  if (!res.ok) throw new Error('Failed to fetch sustainability')

  return await res.json()
}
