import { AccordionTabs } from '@/features/investorRelations/components/AccordionTabs'
import { GroupStoryblok, TabStoryblok } from '@/types/storyblok'
import React, { useState } from 'react'

export default function GroupAccordionTabs({
  pageKey = '',
  group,
}: {
  pageKey: string
  group: GroupStoryblok[]
}) {
  const toggleTab = (groupIndex: number, tabIndex: number) => {
    setOpenTabs(prev => {
      const groupOpenTabs = prev[groupIndex] || []
      const newOpenTabs = groupOpenTabs.includes(tabIndex)
        ? groupOpenTabs.filter(i => i !== tabIndex)
        : [...groupOpenTabs, tabIndex]
      return { ...prev, [groupIndex]: newOpenTabs }
    })
  }
  const [openTabs, setOpenTabs] = useState<Record<number, number[]>>({})

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
            {groupItem.tab?.map((tabItem: TabStoryblok, tabIndex: number) => {
              const isOpen = openTabs[groupIndex]?.includes(tabIndex) || false
              return (
                <AccordionTabs
                  tabIndex={tabIndex}
                  key={pageKey + tabIndex}
                  groupIndex={groupIndex}
                  toggleTab={toggleTab}
                  tabItem={tabItem}
                  isOpen={isOpen}
                />
              )
            })}
          </div>
        </div>
      ))}
    </>
  )
}
