import { CommitmentSuccess } from './CommitmentSuccess'
import { withCommitmentSuccess } from './withCommitmentSuccess'

const ConnectedCommitmentSuccess = withCommitmentSuccess(CommitmentSuccess)

export { ConnectedCommitmentSuccess as CommitmentSuccess }
