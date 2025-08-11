
import { getTranslations } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { fetchAllBlog, fetchFirstBlog } from '@/libs/storyblok/fetching'
import Link from 'next/link'
import { NewsCard } from '@/components/NewsCard'
import React from 'react'
import { Menu } from '@/components/Menu'
import { Banner } from '@/components/Banner'
import { Animation } from '@/components/Animation'
import { LastestNews } from '@/components/LastestNews/LastestNews'
import { HorizontalBlogCard } from '@/components/HorizontalBlogCard/HorizontalBlogCard'
import { cn } from '@/libs/util'
import Image from 'next/image'
import { extractTextFieldsStoryblok } from '@/utils/extractTextFieldsStoryblok'
import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon'


export const revalidate = 300 // 5 min

export default async function blog({
                                     params,
                                     searchParams,
                                   }: {
  params: { locale: string }
  searchParams: { page?: string; search?: string }
}) {
  const t = await getTranslations('NewsPage')
  const tMenu = await  getTranslations('Menu')
  const locale = params.locale
  const page = Number(searchParams.page ?? 1)
  const perPage = 2
  const search = searchParams.search?.trim() || undefined

  const { stories, total } = await fetchAllBlog({
    page,
    perPage,
    lang: locale,
    version: 'published',
    search,
    startsWith: 'news/',
    revalidate: 300,
  })
  const firstStories = await fetchFirstBlog({
    page,
    perPage,
    lang: locale,
    version: 'published',
    search,
    startsWith: 'news/',
    revalidate: 300,
  })
  console.log("firstStories::",firstStories)

  const totalPages = Math.ceil(total / perPage)

  return (
    <main>
      <Menu />
      <Banner
        imagePath='/about-us/banner.png'
        alt={tMenu('news')}
        caption={tMenu('news')}
      />

      <section className="flex justify-center mb-10 md:mb-5">
        <h2 className="headline-2 text-blue-400 text-center mb-7">
          {t('latestNews')}
        </h2>

        <section
          className={cn(
            'flex flex-col md:flex-row max-w-[862px] bg-white rounded-[10px] overflow-hidden shadow-1'
          )}
        >
          <div className="w-full md:w-[48%]">
            {firstStories ? (
              <Image
                src={firstStories.content.body[0].newsImageCover.filename}
                alt="Dynamic image"
                width={600}
                height={500}
                className="w-full h-full"
              />
            ) : (
              <img
                src="https://placehold.co/600x400"
                alt="Placeholder image"
                className="w-full"
              />
            )}
          </div>

          <div className="w-full md:w-[52%] p-5">
            <h2 className="mt-[23px] headline-4 line-clamp-2 text-black">
             xxx
            </h2>
            <p className="mt-[10px] body-2 line-clamp-2 text-black-6">
              {extractTextFieldsStoryblok(
                firstStories.content.body[0].newsDescription
              )}
            </p>
            <div className="mt-[10px] caption text-black-3">xx</div>

            <Link
              href={`/news/${ firstStories.content.slug}`}
              className="mt-[23px] button-small text-navy  w-fit flex gap-[10px] items-center"
            >
              <button
                className="p-[10px] bg-navy rounded-full text-white"
                type="button"
              >
                <ArrowRightIcon width="20" height="20" />
              </button>
              {/*{common('readMore')}*/}
            </Link>
          </div>
        </section>
        ss
        ssssssxxxxxxx

      </section>


      {/*All blog*/}
      <section className="bg-white">
        <div className="max-w-[1100px] mx-auto p-6">
          <h2 className="headline-2 text-blue-400 text-center mb-7">
            {t('pressRelease')}
          </h2>

          {/* Search box แบบง่าย (Server + link) */}
          <form action="" className="mb-4 flex gap-2">
            <input
              name="search"
              defaultValue={search ?? ''}
              placeholder="Search news..."
              className="border px-3 py-1 rounded w-full"
            />
            <button className="px-4 py-1 bg-blue-600 text-white rounded">Search</button>
          </form>

          <section className="flex flex-col justify-center items-center">
            <div
              className=" flex flex-wrap px-5 gap-5 mx-auto mb-10 flex-col md:flex-row justify-center items-center">
              {stories.length ? (
                stories.map((s) => (
                  <NewsCard
                    key={s.content.body[0]._uid}
                    title={s.content.body[0].newsTitle}
                    content={s.content}
                    createdAt={s.created_at ?? ''}
                    slug={s.slug}
                  />
                ))
              ) : (
                <p className="text-gray-500">No results found.</p>
              )}
            </div>
          </section>


          <section className="flex justify-center">
            {/* Pagination (ใช้ลิงก์ให้ server-render + ISR) */}
            {totalPages > 1 && (
              <div className="flex gap-2 mt-6">
                {Array.from({ length: totalPages }).map((_, i) => {
                  const p = i + 1
                  const qs = new URLSearchParams()
                  if (p !== 1) qs.set('page', String(p))
                  if (search) qs.set('search', search)
                  const href = `?${qs.toString()}`
                  const isActive = p === page
                  return (
                    <Link
                      key={p}
                      href={href}
                      className={`px-3 py-1 rounded border ${isActive ? 'bg-blue-300 text-white' : 'bg-white'}`}
                    >
                      {p}
                    </Link>
                  )
                })}
              </div>
            )}
          </section>

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
