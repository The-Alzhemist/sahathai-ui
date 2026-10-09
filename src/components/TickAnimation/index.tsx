'use client'

import { Animation } from '@/components/Animation'
import { useNavigationTick } from '@/context/NavigationTickContext'

// Replays the page animation when the menu re-selects the current page, so
// server-rendered pages don't need to become client components just for this.
export function TickAnimation({ children }: { children: React.ReactNode }) {
  const { tick } = useNavigationTick()

  return <Animation key={tick}>{children}</Animation>
}
