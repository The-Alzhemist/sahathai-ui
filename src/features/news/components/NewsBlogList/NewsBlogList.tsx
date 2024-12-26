'use client'

import { NewsCard } from '@/components/NewsCard'
import { Pagination } from '@/components/Pagination'

import {
  fetchNewsBlogListData,
  fetchNewsBlogListLengthData,
} from '@/libs/storyblok'
import { useLocale } from 'next-intl'

import React, { useEffect, useState } from 'react'

export default function NewsBlogList() {
  const [newsBlog, setNewsBlog] = useState<any>()
  const [newsBlogLength, setNewsBLogLength] = useState<number>(1)
  const locale = useLocale()
  const PER_PAGE = 9
  useEffect(() => {
    fetchNewsBlogListLengthData(1, 99, locale).then(({ data }) => {
      setNewsBLogLength(data.stories.length)
    })
    fetchNewsBlogListData(1, PER_PAGE, locale).then(({ data }) => {
      setNewsBlog(data)
    })
  }, [locale])

  return (
    <section className='flex flex-col justify-center items-center'>
      <section className='max-w-[1100px] flex flex-wrap px-5 gap-5 mx-auto mb-10 flex-col md:flex-row justify-center items-center'>
        {newsBlog &&
          newsBlog.stories.map((newsBlog: any) => (
            <NewsCard
              key={newsBlog._uid}
              title={newsBlog.content.body[0].newsTitle}
              content={newsBlog.content}
              createdAt={newsBlog.createdAt}
              slug={newsBlog.slug}
            />
          ))}
      </section>
      <section>
        {newsBlog && (
          <Pagination
            className='w-full news'
            pageCount={newsBlogLength / PER_PAGE}
            pageChange={v => {
              fetchNewsBlogListData(v, PER_PAGE).then(({ data }) => {
                setNewsBlog(data)
              })
            }}
          />
        )}
      </section>
    </section>
  )
}
