import { ContainerMaintenancePage } from './ContainerMaintenancePage'
import { withContainerMaintenancePage } from './withContainerMaintenancePage'

const ConnectedContainerMaintenancePage = withContainerMaintenancePage(
  ContainerMaintenancePage
)

export { ConnectedContainerMaintenancePage as ContainerMaintenancePage }
