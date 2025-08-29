"use client"

import { useTranslations } from 'next-intl'
import { Menu } from '@/components/Menu'

import { Banner } from '@/components/Banner'
import { useState } from 'react'

import { FinancialInformationPageProps } from '@/features/investorRelations/pages/FinancialInformationPage/interface'
import { AccordionTabs } from '../../components/AccordionTabs'


export function FinancialInformationPage({financialInformationData}:FinancialInformationPageProps) {
  const t = useTranslations('InvestorInformationPage.FinancialInformation')
  // State to track open tabs per group
  const [openTabs, setOpenTabs] = useState<Record<number, number[]>>({})
  const tMenu = useTranslations('Menu')

  if (!financialInformationData) {
    return <div>No data</div>
  }


  const group = financialInformationData.story.content.body[0].group || []

  const toggleTab = (groupIndex: number, tabIndex: number) => {
    setOpenTabs(prev => {
      const groupOpenTabs = prev[groupIndex] || []
      const newOpenTabs = groupOpenTabs.includes(tabIndex)
        ? groupOpenTabs.filter(i => i !== tabIndex)
        : [...groupOpenTabs, tabIndex]
      return { ...prev, [groupIndex]: newOpenTabs }
    })
  }

  return (
    <main className="pb-[176px] bg-white">
      <Menu />
      <Banner
        imagePath="/about-us/banner.png"
        alt={tMenu('investorRelations.shareHolderMeeting')}
        caption={tMenu('investorRelations.shareHolderMeeting')}
      />

      <section className="p-5 max-w-4xl mx-auto space-y-6">
        {group.map((groupItem: any, groupIndex: number) => (
          <div key={groupIndex} className=" rounded-md p-4">
            {/* --- Group Header (always visible) --- */}
            <h2 className=" text-lg md:text-3xl mb-7 text-blue-400 text-center ">
              {groupItem.heading}
            </h2>

            <div className="space-y-4">
              {groupItem.tab?.map((tabItem: any, tabIndex: number) => {
                const isOpen = openTabs[groupIndex]?.includes(tabIndex) || false
                return (
                  <AccordionTabs tabIndex={tabIndex} key={'financial-' + tabIndex} groupIndex={groupIndex} toggleTab={toggleTab}
                                 tabItem={tabItem} isOpen={isOpen} />
                )
              })}
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}


