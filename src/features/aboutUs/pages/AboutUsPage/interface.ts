import { Dispatch, SetStateAction } from 'react'

import { TabType } from '@/models/TabType'

export interface AboutPageProps {
  tabs: TabType[]
  active: string
  setActive: Dispatch<SetStateAction<string>>
}
