import { getTranslations } from 'next-intl/server'

import { BlogCard } from '../../../components/BlogCard'
import React from 'react'
import { Menu } from '@/components/Menu'

import { LatestBlogCard } from '@/components/LatestBlogCard/LatestBlogCard'
import { fetchAllBlog, fetchLastBlog } from '@/libs/storyblok/blogQuery'
import { Pagination } from '@/features/blog/components/Paginate/Pagination'
import Image from 'next/image'
import { Brochure } from '@/features/news/components/Brochure'
import { redirect } from 'next/navigation'


export default async function news({
                                     params,
                                     searchParams,
                                   }: {
  params: { locale: string }
  searchParams: { page?: string; search?: string }
}) {
  // translation
  const t = await getTranslations('NewsPage')

  if (!searchParams.page) {
    redirect(`/${params.locale}/news?page=1`)
  }

  const locale = params.locale
  const page = Number(searchParams.page ?? 1)
  const perPage = 9
  const search = searchParams.search?.trim() || undefined

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

  const totalPages = Math.ceil(total / perPage)

  return (
    <main>
      <Menu />

      <section className='flex flex-col items-center justify-center pt-14 pb-[100px] px-6'>
        <h2 className='headline-2 text-blue-400 text-center mb-7'>
          {t('latestNews')}
        </h2>

        <LatestBlogCard blog={latestBlog} locale={locale} page={'news'} />
      </section>

      {/*All blog*/}
      <section className='bg-white pt-[70px]'>
        <div className='max-w-[1100px] mx-auto p-6'>
          <h2 className='headline-2 text-blue-400 text-center mb-7'>
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

          {/**/}
          <section className='flex justify-center mb-[90px]'>
            <Pagination page={page} totalPages={totalPages} search={search} />
          </section>
          {/*  */}
        </div>
      </section>

      {/* Brochure */}
      <section className='relative  min-h-[450px] flex justify-center items-center px-5'>
        <Image
          src='/news/blog-contact-bg.webp'
          alt='Sustainability Background'
          fill
          className='absolute inset-0 object-cover object-center z-0'
          priority
        />

        <Brochure className='z-10' />
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
