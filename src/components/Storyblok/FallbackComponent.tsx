import { storyblokEditable } from '@storyblok/react/rsc'

const FallbackComponent = ({ blok }: any) => {
  return (
    <h2 data-cy='fallback' {...storyblokEditable(blok)}>
      This component doesnt exists: {blok.component}
    </h2>
  )
}

export default FallbackComponent
