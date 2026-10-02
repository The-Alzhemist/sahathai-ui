import { fetchStrapi } from './fetchStrapi'
import { CompanyHistory } from '@/types/CompanyHistory'
import { ResponseData } from '@/types/ResponseData'
import { REVALIDATE_TIME } from '@/config/environtment'
import { StrapiRevalidateTag } from '@/enums/StrapiCacheEnum'

export async function getCompanyHistory(
  locale: string,
  revalidate = REVALIDATE_TIME
): Promise<ResponseData<CompanyHistory>> {
  const res = await fetchStrapi(
    l => `${process.env.STRAPI_BASE_URL}/api/company-history?status=published&locale=${l}&populate[timeline][populate][0]=image&populate[timeline][populate][1]=icon`,
    locale,
    {
      next: {
        revalidate,
        tags: [StrapiRevalidateTag.CompanyHistory],
      },
    }
  )

  if (res.status === 404) {
    return {
      data: {
        id: 0,
        documentId: '',
        description: '',
        timeline: [],
        locale,
        publishedAt: '',
        createdAt: '',
        updatedAt: '',
      },
      meta: { pagination: { page: 1, pageSize: 0, pageCount: 0, total: 0 } },
    }
  }

  if (!res.ok) throw new Error('Failed to fetch company history')

  return await res.json()
}
