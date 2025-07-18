import { NewsCard } from '@/components/NewsCard'
import { REVALIDATE_TIME } from '@/config/environtment'

import { fetchNewsBlogListData } from '@/libs/storyblok'
import { useLocale } from 'next-intl'

import React from 'react'

export const revalidate = REVALIDATE_TIME

export default async function LatestNewsHomePageList() {
  const locale = useLocale()
  const { data } = await fetchNewsBlogListData(1, 10, locale)
  const newsBlog = data

  //   Note: slice mean get only 3 latest news
  const latestNews = newsBlog.stories.slice(0, 3)

  return (
    <section className='max-w-[1200px] flex flex-wrap px-5 gap-5 mx-auto mb-10 flex-col md:flex-row justify-center items-center'>
      {latestNews.map((newsBlog: any) => (
        <NewsCard
          key={newsBlog._uid}
          title={newsBlog.content.body[0].newsTitle}
          content={newsBlog.content}
          createdAt={newsBlog.createdAt}
          slug={newsBlog.slug}
        />
      ))}
    </section>
  )
}
