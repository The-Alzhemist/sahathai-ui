import { ChevronDownIcon } from '../icons/ChevronDownIcon'
import { PrevButtonProps } from './interface'

export function PrevButton({ onClick }: PrevButtonProps) {
  return (
    <button
      className='bg-white-1 w-[60px] h-[60px] flex items-center justify-center absolute top-1/2 left-[-60px] -translate-y-1/2 rounded-full'
      type='button'
      onClick={onClick}
    >
      <ChevronDownIcon
        className='rotate-90 text-dark-300'
        width='40'
        height='40'
      />
    </button>
  )
}
