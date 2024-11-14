import { ContactTypeField } from './ContactTypeField'
import { withContactTypeField } from './withContactTypeField'

const ConnectedContactTypeField = withContactTypeField(ContactTypeField)

export { ConnectedContactTypeField as ContactTypeField }
