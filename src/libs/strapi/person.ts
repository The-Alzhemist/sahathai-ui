import { Person } from '@/types/Person'
import { ResponseData } from '@/types/ResponseData'
import { REVALIDATE_TIME } from '@/config/environtment'
import { StrapiRevalidateTag } from '@/enums/StrapiCacheEnum'

export async function getPersons(
  revalidate = REVALIDATE_TIME
): Promise<ResponseData<Person[]>> {
  const res = await fetch(
    `${process.env.STRAPI_BASE_URL}/api/people?status=published&populate=*`,
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
