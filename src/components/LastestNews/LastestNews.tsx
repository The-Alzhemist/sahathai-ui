import { useLocale, useTranslations } from 'next-intl'

import { Link } from '@/libs/intl/navigation'
import { cn } from '@/libs/util'
import { ArrowRightIcon } from '../icons/ArrowRightIcon'
import { LastestNewsProps } from '@/components/LastestNews/interface'
import { fetchNewsBlogListData } from '@/libs/storyblok'
import { extractTextFieldsStoryblok } from '@/utils/extractTextFieldsStoryblok'
import Image from 'next/image'
import { REVALIDATE_TIME } from '@/config/environtment'

export const revalidate = REVALIDATE_TIME

export async function LastestNews() {
  const locale = useLocale()
  const common = useTranslations('common')
  const { data } = await fetchNewsBlogListData(1, 10, locale)
  const dataBlog = data

  const latestNews = dataBlog.stories.filter(
    (d: any, index: number) => index === 0
  )[0]

  const image = latestNews.content.body[0].newsImageCover.filename

  const newsDate = latestNews.content.body[0].newsDate

  return (
    <section
      className={cn(
        'flex flex-col md:flex-row max-w-[862px] bg-white rounded-[10px] overflow-hidden'
      )}
    >
      <div className='w-full md:w-[48%]'>
        {image ? (
          <Image
            src={image}
            alt='Dynamic image'
            width={600} // Replace with your desired width
            height={500} // Replace with your desired height
            className='w-full h-full'
          />
        ) : (
          <img
            src='https://placehold.co/600x400'
            alt='Placeholder image'
            className='w-full'
          />
        )}
      </div>

      <div className='w-full md:w-[52%] p-5'>
        <h2 className='mt-[23px] headline-4 line-clamp-2 text-black'>
          {latestNews.content.body[0].newsTitle}
        </h2>
        <p className='mt-[10px] body-2 line-clamp-2 text-black-6'>
          {extractTextFieldsStoryblok(
            latestNews.content.body[0].newsDescription
          )}
        </p>
        <div className='mt-[10px] caption text-black-3'>{newsDate}</div>

        <Link
          href={`/news/${latestNews.slug}`}
          className='mt-[23px] button-small text-navy  w-fit flex gap-[10px] items-center'
        >
          <button
            className='p-[10px] bg-navy rounded-full text-white'
            type='button'
          >
            <ArrowRightIcon width='20' height='20' />
          </button>
          {common('readMore')}
        </Link>
      </div>
    </section>
  )
}

{
}
