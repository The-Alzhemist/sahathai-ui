import { TabStoryblok } from '@/types/storyblok'

export interface AccordionTabsProps {
  groupIndex: number
  tabIndex: number
  isOpen: boolean
  tabItem: TabStoryblok
  toggleTab: (groupIndex: number, tabIndex: number) => void
}
