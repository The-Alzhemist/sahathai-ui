import { PopupBanner } from '@/types/PopupBanner'
import { ResponseData } from '@/types/ResponseData'
import { REVALIDATE_TIME } from '@/config/environtment'
import { StrapiRevalidateTag } from '@/enums/StrapiCacheEnum'

export async function getBannerPopup(
  locale: string,
  revalidate = REVALIDATE_TIME
): Promise<ResponseData<PopupBanner[]>> {
  const res = await fetch(
    `${process.env.STRAPI_BASE_URL}/api/popup-banners?filters[isActive][$eq]=true&populate=image&locale=${locale}`,
    {
      next: {
        revalidate,
        tags: [StrapiRevalidateTag.PopupBanner],
      },
    }
  )

  if (!res.ok) throw new Error('Failed to fetch popup banner')

  return await res.json()
}
