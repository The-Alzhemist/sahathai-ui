import { MenuCollapseProps } from './interface'
import { cn } from '@/libs/util'
import { useState } from 'react'
import { ChevronDownIcon } from '@/components/icons/ChevronDownIcon'
import { ChevronUpIcon } from '@/components/icons/ChevronUpIcon'

const MenuCollapse = ({ children, title, icon }: MenuCollapseProps) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className='min-h-[40px]'>
      <div
        className='flex py-[12px] justify-between items-center'
        onClick={() => setToggle(prev => !prev)}
      >
        <div className='flex gap-x-2'>
          {icon}
          <h3 className={cn('prompt', { 'text-navy': toggle })}>{title}</h3>
        </div>
        {toggle ? (
          <ChevronUpIcon className='text-navy' width='20' height='20' />
        ) : (
          <ChevronDownIcon className='text-navy' width='20' height='20' />
        )}
      </div>
      {toggle && (
        <div className='flex flex-col gap-y-3 justify-start items-start pl-7 prompt text-[15.5px] text-darkGray w-full'>
          {children}
        </div>
      )}
    </div>
  )
}

export default MenuCollapse
