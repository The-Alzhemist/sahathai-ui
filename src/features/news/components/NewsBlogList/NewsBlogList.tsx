import { NewsCard } from '@/components/NewsCard'

import { fetchData, fetchNewsBlogListData } from '@/libs/storyblok'
import { StoryblokStory } from '@storyblok/react/rsc'
import React from 'react'

export default async function NewsBlogList() {
  const { data } = await fetchNewsBlogListData()
  const datas = data
  console.log('data:::', data)

  return (
    <section className='max-w-[1200px] flex flex-wrap px-5 gap-5 mx-auto mb-10 flex-col md:flex-row justify-center items-center'>
      {datas.stories.map((newsBlog: any) => (
        <NewsCard
          title={newsBlog.content.body[0].newsTitle}
          content={newsBlog.content}
          createdAt={newsBlog.createdAt}
          fullSlug={newsBlog.full_slug}
        />
      ))}
    </section>
  )
}
