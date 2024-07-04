import { ContentProps } from './interface'

export function Content({ title, children }: ContentProps) {
  return (
    <section>
      <h3 className='font-[700] text-[14px] leading-[20px]'>{title}</h3>
      <div className='mt-[10px] text-[14px] leading-[20px]'>{children}</div>
    </section>
  )
}
