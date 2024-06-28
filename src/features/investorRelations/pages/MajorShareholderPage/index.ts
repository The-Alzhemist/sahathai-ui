import { MajorShareholderPage } from './MajorShareholderPage'
import { withMajorShareholderPage } from './withMajorShareholderPage'

const ConnectedMajorShareholderPage =
  withMajorShareholderPage(MajorShareholderPage)

export { ConnectedMajorShareholderPage as MajorShareholderPage }
