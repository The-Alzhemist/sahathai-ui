import { getTranslations } from 'next-intl/server'

import { getArticleBySlug } from '@/libs/strapi/article'
import { getArticleMetadata } from '@/libs/articleMetadata'
import { PressReleasePage } from '@/features/news/pages/PressReleasePage'
import { LocaleEnum } from '@/enums/LocaleEnum'

export default async function Page({
  params,
}: {
  params: { locale: LocaleEnum; slug: string }
}) {
  const { slug, locale } = params

  const data = await getArticleBySlug(slug, locale)
  const t = await getTranslations('NewsPage')

  return (
    <PressReleasePage
      locale={locale}
      data={data}
      title={t('PageContent.BlogTitle')}
      backHref={`/${locale}/blog`}
    />
  )
}

export function generateMetadata({
  params: { locale, slug },
}: {
  params: { locale: LocaleEnum; slug: string }
}) {
  return getArticleMetadata({ slug, locale, section: 'Blog' })
}
