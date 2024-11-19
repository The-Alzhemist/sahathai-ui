import { ContainerHandlingPage } from './ContainerHandlingPage'
import { withContainerHandlingPage } from './withContainerHandlingPage'

const ConnectedContainerHandlingPage = withContainerHandlingPage(
  ContainerHandlingPage
)

export { ConnectedContainerHandlingPage as ContainerHandlingPage }
