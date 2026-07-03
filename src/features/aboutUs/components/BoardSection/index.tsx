import { BoardSectionProps } from './interface'

export function BoardSection({ title, children }: BoardSectionProps) {
  return (
    <section className='bg-[url("/about-us/board-executive.jpeg")] bg-center bg-cover'>
      <section className='bg-modellBgDark/50 py-[80px]'>
        <section className='max-w-[1040px] mx-auto w-full'>
          <h2 className='headline-2 text-center text-white mb-[40px]'>
            {title}
          </h2>
          <section className='max-w-[734px] w-full mx-auto grid grid-cols-1 justify-center md:grid-cols-3 gap-x-5 md:gap-x-[60px] gap-y-[20px]'>
            {children}
          </section>
        </section>
      </section>
    </section>
  )
}
