import { fetchStrapi } from './fetchStrapi'
import { Person } from '@/types/Person'
import { ResponseData } from '@/types/ResponseData'
import { REVALIDATE_TIME } from '@/config/environtment'
import { StrapiRevalidateTag } from '@/enums/StrapiCacheEnum'

export async function getPersons(
  locale: string,
  revalidate = REVALIDATE_TIME
): Promise<ResponseData<Person[]>> {
  const res = await fetchStrapi(
    l => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/people?status=published&populate=*&pagination[pageSize]=100&pagination[page]=1&locale=${l}`,
    locale,
    {
      next: {
        revalidate,
        tags: [StrapiRevalidateTag.Person],
      },
    }
  )

  if (!res.ok) throw new Error('Failed to fetch persons')

  return await res.json()
}
