import { WarehouseServicesPage } from './WarehouseServicesPage'
import { withWarehouseServicesPage } from './withWarehouseServicesPage'

const ConnectedWarehouseServicesPage = withWarehouseServicesPage(
  WarehouseServicesPage
)

export { ConnectedWarehouseServicesPage as WarehouseServicesPage }
