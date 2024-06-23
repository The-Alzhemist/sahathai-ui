import { OperationGuidelinesPage } from './OperationGuidelinesPage'
import { withOperationGuidelinesPage } from './withOperationGuidelinesPage'

const ConnectedOperationGuidelinesPage = withOperationGuidelinesPage(
  OperationGuidelinesPage
)

export { ConnectedOperationGuidelinesPage as OperationGuidelinesPage }
