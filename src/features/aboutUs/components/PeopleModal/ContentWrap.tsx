import { ContentWrapProps } from './interface'

export function ContentWrap({ children }: ContentWrapProps) {
  return (
    <div className='px-[60px] py-[40px] bg-white-1 space-y-[30px]'>
      {children}
    </div>
  )
}
