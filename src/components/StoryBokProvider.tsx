'use client'

import { getStoryblokApi } from '@/libs/storyblok'

export default function StoryblokProvider({ children }: any) {
  getStoryblokApi()
  return children
}
