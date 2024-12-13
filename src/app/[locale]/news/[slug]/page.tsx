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

export const revalidate = 60
export const dynamicParams = false

export async function generateStaticParams() {
  const locales = ['th', 'en']
  const slugs = ['1']
  const { data } = await fetchData()

  return slugs.flatMap(slug =>
    locales.map(locale => ({
      slug,
      locale,
      data,
    }))
  )
}

export default async function Page({ params }: any) {
  console.log('param::', params)
  const { slug, locale, data } = params
  // const { data } = await fetchData()

  unstable_setRequestLocale(locale)

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
