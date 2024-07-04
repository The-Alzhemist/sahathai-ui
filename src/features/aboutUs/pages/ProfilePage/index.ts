import { ProfilePage } from './ProfilePage'
import { withProfilePage } from './withProfilePage'

const ConnectedProfilePage = withProfilePage(ProfilePage)

export { ConnectedProfilePage as ProfilePage }
