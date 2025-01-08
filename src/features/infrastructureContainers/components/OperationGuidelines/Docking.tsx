import Image from 'next/image'
import { DockProps } from './interface'
import { textBreakAndReturnNewLine } from '@/libs/util'

export function Docking({ imageUrl, description }: DockProps) {
  const lines = textBreakAndReturnNewLine(description)

  return (
    <div>
      <Image className='mb-5' src={imageUrl} alt='' width={666} height={328} />

      {lines.map((line, index) => (
        <p key={index} className='text-gray-800 text-sm mb-2'>
          {line}
        </p>
      ))}
      <p className='text-gray-800 text-sm mb-2'></p>
    </div>
  )
}
