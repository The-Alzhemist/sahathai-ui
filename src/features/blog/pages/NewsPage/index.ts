import { BlogPage } from './BlogPage'
import { withBlogPage } from '@/features/blog/pages/NewsPage/withBlogPage'

const ConnectedBlogPage = withBlogPage(BlogPage)

export { ConnectedBlogPage as BlogPage }
