import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { getArticleBySlug } from '@/libs/strapi/article'
import { getStrapiImageUrl } from '@/libs/util'

type ArticleSection =
  | 'CompanyNews'
  | 'PressRelease'
  | 'Blog'
  | 'SocialResponsibility'

// SEO for an article detail page. Prefers the article's `seo` component from
// the CMS, then falls back to the article itself, then to the section defaults.
export async function getArticleMetadata({
  slug,
  locale,
  section,
}: {
  slug: string
  locale: string
  section: ArticleSection
}): Promise<Metadata> {
  const t = await getTranslations('MetaData')
  const article = await getArticleBySlug(slug, locale)

  const title = article?.seo?.metaTitle || article?.title || t(`${section}.Title`)
  const description =
    article?.seo?.metaDescription ||
    article?.shortDescription ||
    t(`${section}.Description`)

  const media = article?.seo?.shareImage ?? article?.cover
  const image = media
    ? {
        url: getStrapiImageUrl(media.url),
        width: media.width,
        height: media.height,
        alt: media.alternativeText || title,
      }
    : {
        url: `${process.env.DOMAIN_NAME}/seo/news/news-meta-img-${locale}.png`,
        width: 800,
        height: 600,
        alt: title,
      }

  return {
    title,
    description,
    openGraph: {
      type: 'article',
      title,
      description,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image.url],
    },
  }
}
