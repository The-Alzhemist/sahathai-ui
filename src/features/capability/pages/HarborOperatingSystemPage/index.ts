import { HarborOperatingSystemPage } from './HarborOperatingSystemPage'
import { withHarborOperatingSystemPage } from './withHarborOperatingSystemPage'

const ConnectedHarborOperatingSystemPage = withHarborOperatingSystemPage(
  HarborOperatingSystemPage
)

export { ConnectedHarborOperatingSystemPage as HarborOperatingSystemPage }
