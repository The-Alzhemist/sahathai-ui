import { fetchStrapi } from './fetchStrapi'
import { ShareHolderMeeting } from '@/types/ShareHolderMeeting'
import { ResponseData } from '@/types/ResponseData'
import { REVALIDATE_TIME } from '@/config/environtment'
import { StrapiRevalidateTag } from '@/enums/StrapiCacheEnum'

export async function getShareHolderMeetings(
  locale: string,
  revalidate = REVALIDATE_TIME
): Promise<ResponseData<ShareHolderMeeting[]>> {
  const res = await fetchStrapi(
    l => `${process.env.STRAPI_BASE_URL}/api/shareholder-meetings?status=published&sort=order:asc&populate[sections][populate][items][populate]=file&locale=${l}`,
    locale,
    {
      next: {
        revalidate,
        tags: [StrapiRevalidateTag.ShareHolderMeeting],
      },
    }
  )

  if (!res.ok) throw new Error('Failed to fetch shareholder meetings')

  return await res.json()
}
