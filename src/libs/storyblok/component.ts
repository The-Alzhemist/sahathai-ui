import Page from '@/components/Storyblok/Page'
import EventNewsDetailCard from '@/components/Storyblok/news/EventNewsDetailCard'
import ShowOneImage from '@/components/Storyblok/news/ShowOneImage'
import ShowTwoImage from '@/components/Storyblok/news/ShowTwoImage'
import ShowThreeImage from '@/components/Storyblok/news/ShowThreeImage'
import DownloadLink from '@/components/Storyblok/news/DownloadLink'
import FallbackComponent from '@/components/Storyblok/FallbackComponent'

export const storyblokComponents = {
  page: Page,
  eventNewsDetailCard: EventNewsDetailCard,
  showOneImage: ShowOneImage,
  showTwoImage: ShowTwoImage,
  showThreeImage: ShowThreeImage,
  downloadLink: DownloadLink,
}

export const fallbackComponent = FallbackComponent