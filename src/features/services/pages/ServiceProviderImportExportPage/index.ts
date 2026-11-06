import { ServiceProviderImportExportPage } from './ServiceProviderImportExportPage'
import { withServiceProviderImportExportPage } from './withServiceProviderImportExportPage'

const ConnectedServiceProviderImportExportPage =
  withServiceProviderImportExportPage(ServiceProviderImportExportPage)

export { ConnectedServiceProviderImportExportPage as ServiceProviderImportExportPage }
