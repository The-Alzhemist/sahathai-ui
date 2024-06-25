import { ContainerServicesPage } from './ContainerServicesPage'
import { withContainerServicesPage } from './withContainerServicesPage'

const ConnectedContainerServicesPage = withContainerServicesPage(
  ContainerServicesPage
)

export { ConnectedContainerServicesPage as ContainerServicesPage }
