import { ValueAddedServicesPage } from './ValueAddedServicesPage'
import { withValueAddedServicesPage } from './withValueAddedServicesPage'

const ConnectedValueAddedServicesPage = withValueAddedServicesPage(
  ValueAddedServicesPage
)

export { ConnectedValueAddedServicesPage as ValueAddedServicesPage }
