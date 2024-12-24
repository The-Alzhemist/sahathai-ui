'use client'
import Image from 'next/image'
import { useState } from 'react'

import { Animation } from '@/components/Animation'
import { PlusIcon } from '@/components/icons/PlusIcon'
import { MinusIcon } from '@/components/icons/MinusIcon'
import { CollapseProps } from './interface'
import { cn } from '@/libs/util'

export function Collapse({ title, content, imageUrl }: CollapseProps) {
  const [toggle, setToggle] = useState(false)

  return (
    <Animation className='px-[22px] border-l-[4px] border-primary bg-white select-none'>
      <div
        className='py-[23px] flex justify-between items-center'
        onClick={() => setToggle(prev => !prev)}
      >
        <h3 className={cn('prompt', { 'text-navy': toggle })}>{title}</h3>
        {toggle ? (
          <MinusIcon className='text-navy' width='20' height='20' />
        ) : (
          <PlusIcon className='text-navy' width='20' height='20' />
        )}
      </div>
      {toggle && (
        <div className='flex flex-col md:flex-row gap-[30px] pb-[28px]'>
          <div className='shadow-9 w-[100%] md:w-[40%]'>
            <div className='relative pt-[59.13%] w-full'>
              <Image src={imageUrl} fill alt='' />
            </div>
          </div>
          <div className='prompt text-[15.5px] text-darkGray w-[100%] md:w-[60%]'>
            {content}
          </div>
        </div>
      )}
    </Animation>
  )
}
