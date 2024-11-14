import { InputProps } from './interface'

export function Input({ type = 'text', ...props }: InputProps) {
  return (
    <input
      type={type}
      className='medium text-darkGray placeholder:text-placeholder w-full focus:border-primary bg-white focus:outline-none bg-transparent rounded-[6px] border border-white-2 h-[46px] px-[20px]'
      autoComplete='off'
      {...props}
    />
  )
}
