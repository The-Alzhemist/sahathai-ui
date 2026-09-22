import { AccordionTabs } from '@/features/investorRelations/components/AccordionTabs'
import { GroupStoryblok, TabStoryblok } from '@/types/storyblok'
import React, { useEffect, useState } from 'react'

export default function GroupAccordionTabs({
  pageKey = '',
  group,
}: {
  pageKey: string
  group: GroupStoryblok[]
}) {
  const [openTabs, setOpenTabs] = useState<string[]>([])

  useEffect(() => {
    const ids =
      new URLSearchParams(window.location.search)
        .get('tab')
        ?.split(',')
        .filter(Boolean) ?? []
    setOpenTabs(ids)
    if (!ids[0]) return

    requestAnimationFrame(() =>
      document.getElementById(ids[0])?.scrollIntoView({ block: 'start' })
    )
  }, [])

  const toggleTab = (uid: string) => {
    const next = openTabs.includes(uid)
      ? openTabs.filter(id => id !== uid)
      : [...openTabs, uid]
    setOpenTabs(next)
    const url = new URL(window.location.href)
    next.length
      ? url.searchParams.set('tab', next.join(','))
      : url.searchParams.delete('tab')
    window.history.replaceState(null, '', url)
  }

  if (!group) {
    return <div>No data</div>
  }

  return (
    <>
      {group.map((groupItem: GroupStoryblok, groupIndex: number) => (
        <div key={groupIndex} className=' rounded-md p-4'>
          <h2 className='   text-left text-lg mb-7 text-blue-400 '>
            {groupItem.heading}
          </h2>

          <div className='space-y-4'>
            {groupItem.tab?.map((tabItem: TabStoryblok, tabIndex: number) => (
              <AccordionTabs
                key={pageKey + tabIndex}
                toggleTab={toggleTab}
                tabItem={tabItem}
                isOpen={openTabs.includes(tabItem._uid)}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  )
}
