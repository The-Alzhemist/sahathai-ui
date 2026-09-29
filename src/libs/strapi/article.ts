import { ArticleEnum } from '@/enums/ArticleEnum'
import { StrapiRevalidateTag } from '@/enums/StrapiCacheEnum'
import { ArticleCardDataType } from '@/types/ArticleCardDataType'
import { NewsDataType } from '@/types/NewsDataType'
import { ResponseData } from '@/types/ResponseData'
import { REVALIDATE_TIME } from '@/config/environtment'

export const ARTICLE_REVALIDATE_TAG: Record<ArticleEnum, StrapiRevalidateTag> =
  {
    [ArticleEnum.PressRelease]: StrapiRevalidateTag.PressRelease,
    [ArticleEnum.CompanyNews]: StrapiRevalidateTag.CompanyNews,
    [ArticleEnum.Article]: StrapiRevalidateTag.Article,
    [ArticleEnum.SocialResponsibility]: StrapiRevalidateTag.SocialResponsibility,
  }

export async function getArticles({
  type,
  locale,
  page = 1,
  perPage = 25,
  revalidate = REVALIDATE_TIME,
}: {
  type: ArticleEnum
  locale: string
  page?: number
  perPage?: number
  revalidate?: number
}): Promise<ResponseData<ArticleCardDataType[]>> {
  const tag = ARTICLE_REVALIDATE_TAG[type]

  const res = await fetch(
    `http://localhost:1337/api/articles?status=published&filters[type]=${type}&populate=cover&locale=${locale}&pagination[page]=${page}&pagination[pageSize]=${perPage}`,
    {
      next: {
        revalidate: revalidate,
        tags: [tag],
      },
    }
  )

  if (!res.ok) throw new Error(`Failed to fetch article type ${type}`)

  const data = await res.json()

  return data
}

export async function getArticleBySlug(
  slug: string,
  locale: string,
  revalidate = REVALIDATE_TIME
): Promise<NewsDataType> {
  const res = await fetch(
    `http://localhost:1337/api/articles?status=published&populate[cover]=true&populate[description][on][shared.gallery][populate]=files&populate[description][on][shared.media][populate]=file&populate[description][on][shared.rich-text]=true&filters[slug][$eq]=${slug}&locale=${locale}`,
    {
      next: {
        revalidate,
        tags: [`article:${slug}`],
      },
    }
  )

  if (!res.ok) throw new Error(`Failed to fetch article ${slug}`)

  const data = await res.json()

  return data.data[0]
}
