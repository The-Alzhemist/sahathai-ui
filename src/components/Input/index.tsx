import { InputProps } from './interface'

export function Input({ type = 'text', ...props }: InputProps) {
  return (
    <input
      type={type}
      className='body-1 text-black-2 placeholder:text-dark-20 w-full focus:border-blue bg-white focus:outline-none bg-transparent rounded-[6px] border border-black-20 h-[46px] px-[20px]'
      autoComplete='off'
      {...props}
    />
  )
}
