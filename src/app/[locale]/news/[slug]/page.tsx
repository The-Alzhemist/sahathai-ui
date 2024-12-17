import { fetchData } from '@/libs/storyblok'
import { StoryblokStory } from '@storyblok/react/rsc'

interface Post {
  id: string
  title: string
  content: string
}

export const revalidate = 60 // revalidate every 10 min

export const dynamicParams = true // or false, to 404 on unknown paths

export async function generateStaticParams() {
  const locales = ['th', 'en']

  const slugs = ['1']
  const { data } = await fetchData()

  return slugs.flatMap(slug =>
    locales.map(locale => ({
      slug: slug,
      locale: locale,
      data,
    }))
  )
}

export default async function Page({ params }: { params: any }) {
  const { slug, locale } = params
  const { data } = await fetchData()

  return (
    <section className='relative flex-col'>
      <section className='max-w-[990px] px-5 mx-auto mt-[80px]'>
        <div className='flex justify-between mb-8'>
          <h1 className='text-xl md:text-3xl text-navy'>ข่าวประชาสัมพันธ์</h1>
          <button className='text-sm text-gray-500 border border-gray-500 px-4 py-1 rounded-3xl'>
            กลับไปหน้าแรก
          </button>
        </div>

        <StoryblokStory story={data?.story} />
      </section>
    </section>
  )
}
