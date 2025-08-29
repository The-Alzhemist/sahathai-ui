
export interface AccordionTabsProps {
  groupIndex: number
  tabIndex: number
  isOpen: boolean
  tabItem: AccordionTabItem
  toggleTab: (groupIndex: number, tabIndex: number) => void
}


 interface AccordionTabItem {
  heading?: string
  row?: AccordionRowItem[]
}


 interface AccordionRowItem {
  heading?: string
  youtubeUrl?: string
  file?: {
    filename?: string
  }
}

