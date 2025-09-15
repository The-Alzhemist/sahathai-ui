import {
  storyblokEditable,
  StoryblokServerComponent,
} from '@storyblok/react/rsc'



import { DownloadLink as DownloadLinkStoryblok } from '.storyblok/types/316761/storyblok-components'

import { SbBlokData } from '@storyblok/react'

const DownloadLink: React.FC<DownloadLinkStoryblok> = props => {
  return (
    <main
      {...storyblokEditable(props as SbBlokData)}
      className='flex w-fit justify-start gap-3 items-center my-5 flex-wrap border rounded-2xl p-3'
    >
      {props.linkURL ? (
        <>
          <p className='text-primary font-semibold'>{props.Title}</p>
          <a
            className='bg-gray-900 text-white px-4 py-1 font-semibold rounded-full min-w-[40px]'
            href={props.linkURL}
            target='_blank'
            rel='noopener noreferrer'
          >
            Download
          </a>
        </>
      ) : (
        <p>No link title or url link</p>
      )}
    </main>
  )
}

export default DownloadLink
