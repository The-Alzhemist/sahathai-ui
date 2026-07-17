'use client'

import { Line } from '@/components/Line'
import { useTranslations } from 'next-intl'
import { Animation } from '@/components/Animation'
import { useLayoutEffect, useRef, useState } from 'react'

type Bilingual = { th: string; en: string }

type OfficerColumn = {
  title: Bilingual
  departments: Bilingual[]
}

const GAP_PX = 24

const BOARD: Bilingual = {
  th: 'คณะกรรมการบริษัท',
  en: 'Board of Directors',
}

const COMMITTEES: Bilingual[] = [
  {
    th: 'คณะกรรมการบริหารความเสี่ยง บรรษัทภิบาล และความยั่งยืนของกิจการ',
    en: 'Risk Management, Governance and Sustainability Committee',
  },
  { th: 'คณะกรรมการตรวจสอบ', en: 'Audit Committee' },
  { th: 'คณะกรรมการบริหาร', en: 'Executive Committee' },
  {
    th: 'คณะกรรมการสรรหาและกำหนดค่าตอบแทน',
    en: 'Nomination and Remuneration Committee',
  },
]

const INTERNAL_AUDIT: Bilingual = {
  th: 'ฝ่ายตรวจสอบภายใน',
  en: 'Internal Audit',
}

const COMPLIANCE_UNIT: Bilingual = {
  th: 'หน่วยงานดูแลกำกับองค์กร',
  en: 'Compliance Unit',
}

const CEO: Bilingual = {
  th: 'ประธานเจ้าหน้าที่บริหาร',
  en: 'Chief Executive Officer',
}

const DEPUTY_CEO: Bilingual = {
  th: 'รองประธานเจ้าหน้าที่บริหาร',
  en: 'Deputy Chief Executive Officer',
}

// Direct subordinates of the Deputy CEO
const DEPUTY_CEO_CHILDREN: OfficerColumn[] = [
  {
    title: {
      th: 'ประธานเจ้าหน้าที่ฝ่ายบริหารจัดการ',
      en: 'Chief Administrative Officer',
    },
    departments: [
      { th: 'สายงานทรัพยากรบุคคล', en: 'Human Resource' },
      { th: 'สายงานจัดซื้อ', en: 'Procurement' },
      { th: 'สายงานเทคโนโลยีสารสนเทศ', en: 'Information Technology' },
      { th: 'สายงานธุรการ', en: 'Administration' },
      {
        th: 'สายงานความรับผิดชอบต่อสังคม',
        en: 'Corporate Social Responsibility',
      },
    ],
  },
  {
    title: {
      th: 'ประธานเจ้าหน้าที่ฝ่ายการเงิน',
      en: 'Chief Financial Officer',
    },
    departments: [
      { th: 'สายงานบัญชีและการเงิน', en: 'Accounting and Finance' },
    ],
  },
]

// Officers reporting directly to the CEO (siblings of the Deputy CEO)
const CEO_DIRECT_OFFICERS: OfficerColumn[] = [
  {
    title: {
      th: 'ประธานเจ้าหน้าที่ฝ่ายปฏิบัติการกลุ่มขนส่งทางเรือ',
      en: 'Chief Operating Officer - Terminal',
    },
    departments: [
      {
        th: 'สายงานปฏิบัติการ กลุ่มงานท่าเทียบเรือระหว่างประเทศ',
        en: 'Operation - International Terminal',
      },
      {
        th: 'สายงานปฏิบัติการ กลุ่มงานท่าเทียบเรือในประเทศ',
        en: 'Operation - Inland Terminal',
      },
      {
        th: 'สายงานปฏิบัติการ กลุ่มงานซ่อมบำรุงตู้คอนเทนเนอร์',
        en: 'Operation - Depot Service',
      },
      {
        th: 'สายงานควบคุมคุณภาพ ความปลอดภัย อาชีวอนามัยและสิ่งแวดล้อม',
        en: 'QSSHE',
      },
    ],
  },
  {
    title: {
      th: 'ประธานเจ้าหน้าที่ฝ่ายปฏิบัติการกลุ่มขนส่งและคลังสินค้า',
      en: 'Chief Operating Officer - Logistic Solution',
    },
    departments: [
      {
        th: 'สายงานปฏิบัติการ กลุ่มงานบริการขนส่งและสินค้า',
        en: 'Operation - Freight and Solution',
      },
      { th: 'สายงานปฏิบัติการ กลุ่มงานขนส่งทางบก', en: 'Operation - Trucking' },
      { th: 'สายงานปฏิบัติการ กลุ่มงานขนส่งทางน้ำ', en: 'Operation - Barge' },
      {
        th: 'สายงานปฏิบัติการ กลุ่มงานคลังสินค้า',
        en: 'Operation - Warehouse',
      },
    ],
  },
  {
    title: {
      th: 'ประธานเจ้าหน้าที่ฝ่ายพาณิชย์',
      en: 'Chief Commercial Officer',
    },
    departments: [
      {
        th: 'สายงานพาณิชย์ กลุ่มงานการตลาดท่าเทียบเรือ',
        en: 'Commercial - Terminal',
      },
      {
        th: 'สายงานพาณิชย์ กลุ่มงานด้านลูกค้าและขนส่ง',
        en: 'Freight and Customer Service',
      },
      { th: 'สายงานพาณิชย์ กลุ่มลูกค้าสัมพันธ์', en: 'Customer Service' },
      { th: 'สายงานพาณิชย์ กลุ่มพัฒนาธุรกิจ', en: 'Business Development' },
    ],
  },
]

