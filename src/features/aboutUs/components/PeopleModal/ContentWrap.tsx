import { ContentWrapProps } from './interface'

export function ContentWrap({ children }: ContentWrapProps) {
  return (
    <div className='px-5 md:px-9 py-9  bg-white-1 space-y-5 md:space-y-[30px]'>
      {children}
    </div>
  )
}
