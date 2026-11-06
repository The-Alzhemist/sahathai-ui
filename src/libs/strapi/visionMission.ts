import { fetchStrapi } from './fetchStrapi'
import { VisionMission } from '@/types/VisionMission'
import { ResponseData } from '@/types/ResponseData'
import { REVALIDATE_TIME } from '@/config/environtment'
import { StrapiRevalidateTag } from '@/enums/StrapiCacheEnum'

export async function getVisionMission(
  locale: string,
  revalidate = REVALIDATE_TIME
): Promise<ResponseData<VisionMission>> {
  const res = await fetchStrapi(
    l => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/vision-mission?status=published&locale=${l}&populate[visionImage]=true&populate[missions][populate]=image&populate[coreValues]=true`,
    locale,
    {
      next: {
        revalidate,
        tags: [StrapiRevalidateTag.VisionMission],
      },
    }
  )

  if (res.status === 404) {
    return {
      data: {
        id: 0,
        documentId: '',
        vision: '',
        visionImage: null,
        missions: [],
        coreValues: [],
        locale,
        publishedAt: '',
        createdAt: '',
        updatedAt: '',
      },
      meta: { pagination: { page: 1, pageSize: 0, pageCount: 0, total: 0 } },
    }
  }

  if (!res.ok) throw new Error('Failed to fetch vision mission')

  return await res.json()
}
