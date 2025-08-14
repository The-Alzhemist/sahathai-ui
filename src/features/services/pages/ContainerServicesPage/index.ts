import { ContainerServicesPage } from './ContainerServicesPage'
import { witContainerServicesPage } from './witContainerServicesPage'

const ConnectedBargeServicesPage = witContainerServicesPage(ContainerServicesPage)

export { ConnectedBargeServicesPage as BargeServicesPage }
