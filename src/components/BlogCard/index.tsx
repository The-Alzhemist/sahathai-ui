import Image from 'next/image'
import { Link } from '@/libs/intl/navigation'
import { useTranslations } from 'next-intl'
import { cn } from '@/libs/util'
import { ArrowRightIcon } from '../icons/ArrowRightIcon'
import { extractTextFieldsStoryblok } from '@/utils/extractTextFieldsStoryblok'
import type { NewsCardProps } from './interface'

export function BlogCard({
  title,
  content,
  createdAt,
  slug,
  direction = 'vertical',
  page = 'news',
}: NewsCardProps) {
  const common = useTranslations('common')

  const body0 = content?.body?.[0]
  const newsDate: string | undefined = body0?.newsDate
  const imageSrc = body0?.newsImageCover?.filename ?? '/background.jpeg'

  return (
    <Link
      href={`/${page}/${slug}`}
      className={cn(
        'block w-full md:w-[290px] overflow-hidden rounded-[8px] p-2  hover:scale-[1.02] hover:shadow-1 transition-all  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'
      )}
    >
      <article className='w-full'>
        <Image
          src={imageSrc}
          alt={title}
          width={500}
          height={500}
          className='w-full h-[250px] md:h-[180px] object-cover rounded-[8px]'
        />

        <h2 className='mt-[16px] headline-4 line-clamp-2 text-black h-[60px]'>
          {title}
        </h2>

        <p className='mt-[8px] body-2 line-clamp-2 text-black-6 h-[42px]'>
          {extractTextFieldsStoryblok(content)}
        </p>

        <div className='mt-[8px] caption text-black-3'>{newsDate}</div>

        <div className='mt-[16px] button-small text-navy w-fit flex gap-[10px] items-center'>
          <span
            aria-hidden
            className='p-[10px] bg-navy rounded-full text-white inline-flex items-center justify-center'
          >
            <ArrowRightIcon width='10' height='10' />
          </span>
          {common('readMore')}
        </div>
      </article>
    </Link>
  )
}
