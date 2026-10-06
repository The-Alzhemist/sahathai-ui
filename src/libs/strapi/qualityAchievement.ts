import { fetchStrapi } from './fetchStrapi'
import { QualityAchievement } from '@/types/QualityAchievement'
import { ResponseData } from '@/types/ResponseData'
import { REVALIDATE_TIME } from '@/config/environtment'
import { StrapiRevalidateTag } from '@/enums/StrapiCacheEnum'

export async function getQualityAchievement(
  locale: string,
  revalidate = REVALIDATE_TIME
): Promise<ResponseData<QualityAchievement>> {
  const res = await fetchStrapi(
    l => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/quality-achievement?status=published&locale=${l}&populate[items][populate]=image`,
    locale,
    {
      next: {
        revalidate,
        tags: [StrapiRevalidateTag.QualityAchievement],
      },
    }
  )

  if (res.status === 404) {
    return {
      data: {
        id: 0,
        documentId: '',
        description: [],
        items: [],
        locale,
        publishedAt: '',
        createdAt: '',
        updatedAt: '',
      },
      meta: { pagination: { page: 1, pageSize: 0, pageCount: 0, total: 0 } },
    }
  }

  if (!res.ok) throw new Error('Failed to fetch quality achievement')

  return await res.json()
}
