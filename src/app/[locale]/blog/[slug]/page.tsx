import { getTranslations } from 'next-intl/server'

import { StoryblokStory } from '@storyblok/react/rsc'
import Link from 'next/link'
import { fetchBlogBySlug } from '@/libs/storyblok/blogQuery'
import { fetchDataBySlug } from '@/libs/storyblok'

const revalidate  = 300

// app/[locale]/blog/[slug]/page.tsx
export default async function Page({ params }: { params: { locale: string; slug: string} }) {
  const { slug, locale } = params
  const { data } = await fetchBlogBySlug(slug, locale)


  const t = await getTranslations('NewsPage')

  return (
    <section className='relative flex-col'>
      <section className='max-w-[990px] px-5 mx-auto mt-[80px]'>
        <div className='flex justify-between mb-8'>
          <h1 className='text-xl md:text-3xl text-navy'>{t('PageContent.Title')}</h1>
          <button className='text-sm text-gray-500 border border-gray-500 px-4 py-1 rounded-3xl'>
            {/* ควรรักษา locale */}
            <Link href={`/${locale}/blog`}>{t('PageContent.Back')}</Link>
          </button>
        </div>
        <StoryblokStory story={data.story} />
      </section>
    </section>
  )
}

// export async function generateMetadata({ params }: { params: { locale: string; slug: string | string[] } }) {
//   const { locale } = params
//   const slug = Array.isArray(params.slug) ? params.slug.join('/') : params.slug // ✅
//
//   // ใช้ draft ช่วงเทส (หรือทำ fallback)
//   const story = await fetchBlogBySlug({
//     slug,
//     lang: locale,
//     revalidate,
//     version: 'draft',  // ✅ ช่วงเทส
//     basePath: 'blog',
//   })
//
//   const body = story?.content?.body
//   if (!Array.isArray(body) || body.length === 0) {
//     return {
//       title: 'Sahathai | blog',
//       description: '',
//       openGraph: {
//         title: 'Sahathai | blog',
//         description: '',
//         images: [
//           { url: 'https://sahathai-ui.vercel.app/seo/meta-image-home.jpg', width: 800, height: 600, alt: 'sahathai-meta-image-blog' },
//           { url: 'https://sahathai-ui.vercel.app/logo/meta/meta-tag-projects.jpg', width: 1800, height: 1600, alt: 'sahathai-meta-image-blog' },
//         ],
//       },
//     }
//   }
//
//   const { metaTitle, metaDescription, metaImage } = body[0] ?? {}
//   const fallback = 'https://sahathai-ui.vercel.app/seo/meta-image-home.jpg'
//
//   return {
//     title: metaTitle ?? 'Sahathai | blog',
//     description: metaDescription ?? '',
//     openGraph: {
//       title: metaTitle ?? 'Sahathai | blog',
//       description: metaDescription ?? '',
//       images: [
//         { url: metaImage?.filename ?? fallback, width: 800, height: 600, alt: metaTitle ?? 'sahathai-meta-image-blog' },
//         { url: metaImage?.filename ?? 'https://sahathai-ui.vercel.app/logo/meta/meta-tag-projects.jpg', width: 1800, height: 1600, alt: metaTitle ?? 'sahathai-meta-image-blog' },
//       ],
//     },
//   }
// }
