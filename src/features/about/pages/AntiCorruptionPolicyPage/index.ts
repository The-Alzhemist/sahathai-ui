import { AntiCorruptionPolicyPage } from './AntiCorruptionPolicyPage'
import { withAntiCorruptionPolicyPage } from './withAntiCorruptionPolicyPage'

const ConnectedAntiCorruptionPolicyPage = withAntiCorruptionPolicyPage(
  AntiCorruptionPolicyPage
)

export { ConnectedAntiCorruptionPolicyPage as AntiCorruptionPolicyPage }
