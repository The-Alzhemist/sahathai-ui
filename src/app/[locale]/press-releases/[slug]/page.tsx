import { getTranslations } from 'next-intl/server'

import { getArticleBySlug } from '@/libs/strapi/article'
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
      title={t('PageContent.PressRelease')}
      backHref={`/${locale}/press-releases`}
    />
  )
}
