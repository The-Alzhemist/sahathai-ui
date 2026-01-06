import { getTranslations } from 'next-intl/server'
import { StoryblokStory } from '@storyblok/react/rsc'
import Link from 'next/link'
import { fetchBlogBySlug } from '@/libs/storyblok/blogQuery'

export default async function Page({
  params,
}: {
  params: { locale: string; slug: string }
}) {
  const { slug, locale } = params

  // Fetch blog using ISR-aware fetch
  const data = await fetchBlogBySlug(slug, locale)

  const t = await getTranslations('NewsPage')

  return (
    <section className='relative flex-col'>
      <section className='max-w-[990px] px-5 mx-auto mt-[80px]'>
        <div className='flex justify-between mb-8'>
          <h1 className='text-xl md:text-3xl text-navy'>
            {t('PageContent.Title')}
          </h1>
          <button className='text-sm text-gray-500 border border-gray-500 px-4 py-1 rounded-3xl hover:text-blue-300 hover:border-blue-300 transition-all'>
            {/* ✅ keep locale in link */}
            <Link href={`/${locale}/blog`}>{t('PageContent.Back')}</Link>
          </button>
        </div>
        <StoryblokStory story={data.story} />
      </section>
    </section>
  )
}
