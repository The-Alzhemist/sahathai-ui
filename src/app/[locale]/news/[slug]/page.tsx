import {
  StoryblokClient,
  ISbStoriesParams,
  StoryblokComponent,
} from '@storyblok/react'
import { StoryblokServerComponent, StoryblokStory } from '@storyblok/react/rsc'

import { fetchData, getStoryblokApi } from '@/libs/storyblok'
import { unstable_setRequestLocale } from 'next-intl/server'

interface Post {
  id: string
  title: string
  content: string
}

export const revalidate = 60 // Revalidate every 10 minutes
export const dynamicParams = false // Only generate pre-defined paths

export async function generateStaticParams() {
  const locales = ['th', 'en'] // Define all supported locales
  const slugs = ['1'] // Your slugs

  return slugs.flatMap(slug =>
    locales.map(locale => ({
      slug,
      locale,
    }))
  )
}

export default async function Page({ params }: any) {
  const { slug, locale } = params
  const { data } = await fetchData('1')
  console.log('data:::', data)
  unstable_setRequestLocale(locale) // Set the locale for static rendering

  // console.log('data:::', data.story)
  // console.log('body:::', JSON.stringify(data.story.content.body))

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

// export async function fetchData() {
//   let sbParams: ISbStoriesParams = {
//     version: 'H1wfrTArHm3VE441H8WQ5wtt' as 'draft' | 'published' | undefined,
//   }

//   const storyblokApi = getStoryblokApi()
//   return storyblokApi.get(`cdn/stories/news/1`, sbParams, { cache: 'no-store' })
// }
