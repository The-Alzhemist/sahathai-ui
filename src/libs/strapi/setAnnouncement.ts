import { SetAnnouncement } from '@/types/SetAnnouncement'
import { ResponseData } from '@/types/ResponseData'
import { REVALIDATE_TIME } from '@/config/environtment'
import { StrapiRevalidateTag } from '@/enums/StrapiCacheEnum'

export async function getSetAnnouncements(
  locale: string,
  perPage = 100,
  revalidate = REVALIDATE_TIME
): Promise<ResponseData<SetAnnouncement[]>> {
  const res = await fetch(
    `${process.env.STRAPI_BASE_URL}/api/set-announcements?status=published&sort=year:desc&populate[items][populate]=file&locale=${locale}&pagination[pageSize]=${perPage}`,
    {
      next: {
        revalidate,
        tags: [StrapiRevalidateTag.SetAnnouncement],
      },
    }
  )

  if (!res.ok) throw new Error('Failed to fetch SET announcements')

  return await res.json()
}
