import {
  storyblokEditable,
  StoryblokServerComponent,
} from '@storyblok/react/rsc'
import { ShowOneImageStoryblok } from '../../../../component-types-sb'
import Image from 'next/image'

const ShowOneImage: React.FC<ShowOneImageStoryblok> = props => {
  console.log('blok.ImageA::', props.ImageA?.filename)
  return (
    <main {...storyblokEditable(props)} className='p-5 flex justify-center'>
      {props.ImageA?.filename ? (
        <Image
          src={props.ImageA.filename}
          alt={props.ImageA.alt || 'Image'}
          width={500}
          height={500}
          className='rounded-md  max-w-[90%] md:max-w-[660px] h-auto object-cover px-10'
        />
      ) : (
        <div>No image available</div>
      )}
    </main>
  )
}

//

export default ShowOneImage
