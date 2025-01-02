import FallbackComponent from '@/components/Storyblok/FallbackComponent'

import DownloadLink from '@/components/Storyblok/news/DownloadLink'
import EventNewsDetailCard from '@/components/Storyblok/news/EventNewsDetailCard'
import ShowOneImage from '@/components/Storyblok/news/ShowOneImage'
import ShowThreeImage from '@/components/Storyblok/news/ShowThreeImage'
import ShowTwoImage from '@/components/Storyblok/news/ShowTwoImage'

import Page from '@/components/Storyblok/Page'
import { STORYBLOK_TOKEN } from '@/config/environtment'

import {
  apiPlugin,
  ISbStoriesParams,
  storyblokInit,
} from '@storyblok/react/rsc'

export const getStoryblokApi = storyblokInit({
  accessToken: STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page, // default
    eventNewsDetailCard: EventNewsDetailCard,

    showOneImage: ShowOneImage,
    showTwoImage: ShowTwoImage,
    showThreeImage: ShowThreeImage,
    downloadLink: DownloadLink,
  },

  enableFallbackComponent: true,
  customFallbackComponent: FallbackComponent,
})

export async function fetchDataBySlug(slug: string, lang: string) {
  const sbParams: ISbStoriesParams = {
    version: 'draft', // or 'draft' based on your needs
    language: lang,
  }

  const storyblokApi = getStoryblokApi()
  const storyBookData = storyblokApi.get(`cdn/stories/news/${slug}`, sbParams)
  return storyBookData
}

export async function fetchNewsBlogListData(
  page: number = 1,
  perPage: number = 10,
  lang: string = 'en' // default language
) {
  const storyblokApi = getStoryblokApi()

  const sbParams: ISbStoriesParams = {
    version: 'draft',
    starts_with: 'news/',
    is_startpage: false,
    page: page,
    per_page: perPage,
    language: lang,
  }

  const storyBookData = await storyblokApi.get(`cdn/stories`, sbParams)
  return storyBookData
}

export async function fetchNewsBlogListLengthData(
  page: number = 1,
  perPage: number = 99,
  lang: string = 'en' // default language
) {
  const storyblokApi = getStoryblokApi()

  const sbParams: ISbStoriesParams = {
    version: 'draft', // or 'published' based on your needs
    starts_with: 'news/',
    is_startpage: false,
    page: page,
    per_page: perPage,
    language: lang,
  }

  const storyBookData = await storyblokApi.get(`cdn/stories`, sbParams)
  return storyBookData
}
