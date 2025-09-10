


import { getTranslations } from 'next-intl/server'

import { fetchAllBlog, fetchLastBlog } from '@/libs/storyblok/blogQuery'

import { BlogCard } from '@/components/BlogCard'

import React from 'react'



// export function News() {
//   const t = useTranslations('HomePage.News')
//
//   return (
//     <section className='container !my-0 py-[80px] bg-white'>
//       <h2 className='headline-2 text-center text-navy'>{t('title')}</h2>
//       <Animation className='mt-[42px] flex flex-wrap justify-center gap-[32px] max-w-[1100px] mx-auto'>
//         <LatestNewsHomePageList />
//       </Animation>
//     </section>
//   )
// }

export default async function News() {
  // translation
  const t = await getTranslations('NewsPage')



  const locale = 'th'
  const page = Number( 1)
  const perPage = 3
  const search =  undefined

  //  fetching data
  const { stories, total } = await fetchAllBlog({
    page,
    perPage,
    lang: locale,
    version: 'published',
    search,
    startsWith: 'news/',
    tag: 'story:news-list'
  })

  const latestBlog = await fetchLastBlog({
    lang: locale,
    startsWith: 'news/',
    tag: 'story:news-list'
  })


  return (
    <main>

      {/*All blog*/}
      <section className='bg-white py-[70px]'>
        <div className='max-w-[1100px] mx-auto p-6'>
          <h2 className='headline-2 text-blue-400 text-center mb-7'>
            {t('pressRelease')}
          </h2>

          <section className='flex flex-col justify-center items-center '>
            <div className=' flex flex-wrap px-5 gap-5 mx-auto mb-10 flex-col md:flex-row justify-center items-center'>
              {stories.length ? (
                stories.map((s: any) => (
                  <BlogCard
                    key={s.content.body[0]._uid}
                    title={s.content.body[0].newsTitle}
                    content={s.content}
                    createdAt={s.created_at ?? ''}
                    slug={s.slug}
                    page={'news'}
                  />
                ))
              ) : (
                <p className='text-gray-500'>No results found.</p>
              )}
            </div>
          </section>


        </div>
      </section>


    </main>
  )
}
