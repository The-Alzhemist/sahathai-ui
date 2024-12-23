import {
  storyblokEditable,
  StoryblokServerComponent,
} from '@storyblok/react/rsc'

const ShowOneImage: React.FC<any> = ({ blok }) => {
  return (
    <main {...storyblokEditable(blok)} className='p-5 mx-auto max-w-[500px]'>
      <div>{blok.imageA}</div>
    </main>
  )
}

//

export default ShowOneImage
