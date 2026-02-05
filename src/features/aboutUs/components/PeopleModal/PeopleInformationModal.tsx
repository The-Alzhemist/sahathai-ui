'use client'

import { Modal } from '@/components/Modal'
import { PeopleInformationModalProps } from '@/features/aboutUs/components/PeopleModal/interface'
import Image from 'next/image'

export function PeopleInformationModal({
  selectPeople,
  onClose,
}: PeopleInformationModalProps) {
  if (!selectPeople) return null
  return (
    <>
      <Modal className='max-w-[770px] w-[90%] ' onClose={onClose}>
        <div onClick={onClose}></div>
        <div className='flex flex-col md:flex-row gap-x-3 md:gap-x-[13px] items-center'>
          <div className='max-w-[90%] md:max-w-[309px] w-full overflow-hidden'>
            <div className='relative aspect-square w-full'>
              <Image
                src={selectPeople.peopleImage?.filename || ''}
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

            {selectPeople &&
              selectPeople.setOfData &&
              selectPeople.setOfData?.length > 0 &&
              selectPeople.setOfData
                .filter((_: any, index: number) => index === 0)
                .map((data: any, index: number) => (
                  <div
                    key={data._uid ?? index}
                    className='mt-2 text-black-6 body-2 w-full space-y-1'
                  >
                    <ul className='px-1 space-y-1'>
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

        <div className='px-5 md:px-9 py-9 bg-white-1 space-y-5 md:space-y-[30px] mt-8 md:mt-0'>
          {}
          <div className=' py-2 grid grid-cols-1 md:grid-cols-1 gap-1'>
            {selectPeople &&
              selectPeople.setOfData &&
              selectPeople.setOfData?.length > 0 &&
              selectPeople.setOfData
                .filter((_: any, index: number) => index !== 0)
                .map((data: any, index: number) => (
                  <section key={data._uid ?? index} className='mb-8'>
                    <div className='text-md md:text-[20px] leading-[48.38px] text-navy px-5 md:px-0'>
                      {data.heading}
                    </div>

                    <div className='mt-2 text-black-6 body-2 w-full space-y-1'>
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
                  </section>
                ))}
          </div>
        </div>
      </Modal>
    </>
  )
}
