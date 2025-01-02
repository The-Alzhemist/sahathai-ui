import { Link } from '@/libs/intl/navigation'
import { fetchDataBySlug, fetchNewsBlogListData } from '@/libs/storyblok'
import { StoryblokStory } from '@storyblok/react/rsc'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

export const revalidate = 600 // revalidate every 600 seconds(10min)
export const dynamicParams = true // or false, to 404 on unknown paths

export async function generateStaticParams() {
  const locales = ['th', 'en', 'cn']

  // Fetch slugs for each locale
  const slugs = await Promise.all(
    locales.map(async locale => {
      const { data } = await fetchNewsBlogListData(1, 99, locale) // Pass locale as lang
      return data.stories.map((d: any) => ({
        slug: d.slug,
        locale: locale,
      }))
    })
  )

  // console.log('slugs noflat()::', slugs)
  // console.log('slugs.flat()::', slugs.flat())

  return slugs.flat()
}

export default async function Page({ params }: { params: any }) {
  const { slug, locale } = params
  const { data } = await fetchDataBySlug(slug, locale)
  const t = await getTranslations('NewsPage')

  return (
    <section className='relative flex-col'>
      <section className='max-w-[990px] px-5 mx-auto mt-[80px]'>
        <div className='flex justify-between mb-8'>
          <h1 className='text-xl md:text-3xl text-navy'>
            {t('PageContent.Title')}
          </h1>
          <button className='text-sm text-gray-500 border border-gray-500 px-4 py-1 rounded-3xl'>
            <Link href='/news'> {t('PageContent.Back')}</Link>
          </button>
        </div>

        <StoryblokStory story={data?.story} />
      </section>
    </section>
  )
}

export async function generateMetadata({
  params: { slug, locale },
}: {
  params: {
    locale: string
    slug: string
  }
}) {
  const { data } = await fetchDataBySlug(slug, locale)

  const body = data.story.content.body
  if (!body || body.length === 0) {
    return {
      title: 'Sahathai | blog',
      description: '',
      openGraph: {
        title: 'Sahathai | blog',
        description: '',
        images: [
          {
            url: 'https://sahathai-ui.vercel.app/seo/meta-image-home.jpg',
            width: 800,
            height: 600,
            alt: 'sahathai-meta-image-blog',
          },
          {
            url: 'https://sahathai-ui.vercel.app/logo/meta/meta-tag-projects.jpg',
            width: 1800,
            height: 1600,
            alt: 'sahathai-meta-image-blog',
          },
        ],
      },
      type: 'website',
    }
  }

  const { metaTitle, metaDescription, metaImage } = body[0]

  return {
    title: metaTitle ?? 'Sahathai | blog',
    description: metaDescription ?? '',
    openGraph: {
      title: metaTitle ?? 'Sahathai | blog',
      description: metaDescription ?? '',
      images: [
        {
          url: metaImage
            ? metaImage.filename
            : 'https://sahathai-ui.vercel.app/seo/meta-image-home.jpg',
          width: 800,
          height: 600,
          alt: metaTitle ? metaTitle : 'sahathai-meta-image-blog',
        },
        {
          url: metaImage
            ? metaImage.filename
            : 'https://sahathai-ui.vercel.app/' +
              '/logo/meta/meta-tag-projects.jpg',
          width: 1800,
          height: 1600,
          alt: metaTitle ? metaTitle : 'sahathai-meta-image-blog',
        },
      ],
    },
    type: 'website',
  }
}
