import { fetchStrapi } from './fetchStrapi'
import { Person } from '@/types/Person'
import { ResponseData } from '@/types/ResponseData'
import { REVALIDATE_TIME } from '@/config/environtment'
import { StrapiRevalidateTag } from '@/enums/StrapiCacheEnum'

async function getPersons(
  filterAndSort: string,
  locale: string,
  revalidate: number
): Promise<ResponseData<Person[]>> {
  const res = await fetchStrapi(
    l => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/people?status=published&${filterAndSort}&populate=*&pagination[pageSize]=100&pagination[page]=1&locale=${l}`,
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

export function getBoardMembers(
  locale: string,
  revalidate = REVALIDATE_TIME
) {
  return getPersons(
    'filters[isBoardMember][$eq]=true&sort=boardOrder:asc',
    locale,
    revalidate
  )
}

export function getExecutives(locale: string, revalidate = REVALIDATE_TIME) {
  return getPersons(
    'filters[isExecutive][$eq]=true&sort=executiveOrder:asc',
    locale,
    revalidate
  )
}
