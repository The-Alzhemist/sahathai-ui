'use client'

import { getStoryblokApi } from '@/libs/storyblok'

export default function StoryblokProvider({ children }: any) {
  getStoryblokApi() // Re-initialize on the client
  return children
}
