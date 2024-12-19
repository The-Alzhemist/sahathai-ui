'use client'

import { NewsCard } from '@/components/NewsCard'
import { Pagination } from '@/components/Pagination'

import { fetchNewsBlogListData } from '@/libs/storyblok'

import React, { useEffect, useState } from 'react'

export default function NewsBlogList() {
  const [newsBlog, setNewsBlog] = useState<any>()

  useEffect(() => {
    fetchNewsBlogListData().then(({ data }) => {
      setNewsBlog(data)
    })
  }, [])

  return (
    <section className='flex flex-col justify-center items-center'>
      <section className='max-w-[1200px] flex flex-wrap px-5 gap-5 mx-auto mb-10 flex-col md:flex-row justify-center items-center'>
        {newsBlog &&
          newsBlog.stories.map((newsBlog: any) => (
            <NewsCard
              key={newsBlog._uid}
              title={newsBlog.content.body[0].newsTitle}
              content={newsBlog.content}
              createdAt={newsBlog.createdAt}
              fullSlug={newsBlog.full_slug}
            />
          ))}
      </section>
      <section>
        {newsBlog && (
          <Pagination
            className='w-full news'
            pageCount={newsBlog?.stories.length}
            pageChange={v => {
              fetchNewsBlogListData(v, newsBlog?.stories.length).then(
                ({ data }) => {
                  setNewsBlog(data)
                }
              )
            }}
          />
        )}
        length:{newsBlog?.stories.length}
      </section>
    </section>
  )
}
