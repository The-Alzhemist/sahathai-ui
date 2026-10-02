import { ShareholdingStructure } from '@/types/ShareholdingStructure'
import { ResponseData } from '@/types/ResponseData'
import { REVALIDATE_TIME } from '@/config/environtment'
import { StrapiRevalidateTag } from '@/enums/StrapiCacheEnum'

export async function getShareholdingStructure(
  locale: string,
  revalidate = REVALIDATE_TIME
): Promise<ResponseData<ShareholdingStructure>> {
  const res = await fetch(
    `${process.env.STRAPI_BASE_URL}/api/shareholding-structure?status=published&locale=${locale}&populate=chartImage`,
    {
      next: {
        revalidate,
        tags: [StrapiRevalidateTag.ShareholdingStructure],
      },
    }
  )

  if (res.status === 404) {
    return {
      data: {
        id: 0,
        documentId: '',
        details: '',
        chartImage: null,
        locale,
        publishedAt: '',
        createdAt: '',
        updatedAt: '',
      },
      meta: { pagination: { page: 1, pageSize: 0, pageCount: 0, total: 0 } },
    }
  }

  if (!res.ok) throw new Error('Failed to fetch shareholding structure')

  return await res.json()
}
