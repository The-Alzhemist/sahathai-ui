"use client"

import { useTranslations } from 'next-intl'
import { Menu } from '@/components/Menu'


import { Banner } from '@/components/Banner'
import { useState } from 'react'
import { FaChevronDown, FaChevronRight } from 'react-icons/fa'
import { DownloadButton } from '@/components/DownloadButton'
import { FinancialInformationPageProps } from '@/features/investorRelations/pages/FinancialInformationPage/interface'



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
          <div key={groupIndex} className="border border-gray-200 rounded-md p-4">
            {/* --- Group Header (always visible) --- */}
            <h2 className="font-bold text-lg mb-3 text-gray-800">
              {groupItem.heading}
            </h2>

            <div className="space-y-4">
              {groupItem.tab?.map((tabItem: any, tabIndex: number) => {
                const isOpen = openTabs[groupIndex]?.includes(tabIndex) || false
                return (
                  <div
                    key={tabIndex}
                    className="border border-gray-200 rounded-md overflow-hidden"
                  >
                    {/* --- Tab Toggle Button --- */}
                    <button
                      onClick={() => toggleTab(groupIndex, tabIndex)}
                      className="w-full flex justify-between items-center text-left px-4 py-3 font-semibold bg-gray-50 hover:bg-gray-100 transition"
                    >
                      <span>{tabItem.heading}</span>
                      {isOpen ? <FaChevronDown /> : <FaChevronRight />}
                    </button>

                    {/* --- Tab Content with Animation --- */}
                    <div
                      className="transition-all duration-500 ease-in-out overflow-hidden bg-white"
                      style={{
                        maxHeight: isOpen ? '1000px' : '0px',
                        opacity: isOpen ? 1 : 0,
                      }}
                    >
                      <div className="p-4  grid md:grid-cols-4">
                        {tabItem.row?.map((rowItem: any, rowIndex: number) => (
                          <div
                            key={rowIndex}
                            className="flex flex-col  items-center border-b border-gray-100  py-3 "
                          >
                            {rowItem.heading && (
                              <h3 className="text-sm text-gray-700 mb-5">
                                {rowItem.heading}
                              </h3>
                            )}


                            {rowItem.file?.filename && (
                              <DownloadButton
                                className={` ${!rowItem.file.filename ? 'opacity-30 pointer-events-none' : ''}`}
                                href={rowItem.file.filename}
                              />
                            )}

                            {/* --- YouTube iframe --- */}
                            {rowItem.youtubeUrl && (
                              <div className="aspect-video w-full">
                                <iframe
                                  className="w-full h-full rounded-md"
                                  src={`${rowItem.youtubeUrl}`}
                                  title={rowItem.heading}
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                ></iframe>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}


