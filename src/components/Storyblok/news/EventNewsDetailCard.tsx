import { storyblokEditable } from '@storyblok/react/rsc'
import { renderRichText } from '@storyblok/react'
import { richTextResolver, StoryblokRichTextOptions } from '@storyblok/richtext'
import { ReactElement } from 'react'
import React from 'react'
import { EventNewsDetailCardStoryblok } from '../../../../component-types-sb'
import Image from 'next/image'

const resolvers = {
  image: (props: any) => {
    return <img className='px-5' src={props.src} alt={props.alt} />
  },
}

const options: StoryblokRichTextOptions<ReactElement> = {
  renderFn: React.createElement,
  keyedResolvers: true,
}

interface EventNewsDetailCardProps {
  blok: EventNewsDetailCardStoryblok
}

const EventNewsDetailCard: React.FC<any> = ({
  blok,
}: EventNewsDetailCardProps) => {
  const html = blok.newsDescription
    ? richTextResolver(options).render(blok.newsDescription as any)
    : null

  return (
    <main {...storyblokEditable(blok)} className='mb-10'>
      <section className='bg-white flex flex-col p-3 md:p-10 rounded-[5px]'>
        <Image
          src={blok.newsImageCover?.filename || '/background.jpeg'}
          alt={blok.newsImageCover?.alt || 'Default background'}
          width={blok.newsImageCover?.width || 800}
          height={blok.newsImageCover?.height || 450}
          className='rounded-[5px] mx-auto mb-5'
          priority={true}
        />
        <div className='text-sm text-gray-600 mb-5'>{blok.newsDate}</div>
        <h2 className=' text-navy font-medium mb-3'>{blok.newsTitle}</h2>
        <div className='text-gray-600' />
        {html}
      </section>
    </main>
  )
}

//

export default EventNewsDetailCard
