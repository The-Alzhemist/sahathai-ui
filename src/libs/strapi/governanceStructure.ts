import { fetchStrapi } from './fetchStrapi'
import { GovernanceStructure } from '@/types/GovernanceStructure'
import { ResponseData } from '@/types/ResponseData'
import { REVALIDATE_TIME } from '@/config/environtment'
import { StrapiRevalidateTag } from '@/enums/StrapiCacheEnum'

export async function getGovernanceStructure(
  locale: string,
  revalidate = REVALIDATE_TIME
): Promise<ResponseData<GovernanceStructure>> {
  const res = await fetchStrapi(
    l => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/governance-structure?status=published&locale=${l}&populate=chartImage`,
    locale,
    {
      next: {
        revalidate,
        tags: [StrapiRevalidateTag.GovernanceStructure],
      },
    }
  )

  if (res.status === 404) {
    return {
      data: {
        id: 0,
        documentId: '',
        description: '',
        chartImage: null,
        locale,
        publishedAt: '',
        createdAt: '',
        updatedAt: '',
      },
      meta: { pagination: { page: 1, pageSize: 0, pageCount: 0, total: 0 } },
    }
  }

  if (!res.ok) throw new Error('Failed to fetch governance structure')

  return await res.json()
}
