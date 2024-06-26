import { NewsPage } from './NewsPage'
import { withNewsPage } from './withNewsPage'

const ConnectedNewsPage = withNewsPage(NewsPage)

export { ConnectedNewsPage as NewsPage }
