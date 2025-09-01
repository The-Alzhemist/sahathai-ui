import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'
import EventNewsDetailCard from '@/components/Storyblok/news/EventNewsDetailCard'
import ShowOneImage from '@/components/Storyblok/news/ShowOneImage'
import Page from '@/components/Storyblok/Page'
import ShowTwoImage from '@/components/Storyblok/news/ShowTwoImage'
import ShowThreeImage from '@/components/Storyblok/news/ShowThreeImage'
import DownloadLink from '@/components/Storyblok/news/DownloadLink'
import FallbackComponent from '@/components/Storyblok/FallbackComponent'

storyblokInit({
  accessToken: process.env.STORYBLOK_API_KEY,
  use: [apiPlugin],
  components: {
    page: Page,
    eventNewsDetailCard: EventNewsDetailCard,
    showOneImage: ShowOneImage,
    showTwoImage: ShowTwoImage,
    showThreeImage: ShowThreeImage,
    downloadLink: DownloadLink,
  },
  enableFallbackComponent: true,
  customFallbackComponent: FallbackComponent,
})