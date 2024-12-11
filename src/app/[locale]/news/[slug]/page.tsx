// import { unstable_setRequestLocale } from 'next-intl/server'
import {
  StoryblokClient,
  ISbStoriesParams,
  StoryblokComponent,
} from '@storyblok/react'
import { StoryblokStory } from '@storyblok/react/rsc'

import { getStoryblokApi } from '@/libs/storyblok'

interface Post {
  id: string
  title: string
  content: string
}

export const revalidate = 60 // Revalidate every 10 minutes
export const dynamicParams = false // Only generate pre-defined paths

export async function generateStaticParams() {
  const locales = ['th', 'en', 'cn'] // Define all supported locales
  const slugs = ['1', '2', '3'] // Your slugs

  return slugs.flatMap(slug =>
    locales.map(locale => ({
      slug,
      locale,
    }))
  )
}

export default async function Page({ params }: any) {
  const { slug, locale } = params
  // unstable_setRequestLocale(locale) // Set the locale for static rendering

  const { data } = await fetchData()
  console.log('data:::', data.story)
  console.log('body:::', JSON.stringify(data.story.content.body))

  return (
    <section className='relative flex-col'>
      <div className='w-full'>
        slug: {slug}, lang: {locale} , uuid: {data.story.uuid}
      </div>

      <div className='bg-yellow-200'>
        <StoryblokStory story={data.story} />
        {/* <StoryblokComponent blok={data.story.content} /> */}
      </div>
    </section>
  )
}

export async function fetchData() {
  let sbParams: ISbStoriesParams = {
    version: 'H1wfrTArHm3VE441H8WQ5wtt' as 'draft' | 'published' | undefined,
  }

  const storyblokApi = getStoryblokApi()
  return storyblokApi.get(`cdn/stories/news/1`, sbParams, { cache: 'no-store' })
}
