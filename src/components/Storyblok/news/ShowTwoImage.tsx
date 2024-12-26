import { storyblokEditable } from '@storyblok/react/rsc'
import {
  ShowOneImageStoryblok,
  ShowTwoImageStoryblok,
} from '../../../../component-types-sb'
import Image from 'next/image'

const ShowTwoImage: React.FC<ShowTwoImageStoryblok> = props => {
  return (
    <main
      {...storyblokEditable(props)}
      className='p-5 flex justify-center items-center flex-col md:flex-row gap-10 '
    >
      {props.ImageA?.filename ? (
        <Image
          src={props.ImageA.filename}
          alt={props.ImageA.alt || 'Image'}
          width={500}
          height={500}
          className='rounded-md max-w-[100%] md:max-w-[45%] max-h-[350px] object-cover'
        />
      ) : (
        <div>No image available</div>
      )}

      {props.ImageB?.filename ? (
        <Image
          src={props.ImageB.filename}
          alt={props.ImageB.alt || 'Image'}
          width={500}
          height={500}
          className='rounded-md max-w-[100%] md:max-w-[45%] max-h-[350px] object-cover'
        />
      ) : (
        <div>No image available</div>
      )}
    </main>
  )
}

export default ShowTwoImage
