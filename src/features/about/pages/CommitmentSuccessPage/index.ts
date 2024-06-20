import { CommitmentSuccessPage } from './CommitmentSuccessPage'
import { withCommitmentSuccessPage } from './withCommitmentSuccessPage'

const ConnectedCommitmentSuccessPage = withCommitmentSuccessPage(
  CommitmentSuccessPage
)

export { ConnectedCommitmentSuccessPage as CommitmentSuccessPage }
