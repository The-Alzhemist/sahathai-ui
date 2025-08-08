import { ISbStoriesParams } from '@storyblok/react/rsc'
import { getStoryblokApiInstance } from './api'

export async function fetchingDataBySlug(slug: string, lang: string,page:string) {
  const sbParams: ISbStoriesParams = {
    version: 'draft',
    language: lang,
  }

  const storyblokApi = await getStoryblokApiInstance()
  return storyblokApi.get(`cdn/stories/${page}/${slug}`, sbParams)
}

export async function fetchAllBlog(
  page = 1,
  perPage = 10,
  lang = 'en'
) {
  const sbParams: ISbStoriesParams = {
    version: 'published',
    starts_with: 'news/',
    is_startpage: false,
    page,
    per_page: perPage,
    language: lang,
  }

  const storyblokApi = await getStoryblokApiInstance()
  return storyblokApi.get('cdn/stories', sbParams)
}

