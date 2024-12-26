import { storyblokEditable } from '@storyblok/react/rsc'
import { render } from 'storyblok-rich-text-react-renderer'
import { StoryblokRichTextOptions, MarkTypes } from '@storyblok/richtext'
import { ReactElement } from 'react'
import { EventNewsDetailCardStoryblok } from '../../../../component-types-sb'
import Image from 'next/image'
import BlogTitle from '@/components/Storyblok/BlogTitle'
import ShowOneImage from '@/components/Storyblok/news/ShowOneImage'
import ShowTwoImage from '@/components/Storyblok/news/ShowTwoImage'
import ShowThreeImage from '@/components/Storyblok/news/ShowThreeImage'

interface EventNewsDetailCardProps {
  blok: EventNewsDetailCardStoryblok
}

const EventNewsDetailCard: React.FC<EventNewsDetailCardProps> = ({ blok }) => {
  return (
    <main {...storyblokEditable(blok)} className='mb-10'>
      <section className='bg-white flex flex-col p-3 md:p-10 rounded-[5px]'>
        <Image
          src={blok.newsImageCover?.filename || '/background.jpeg'}
          alt={blok.newsImageCover?.alt || 'Default background'}
          width={blok.newsImageCover?.width || 800}
          height={blok.newsImageCover?.height || 450}
          className='rounded-[5px] mx-auto mb-5'
          priority
        />
        <div className='text-sm text-gray-600 mb-5'>{blok.newsDate}</div>
        <h2 className='text-navy font-medium mb-3'>{blok.newsTitle}</h2>
        <div className='text-gray-600 k2d '>
          {render(blok.newsDescription, {
            blokResolvers: {
              ['showOneImage']: (props: any) => {
                return <ShowOneImage {...props} />
              },
              ['showTwoImage']: (props: any) => {
                return <ShowTwoImage {...props} />
              },
              ['showThreeImage']: (props: any) => {
                return <ShowThreeImage {...props} />
              },
              ['blogTitle']: props => <BlogTitle {...props} />,
            },
          })}
        </div>
      </section>
    </main>
  )
}

export default EventNewsDetailCard
