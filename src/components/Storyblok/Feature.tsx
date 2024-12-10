import { storyblokEditable } from '@storyblok/react'

const Feature = ({ blok }: any) => {
  return (
    <div {...storyblokEditable(blok)} key={blok._uid} data-test='feature'>
      <div className='bg-teal-300 p-10 text-gray-700'>
        <div>{blok.name}</div>
        <p>{blok.description}</p>
      </div>
    </div>
  )
}

export default Feature
