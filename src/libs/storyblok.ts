import BlogTitle from '@/components/Storyblok/BlogTitle'
import FallbackComponent from '@/components/Storyblok/FallbackComponent'
import Page from '@/components/Storyblok/page'
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc'

// export const getStoryblokApi = storyblokInit({
//   accessToken: 'H1wfrTArHm3VE441H8WQ5wtt',
//   use: [apiPlugin],
//   components: {
//     blogTitle: BlogTitle,
//   },
//   enableFallbackComponent: true,
// })

export const getStoryblokApi = storyblokInit({
  accessToken: 'H1wfrTArHm3VE441H8WQ5wtt',
  use: [apiPlugin],
  components: {
    blogTitle: BlogTitle,
    page: Page,
  },

  // enableFallbackComponent: true,
  enableFallbackComponent: true,
  customFallbackComponent: FallbackComponent,
})
