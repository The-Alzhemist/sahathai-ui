'use client'

import { Modal } from '@/components/Modal'
import Image from 'next/image'

export function MockPeopleModal({ selectPeople, onClose }: any) {
  return (
    <>
      <Modal className='max-w-[770px] w-[90%] ' onClose={onClose}>
        <div onClick={onClose}></div>
        <div className='flex flex-col md:flex-row gap-x-3 md:gap-x-[13px] items-center'>
          <div className='max-w-[90%] md:max-w-[309px] w-full overflow-hidden'>
            <div className='relative aspect-square w-full'>
              <Image
                src={selectPeople.peopleImage.filename}
                alt={selectPeople.alt || 'Image'}
                fill
                className='object-cover'
              />
            </div>
          </div>

          <div className='w-full'>
            <div className='text-xl md:text-[32px] leading-[1.35] text-navy px-5 md:px-0 mt-4 md:mt-0'>
              {selectPeople.name}
            </div>

            {selectPeople.setOfData?.length > 0 &&
              selectPeople.setOfData
                .filter((_: any, index: number) => index === 0)
                .map((data: any, index: number) => (
                  <div
                    key={data._uid ?? index}
                    className='mt-[20px] text-black-6 max-w-[389px] w-full px-5 md:px-0 mb-5 md:mb-0'
                  >
                    <ul className='space-y-1'>
                      {data.item?.map((item: any, idx: number) => (
                        <li
                          key={item._uid ?? idx}
                          className='grid grid-cols-[30px_1fr]'
                        >
                          <span className='text-center'>&bull;</span>
                          <span>{item.detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
          </div>
        </div>
      </Modal>
    </>
  )
}
