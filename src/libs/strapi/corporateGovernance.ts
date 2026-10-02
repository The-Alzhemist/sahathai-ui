import { fetchStrapi } from './fetchStrapi'
import { CorporateGovernance } from '@/types/CorporateGovernance'
import { ResponseData } from '@/types/ResponseData'
import { REVALIDATE_TIME } from '@/config/environtment'
import { StrapiRevalidateTag } from '@/enums/StrapiCacheEnum'

export async function getCorporateGovernance(
  locale: string,
  revalidate = REVALIDATE_TIME
): Promise<ResponseData<CorporateGovernance>> {
  const res = await fetchStrapi(
    l => `${process.env.STRAPI_BASE_URL}/api/corporate-governance?status=published&populate[documents][populate]=file&locale=${l}`,
    locale,
    {
      next: {
        revalidate,
        tags: [StrapiRevalidateTag.CorporateGovernance],
      },
    }
  )

  if (res.status === 404) {
    return {
      data: {
        id: 0,
        documentId: '',
        documents: [],
        locale,
        publishedAt: '',
        createdAt: '',
        updatedAt: '',
      },
      meta: { pagination: { page: 1, pageSize: 0, pageCount: 0, total: 0 } },
    }
  }

  if (!res.ok) throw new Error('Failed to fetch corporate governance')

  return await res.json()
}
