export type StoryblokStory = {
  id: number
  name: string
  slug: string
  content: any
  first_published_at?: string
  created_at?: string
}

export type StoryblokListResponse = {
  stories: StoryblokStory[]
}

export type StoryblokSingleResponse = {
  story: StoryblokStory
}