function columnCenterX(index: number, count: number, gapPx: number): string {
  const percent = ((index + 0.5) / count) * 100
  const px = gapPx * (index - ((index + 0.5) * (count - 1)) / count)
  const sign = px >= 0 ? '+' : '-'
  return `calc(${percent}% ${sign} ${Math.abs(px)}px)`
}

function TreeConnector({
  count,
  gapPx = GAP_PX,
  stemHeight = 24,
  dropHeight = 24,
  dropStyle = 'solid',
  showDropDots = true,
}: {
  count: number
  gapPx?: number
  stemHeight?: number
  dropHeight?: number
  dropStyle?: 'solid' | 'dotted'
  showDropDots?: boolean
}) {
  const totalHeight = stemHeight + dropHeight
  const dropBorderClass =
    dropStyle === 'dotted' ? 'border-l border-dotted' : 'border-l-2'

  return (
    <div
      className='relative block w-full'
      style={{ height: totalHeight }}
    >
      {/* stem down from parent */}
      <div
        className='absolute left-1/2 -translate-x-1/2 top-0 border-l-2 border-secondary'
        style={{ height: stemHeight }}
      />
      {/* dot where stem meets the horizontal split */}
      {/* <div
        className='absolute left-1/2 -translate-x-1/2 w-[6px] h-[6px] rounded-full bg-secondary'
        style={{ top: stemHeight - 3 }}
      /> */}
      {/* horizontal split */}
      <div
        className='absolute border-t-2 border-secondary'
        style={{
          top: stemHeight,
          left: columnCenterX(0, count, gapPx),
          right: `calc(100% - ${columnCenterX(count - 1, count, gapPx)})`,
        }}
      />
      {/* drops into each column, with a dot at the bottom */}
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`absolute ${dropBorderClass} border-secondary -translate-x-1/2`}
          style={{
            top: stemHeight,
            height: dropHeight,
            left: columnCenterX(index, count, gapPx),
          }}
        />
      ))}
    </div>
  )
}

type BilingualBoxVariant =
  | 'dashed'
  | 'solid'
  | 'plain'
  | 'light'
  | 'subordinate'
  | 'dashed-emphasis'

function BilingualBox({
  data,
  variant = 'dashed',
}: {
  data: Bilingual
  variant?: BilingualBoxVariant
}) {
  const borderClass =
    variant === 'dashed' || variant === 'dashed-emphasis'
      ? 'border border-dashed border-secondary'
      : variant === 'solid'
      ? 'border-2 border-secondary'
      : variant === 'light'
      ? 'border border-dashed border-primary/50'
      : variant === 'subordinate'
      ? 'border border-dashed border-secondary'
      : ''

  const textColorClass =
    variant === 'light'
      ? 'text-primary/80'
      : variant === 'subordinate'
      ? 'text-black-3'
      : variant === 'dashed-emphasis'
      ? 'text-secondary'
      : 'text-navy'

  return (
    <div
      className={`${borderClass} relative z-10 rounded-[6px] px-3 py-2 text-center bg-white w-full`}
    >
      <p
        className={`text-xs md:text-sm font-semibold leading-snug ${textColorClass}`}
      >
        {data.th}
      </p>
      <p className='text-[10px] md:text-xs text-black-6 leading-snug mt-[2px]'>
        ({data.en})
      </p>
    </div>
  )
}

