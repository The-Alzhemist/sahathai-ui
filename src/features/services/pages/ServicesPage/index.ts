import { ServicesPage } from './ServicesPage'
import { withServicesPage } from './withServicesPage'

const ConnectedServicesPage = withServicesPage(ServicesPage)

export { ConnectedServicesPage as ServicesPage }
