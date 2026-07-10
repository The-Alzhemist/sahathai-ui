import FallbackComponent from '@/components/Storyblok/FallbackComponent'

import DownloadLink from '@/components/Storyblok/news/DownloadLink'
import EventNewsDetailCard from '@/components/Storyblok/news/EventNewsDetailCard'
import ShowOneImage from '@/components/Storyblok/news/ShowOneImage'
import ShowThreeImage from '@/components/Storyblok/news/ShowThreeImage'
import ShowTwoImage from '@/components/Storyblok/news/ShowTwoImage'

import Page from '@/components/Storyblok/Page'

import { apiPlugin, storyblokInit } from '@storyblok/react/rsc'

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
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