export function OrganizationalStructure() {
  const t = useTranslations('AboutUsPage.CorporateGroupOrganizationalStructure')

  // Compliance Unit (under Risk Committee, column 0) and Internal Audit
  // (under Audit Committee, column 1) can end up taller than the CEO's own
  // box depending on how their text wraps. Measure the tallest of the two at
  // runtime and use that to size the bridge down to the CEO's subtree, so it
  // never overlaps regardless of viewport width or content length.
  const gridRef = useRef<HTMLDivElement>(null)
  const column0Ref = useRef<HTMLDivElement>(null)
  const column1Ref = useRef<HTMLDivElement>(null)
  const ceoBoxRef = useRef<HTMLDivElement>(null)
  const [bridgeHeight, setBridgeHeight] = useState(140)
  // How far down CEO's own box needs to start so it lines up with the
  // Compliance Unit / Internal Audit row, plus where the horizontal
  // connector line between them should sit vertically.
  const [ceoDropHeight, setCeoDropHeight] = useState(76)
  const [connectorTop, setConnectorTop] = useState(84)
  // Internal Audit's own bottom edge (relative to the grid), so its dotted
  // line to the CEO can drop straight down from its box first, then bend
  // right into CEO — an L-shape, rather than crossing at Internal Audit's
  // own mid-height.
  const [internalAuditDropTop, setInternalAuditDropTop] = useState(56)

  useLayoutEffect(() => {
    const measure = () => {
      const gridTop = gridRef.current?.getBoundingClientRect().top ?? 0
      const col0Rect = column0Ref.current?.getBoundingClientRect()
      const col1Rect = column1Ref.current?.getBoundingClientRect()
      const col0Bottom = col0Rect?.bottom ?? 0
      const col1Bottom = col1Rect?.bottom ?? 0
      const ceoBottom = ceoBoxRef.current?.getBoundingClientRect().bottom ?? 0
      const tallestBottom = Math.max(col0Bottom, col1Bottom)

      if (tallestBottom && ceoBottom) {
        setBridgeHeight(Math.max(24, tallestBottom - ceoBottom + 24))
      }

      if (col0Rect && gridTop) {
        setCeoDropHeight(Math.max(24, col0Rect.top - gridTop))
        setConnectorTop(
          Math.max(24, col0Rect.top + col0Rect.height / 2 - gridTop)
        )
      }

      if (col1Rect && gridTop) {
        setInternalAuditDropTop(Math.max(24, col1Rect.bottom - gridTop))
      }
    }

    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  return (
    <div>
      <h2 className='mt-[110px] headline-2 text-navy'>
        {t('organizationalStructure.title')}
      </h2>
      <Line className='my-[8px]' />
      <p className='mt-[20px] text-black-6 body-1 whitespace-pre-line'>
        {t.rich(`organizationalStructure.content`, {
          name: chunks => (
            <div className='inline-flex font-semibold  pr-5'>{chunks}</div>
          ),
        })}
      </p>

      <Animation className='w-full mt-[50px] shadow-8 rounded-[15px] overflow-hidden bg-white'>
        <div className='px-5 py-[40px] md:px-[60px] md:py-[60px] overflow-x-auto'>
          <div className='min-w-[900px]'>
            {/* Board of Directors */}
            <div className='flex flex-col items-center'>
              <div className='w-full max-w-[300px] flex items-center mb-2'>
                <hr className='flex-1 border-t-[3px] border-t-blue-300' />
                <hr className='flex-1 border-t-[3px] border-t-red-300' />
              </div>
              <div className='max-w-[280px] w-full'>
                <BilingualBox data={BOARD} variant='solid' />
              </div>
              <div className='w-full max-w-[300px] flex items-center mt-2'>
                <hr className='flex-1 border-t-[3px] border-t-blue-300' />
                <hr className='flex-1 border-t-[3px] border-t-red-300' />
              </div>
            </div>

            <TreeConnector count={5} />

            {/* Board splits into 5 direct siblings: the 4 committees plus the
                CEO, with the CEO placed between the Audit Committee and the
                Executive Committee. Internal Audit and Compliance Unit hang
                below their respective committees but their connector lines
                run across to the CEO (index 2), not to the committee above
                them. */}
            <div ref={gridRef} className='relative grid grid-cols-5 gap-x-6'>
              {COMMITTEES.slice(0, 2).map((committee, index) => (
                <div key={index} className='flex flex-col items-center'>
                  <BilingualBox data={committee} />

                  {index === 1 && (
                    <>
                      <div className='h-6 border-l border-dotted border-lightGray' />
                      <div ref={column1Ref} className='w-full'>
                        <BilingualBox data={INTERNAL_AUDIT} variant='light' />
                      </div>
                    </>
                  )}

                  {index === 0 && (
                    <>
                      <div className='h-6 border-l border-dotted border-lightGray' />
                      <div ref={column0Ref} className='w-full'>
                        <BilingualBox data={COMPLIANCE_UNIT} variant='light' />
                      </div>
                    </>
                  )}
                </div>
              ))}

              {/* CEO: 3rd sibling under the Board, between the Audit
                  Committee and the Executive Committee (not nested under
                  either committee). Its box is dropped down to line up with
                  Compliance Unit / Internal Audit (measured at runtime) so
                  they can all connect at the same height. */}
              <div className='flex flex-col items-center'>
                <div
                  className='border-l-2 border-secondary'
                  style={{ height: ceoDropHeight }}
                />
                <div ref={ceoBoxRef} className='max-w-[240px] w-full'>
                  <BilingualBox data={CEO} variant='solid' />
                </div>

                {/* Bridges the gap down to CEO's subtree below (which is
                    pushed down to clear Compliance Unit / Internal Audit,
                    whichever is taller — measured at runtime since text
                    wrapping varies by viewport) so the drop from CEO's box
                    isn't left floating with no visible line. */}
                <div
                  className='border-l-2 border-secondary'
                  style={{ height: bridgeHeight }}
                />
              </div>

              {COMMITTEES.slice(2).map((committee, i) => {
                const index = i + 3
                return (
                  <div key={index} className='flex flex-col items-center'>
                    <BilingualBox data={committee} />
                  </div>
                )
              })}

              {/* Solid red line from Compliance Unit (col 0) straight across
                  into CEO (col 2) — this is the "real" reporting line. Both
                  now sit at the same height (measured at runtime), so the
                  line is level. */}
              <div
                className='absolute border-t-2 border-secondary'
                style={{
                  top: connectorTop,
                  left: columnCenterX(0, 5, 24),
                  right: `calc(100% - ${columnCenterX(2, 5, 24)})`,
                }}
              />
              {/* <div
                className='absolute w-[6px] h-[6px] rounded-full bg-secondary'
                style={{
                  top: connectorTop - 3,
                  left: `calc(${columnCenterX(0, 5, 24)} - 3px)`,
                }}
              /> */}
              {/* Internal Audit (col 1) also connects to CEO, but as an
                  L-shaped dotted path: straight down from its own box first,
                  then bends right into CEO — rather than crossing at
                  Internal Audit's own mid-height. */}
              <div
                className='absolute border-l border-dotted border-lightGray'
                style={{
                  top: internalAuditDropTop,
                  height: Math.max(0, connectorTop - internalAuditDropTop - 10),
                  left: columnCenterX(1, 5, 24),
                }}
              />
              <div
                className='absolute border-t border-dotted border-lightGray'
                style={{
                  top: connectorTop - 10,
                  left: columnCenterX(1, 5, 24),
                  right: `calc(100% - ${columnCenterX(2, 5, 24)})`,
                }}
              />
            </div>
          </div>
          {/* CEO's 4 direct reports: Deputy CEO (who further branches
                    into CAO + CFO) and 3 officer columns. The connector and
                    grid below share the same 900px-wide, shifted wrapper so
                    columnCenterX() resolves against the same reference width
                    for both, centered under the (narrower) CEO column. */}
          <div className='min-w-[900px]'>
            <TreeConnector count={4} />

            <div className='grid grid-cols-4 gap-x-6'>
              <div className='flex flex-col items-center'>
                <div className='max-w-[180px] w-full'>
                  <BilingualBox data={DEPUTY_CEO} variant='dashed-emphasis' />
                </div>

                <TreeConnector count={2} gapPx={16} dropStyle='dotted' />

                <div className='grid grid-cols-2 gap-x-4 w-full'>
                  {DEPUTY_CEO_CHILDREN.map((child, childIndex) => (
                    <div
                      key={childIndex}
                      className='flex flex-col items-center'
                    >
                      <BilingualBox data={child.title} variant='subordinate' />

                      <div className='mt-6 w-full space-y-4'>
                        {child.departments.map((dept, deptIndex) => (
                          <div
                            key={deptIndex}
                            className='border-b border-secondary pb-2 text-center'
                          >
                            <p className='text-xs font-semibold text-black-3'>
                              {dept.th}
                            </p>
                            <p className='text-[10px] text-black-6 mt-[2px]'>
                              ({dept.en})
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {CEO_DIRECT_OFFICERS.map((officer, officerIndex) => (
                <div key={officerIndex} className='flex flex-col items-center'>
                  <BilingualBox data={officer.title} variant='solid' />

                  <div className='mt-6 w-full space-y-4'>
                    {officer.departments.map((dept, deptIndex) => (
                      <div
                        key={deptIndex}
                        className='border-b border-secondary pb-2 text-center'
                      >
                        <p className='text-xs font-semibold text-black-3'>
                          {dept.th}
                        </p>
                        <p className='text-[10px] text-black-6 mt-[2px]'>
                          ({dept.en})
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Animation>
    </div>
  )
}
