import BlogTitle from '@/components/Storyblok/BlogTitle'
import FallbackComponent from '@/components/Storyblok/FallbackComponent'
import EventNewsDetailCard from '@/components/Storyblok/news/EventNewsDetailCard'
import Page from '@/components/Storyblok/Page'

import {
  apiPlugin,
  ISbStoriesParams,
  storyblokInit,
} from '@storyblok/react/rsc'

export const getStoryblokApi = storyblokInit({
  accessToken: 'H1wfrTArHm3VE441H8WQ5wtt',
  use: [apiPlugin],
  components: {
    blogTitle: BlogTitle,
    eventNewsDetailCard: EventNewsDetailCard,
    page: Page,
  },

  enableFallbackComponent: true,
  customFallbackComponent: FallbackComponent,
})

export async function fetchData(slug: string) {
  const sbParams: ISbStoriesParams = {
    version: 'published', // or 'draft' based on your needs
  }

  const storyblokApi = getStoryblokApi()
  return storyblokApi.get(`cdn/stories/news/${slug}`, sbParams, {
    cache: 'no-store',
  })
}
