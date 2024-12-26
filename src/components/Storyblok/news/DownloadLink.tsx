import {
  storyblokEditable,
  StoryblokServerComponent,
} from '@storyblok/react/rsc'
import { ShowOneImageStoryblok } from '../../../../component-types-sb'
import Image from 'next/image'

const DownloadLink: React.FC<any> = props => {
  return (
    <main
      {...storyblokEditable(props)}
      className='flex justify-start gap-x-3 items-center my-5'
    >
      <p className='text-primary font-semibold'>Lorem ipsum dolor sit.</p>
      <a
        className='bg-gray-900 text-white px-4 py-1 font-semibold rounded-full min-w-[40px]'
        href=''
        target='_blank'
        rel='noopener noreferrer'
      >
        Download
      </a>
    </main>
  )
}

export default DownloadLink
