'use server'

import { apiPlugin, storyblokInit } from '@storyblok/react/rsc'
import { STORYBLOK_TOKEN } from '@/config/environtment'
import { fallbackComponent, storyblokComponents } from '@/libs/storyblok/component'


storyblokInit({
  accessToken: STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: storyblokComponents,
  enableFallbackComponent: true,
  customFallbackComponent: fallbackComponent,
})

export async function getStoryblokApiInstance() {
  const { getStoryblokApi } = await import('@storyblok/react/rsc')
  return getStoryblokApi()
}