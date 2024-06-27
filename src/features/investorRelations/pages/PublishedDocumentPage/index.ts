import { PublishedDocumentPage } from './PublishedDocumentPage'
import { withPublishedDocumentPage } from './withPublishedDocumentPage'

const ConnectedPublishedDocumentPage = withPublishedDocumentPage(
  PublishedDocumentPage
)

export { ConnectedPublishedDocumentPage as PublishedDocumentPage }
