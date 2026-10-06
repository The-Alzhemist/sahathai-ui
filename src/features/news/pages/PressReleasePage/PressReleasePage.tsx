import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

import { PressReleasePageProps } from './interface'
import { ArticleContent } from '@/components/ArticleContent'

export async function PressReleasePage({
  locale,
  data,
  title,
  backHref,
}: PressReleasePageProps) {
  const t = await getTranslations('NewsPage')

  return (
    <section className='relative flex-col'>
      <section className='max-w-[990px] px-5 mx-auto mt-[80px]'>
        <div className='flex justify-between mb-8'>
          <div className='text-xl md:text-3xl text-navy'>{title}</div>
          <button className='text-sm text-gray-500 border border-gray-500 px-4 py-1 rounded-3xl hover:text-blue-300 hover:border-blue-300 transition-all'>
            <Link href={backHref}>{t('PageContent.Back')}</Link>
          </button>
        </div>

        <ArticleContent
          title={data.title}
          publishDate={data.publishDate}
          imageUrl={data.cover.url}
          description={data.description}
        />
      </section>
    </section>
  )
}
