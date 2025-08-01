'use client'

import { useState } from 'react'
import { FaChevronDown, FaChevronRight } from 'react-icons/fa'
import QuarterItem
  from '@/features/investorRelations/pages/ShareHolderMeetingPage/component/QuarterAccordientList/components/QuarterItem/QuarterItem'
import {
  QuarterFile
} from '@/features/investorRelations/pages/ShareHolderMeetingPage/component/QuarterAccordientList/components/QuarterItem/interface'


interface QuarterContent {
  heading: string
  quarter1Text?: string
  quarter1File?: QuarterFile
  quarter2Text?: string
  quarter2File?: QuarterFile
  quarter3Text?: string
  quarter3File?: QuarterFile
  annualText?: string
  annualFile?: QuarterFile
}

export default function QuarterAccordionList({
                                               data,
                                             }: {
  data: QuarterContent[]
}) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([])

  const toggleIndex = (index: number) => {
    setOpenIndexes(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <div className="w-full">
      {data.map((item, index) => {
        const isOpen = openIndexes.includes(index)
        return (
          <div
            key={index}
            className="mb-4 border border-gray-200 rounded-md overflow-hidden"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center text-left px-4 py-3 font-semibold bg-gray-100 hover:bg-gray-200 transition"
            >
              <span>{item.heading}</span>
              {isOpen ? <FaChevronDown /> : <FaChevronRight />}
            </button>

            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden bg-white px-4`}
              style={{
                maxHeight: isOpen ? '1000px' : '0px',
                paddingTop: isOpen ? '0.5rem' : '0',
                paddingBottom: isOpen ? '1rem' : '0',
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div className="space-y-4">
                <QuarterItem
                  label="ไตรมาส 1"
                  text={item.quarter1Text}
                  file={item.quarter1File}
                />
                <QuarterItem
                  label="ไตรมาส 2"
                  text={item.quarter2Text}
                  file={item.quarter2File}
                />
                <QuarterItem
                  label="ไตรมาส 3"
                  text={item.quarter3Text}
                  file={item.quarter3File}
                />
                <QuarterItem
                  label="ประจำปี"
                  text={item.annualText}
                  file={item.annualFile}
                />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
