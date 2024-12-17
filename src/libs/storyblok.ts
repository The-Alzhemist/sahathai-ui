import BlogTitle from '@/components/Storyblok/BlogTitle'
import FallbackComponent from '@/components/Storyblok/FallbackComponent'
import Grid from '@/components/Storyblok/Grid'
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
    grid: Grid,
  },

  enableFallbackComponent: true,
  customFallbackComponent: FallbackComponent,
})

export async function fetchData() {
  const sbParams: ISbStoriesParams = {
    version: 'draft', // or 'draft' based on your needs
  }

  const storyblokApi = getStoryblokApi()
  const storyBookData = storyblokApi.get(`cdn/stories/news/1`, sbParams)
  return storyBookData
}

export async function fetchNewsBlogListData() {
  const storyblokApi = getStoryblokApi()

  const sbParams: ISbStoriesParams = {
    version: 'draft', // or 'draft' based on your needs
    starts_with: 'news/',
    is_startpage: false,
  }
  const storyBookData = storyblokApi.get(`cdn/stories`, sbParams)
  return storyBookData
}
