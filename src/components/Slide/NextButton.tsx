import { ChevronDownIcon } from '../icons/ChevronDownIcon'
import { NextButtonProps } from './interface'

export function NextButton({ onClick }: NextButtonProps) {
  return (
    <button
      className='bg-white-1 w-[60px] h-[60px] flex items-center justify-center absolute top-1/2 right-[-60px] -translate-y-1/2 rounded-full'
      type='button'
      onClick={onClick}
    >
      <ChevronDownIcon
        className='-rotate-[90deg] text-dark-300'
        width='40'
        height='40'
      />
    </button>
  )
}
