import { getStoryblokApi } from '@/libs/storyblok'
import { StoryblokStory } from '@storyblok/react/rsc'

export default async function page() {
  const { data } = await fetchData()
  console.log('data:::::::::::::::::', data)
  console.log('body:::::::::::::::::', JSON.stringify(data))

  return (
    <div>
      <StoryblokStory story={data.story} />
    </div>
  )
}

export async function fetchData() {
  const storyblokApi = getStoryblokApi()
  return storyblokApi.get('cdn/stories/home', { version: 'draft' })
}
