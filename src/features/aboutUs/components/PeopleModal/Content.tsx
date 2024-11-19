import { ContentProps } from './interface'

export function Content({ title, contents }: ContentProps) {
  return (
    <div>
      <div className='headline-4 text-navy'>{title}</div>
      <ul className='mt-[10px] text-black-6 body-2 w-full'>
        {contents.map(content => (
          <li className='grid grid-cols-[30px_1fr]'>
            <span className='text-center'>&bull;</span>
            {content}
          </li>
        ))}
      </ul>
    </div>
  )
}
