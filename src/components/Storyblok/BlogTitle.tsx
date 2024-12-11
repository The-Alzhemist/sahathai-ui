import {
  storyblokEditable,
  StoryblokServerComponent,
} from '@storyblok/react/rsc'

const BlogTitle: React.FC<any> = ({ blok }) => {
  return (
    <main {...storyblokEditable(blok)}>
      <div>{blok.blogTitleName}</div>
    </main>
  )
}

//

export default BlogTitle
