import { TabStoryblok } from '@/types/storyblok'

export interface AccordionTabsProps {
  groupIndex: number
  tabIndex: number
  isOpen: boolean
  tabItem: TabStoryblok
  toggleTab: (groupIndex: number, tabIndex: number) => void
}

interface AccordionTabItem {
  heading?: string
  row?: AccordionRowItem[]
}

interface AccordionRowItem {
  heading?: string
  youtubeUrl?: string
  englishFile?: {
    filename?: string
  }
  chineseFile?: {
    filename?: string
  }
  file?: {
    filename?: string
  }
  externalLink?: string
}
