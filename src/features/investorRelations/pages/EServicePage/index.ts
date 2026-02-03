'use client'

import { EServicePage } from '@/features/investorRelations/pages/EServicePage/EServicePage'
import { withEServicePage } from '@/features/investorRelations/pages/EServicePage/withEServicePage'

const ConnectedPage = withEServicePage(EServicePage)

export { ConnectedPage as EServicePage }
