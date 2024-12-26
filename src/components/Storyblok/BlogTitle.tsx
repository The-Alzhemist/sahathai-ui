import { storyblokEditable } from '@storyblok/react/rsc'

const BlogTitle: React.FC<any> = ({ blok }) => {
  return (
    <main {...storyblokEditable(blok)}>
      <div>{blok?.blogTitleName ? blok.blogTitleName : ''}</div>
      <div>{blok?.blogTitleDate ? blok.blogTitleDate : ''}</div>
    </main>
  )
}

export default BlogTitle
