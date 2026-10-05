import Image from 'next/image'
import { formatDateTime, getStrapiImageUrl } from '@/libs/util'
import { DisplayStyleEnum } from '@/enums/DisplayStyleEnum'
import { StrapiMediaFile } from '@/types/StrapiMediaFile'
import { StrapiBlocks } from '@/components/StrapiBlocks'

import { ArticleContentProps } from './interface'

function MediaBlockImage({
  file,
  displayStyle,
}: {
  file: StrapiMediaFile
  displayStyle: DisplayStyleEnum
}) {
  const src = getStrapiImageUrl(file.url)

  if (displayStyle === DisplayStyleEnum.Square) {
    return (
      <div className='relative mx-auto aspect-square w-full max-w-[300px] overflow-hidden rounded-[5px]'>
        <Image src={src} alt='' fill className='object-cover' />
      </div>
    )
  }

  return (
    <div className='relative mx-auto w-full max-w-[800px]'>
      <Image
        src={src}
        alt=''
        width={800}
        height={450}
        className='h-auto w-full object-contain'
      />
    </div>
  )
}

export function ArticleContent({
  title,
  publishDate,
  imageUrl,
  description,
}: ArticleContentProps) {
  return (
    <section className='bg-white flex flex-col p-3 md:p-10 rounded-[5px] space-y-[16px] mb-8'>
      <Image
        className='mx-auto'
        src={getStrapiImageUrl(imageUrl)}
        width={800}
        height={450}
        alt=''
      />
      <div className='text-sm text-gray-600'>{formatDateTime(publishDate)}</div>
      <h1 className='text-navy font-medium'>{title}</h1>

      {description.map(block => {
        if (block.__component === 'shared.gallery') {
          return (
            <div
              key={block.id}
              className='grid grid-cols-2 gap-3 md:grid-cols-3'
            >
              {block.files.map(file => (
                <div
                  key={file.documentId}
                  className='relative aspect-[3/2] w-full overflow-hidden rounded-[5px]'
                >
                  <Image
                    src={getStrapiImageUrl(file.url)}
                    alt=''
                    fill
                    className='object-cover'
                  />
                </div>
              ))}
            </div>
          )
        }

        if (block.__component === 'shared.media') {
          return (
            <MediaBlockImage
              key={block.id}
              file={block.file}
              displayStyle={block.displayStyle}
            />
          )
        }

        return (
          <StrapiBlocks
            key={block.id}
            body={block.body}
            className='space-y-3 text-black-6 body-1'
          />
        )
      })}
    </section>
  )
}
