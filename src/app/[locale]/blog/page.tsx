
import { getTranslations } from 'next-intl/server'


import { Link } from '@/libs/intl/navigation'
import { BlogCard } from '../../../components/BlogCard'
import React from 'react'
import { Menu } from '@/components/Menu'
import { Banner } from '@/components/Banner'

import { LatestBlogCard } from '@/components/LatestBlogCard/LatestBlogCard'
import { fetchAllBlog, fetchLatestBlog } from '@/libs/storyblok/blogQuery'
import { Pagination } from '@/features/blog/components/Paginate/Pagination'



export const revalidate = 86400 // 5 min

export default async function blog({
                                     params,
                                     searchParams,
                                   }: {
  params: { locale: string }
  searchParams: { page?: string; search?: string }
}) {
  // translation
  const t = await getTranslations('NewsPage')
  const tMenu = await  getTranslations('Menu')


  const locale = params.locale
  const page = Number(searchParams.page ?? 1)
  const perPage = 1
  const search = searchParams.search?.trim() || undefined


  //  fetching data
  const { stories, total } = await fetchAllBlog({
    page,
    perPage,
    lang: locale,
    version: 'published',
    search,
    startsWith: 'blog/',
    revalidate: 86400,
  })

  const latestBlog = await fetchLatestBlog({
    lang: locale,
    version: 'published',
    startsWith: 'blog/',
    revalidate: 86400,
  })

  const totalPages = Math.ceil(total / perPage)


  return (
    <main>
      <Menu />
      <Banner
        imagePath='/about-us/banner.png'
        alt={tMenu('news')}
        caption={tMenu('news')}
      />

      <section className="flex flex-col items-center justify-center py-14 px-6">
        <h2 className="headline-2 text-blue-400 text-center mb-7">
          {t('latestNews')}
        </h2>

       <LatestBlogCard blog={latestBlog} locale={locale} page={'blog'}  />
      </section>


      {/*All blog*/}
      <section className="bg-white">
        <div className="max-w-[1100px] mx-auto p-6">
          <h2 className="headline-2 text-blue-400 text-center mb-7">
            {t('pressRelease')}
          </h2>

          {/* Search box แบบง่าย (Server + link) */}
          {/*<form action="" className="mb-4 flex gap-2">*/}
          {/*  <input*/}
          {/*    name="search"*/}
          {/*    defaultValue={search ?? ''}*/}
          {/*    placeholder="Search news..."*/}
          {/*    className="border px-3 py-1 rounded w-full"*/}
          {/*  />*/}
          {/*  <button className="px-4 py-1 bg-blue-600 text-white rounded">Search</button>*/}
          {/*</form>*/}

          <section className="flex flex-col justify-center items-center">
            <div
              className=" flex flex-wrap px-5 gap-5 mx-auto mb-10 flex-col md:flex-row justify-center items-center">
              {stories.length ? (
                stories.map((s: any) => (
                  <BlogCard
                    key={s.content.body[0]._uid}
                    title={s.content.body[0].newsTitle}
                    content={s.content}
                    createdAt={s.created_at ?? ''}
                    slug={s.slug}
                    page={'blog'}
                  />
                ))
              ) : (
                <p className="text-gray-500">No results found.</p>
              )}
            </div>
          </section>


          {/**/}
          <section className="flex justify-center">
            <Pagination page={page} totalPages={totalPages} search={search} />
          </section>
          {/*  */}

        </div>
      </section>

    </main>
  )
}


export async function generateMetadata() {
  const t = await getTranslations('MetaData')

  return {
    title: t('News.Title'),
    description: t('News.Description'),
    openGraph: {
      title: t('News.Title'),
      description: t('News.Description'),
      images: [
        {
          url: 'https://sahathai-ui.vercel.app' + '/seo/meta-image-news.jpg',
          width: 800,
          height: 600,
          alt: 'sahathai-news-meta-image',
        },
        {
          url: 'https://sahathai-ui.vercel.app' + '/seo/meta-image-news.jpg',
          width: 1800,
          height: 1600,
          alt: 'sahathai-news-meta-image',
        },
      ],
    },

  }
}
