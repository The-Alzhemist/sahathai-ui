import { TabStoryblok } from '@/types/storyblok'

export interface AccordionTabsProps {
  isOpen: boolean
  tabItem: TabStoryblok
  toggleTab: (uid: string) => void
}
