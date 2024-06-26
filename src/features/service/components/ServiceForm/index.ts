'use client'
import { ServiceForm } from './ServiceForm'
import { withServiceForm } from './withServiceForm'

const ConnectedServiceForm = withServiceForm(ServiceForm)

export { ConnectedServiceForm as ServiceForm }
