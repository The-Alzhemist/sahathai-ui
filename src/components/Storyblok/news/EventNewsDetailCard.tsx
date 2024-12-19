import { storyblokEditable } from '@storyblok/react/rsc'
import { renderRichText } from '@storyblok/react'

const EventNewsDetailCard: React.FC<any> = ({ blok }) => {
  const renderedRichText = renderRichText(blok.newsDescription)
  return (
    <main {...storyblokEditable(blok)} className='mb-10'>
      <section className='bg-white flex flex-col p-3 md:p-10 rounded-[5px]'>
        <img
          src={
            blok.newsImageCover
              ? blok.newsImageCover.filename
              : '/background.jpeg'
          }
          className='rounded-[5px] w-90% mx-auto mb-5'
        />

        <div className='text-sm text-gray-600 mb-5'>25 June 2024</div>
        <h2 className=' text-navy font-medium mb-3'>{blok.newsTitle}</h2>
        <div
          className='text-gray-600'
          dangerouslySetInnerHTML={{ __html: renderedRichText }}
        />
      </section>
    </main>
  )
}

//

export default EventNewsDetailCard
