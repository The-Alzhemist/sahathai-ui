import { storyblokEditable } from '@storyblok/react/rsc'

const FallbackComponent = ({ blok }) => {
  return (
    <h2 data-cy='fallback' {...storyblokEditable(blok)}>
      This component doesn't exists: {blok.component}
    </h2>
  )
}

export default FallbackComponent
