import { Animation } from '@/components/Animation'
import Image from 'next/image'

export function LogisticInnovation() {
  return (
    <Animation className='mt-[100px] max-w-[862px] w-full mx-auto px-5'>
      <div className='relative pt-[161.02%] w-full mb-10'>
        <Image
          src='/infrastructure-containers/logistic-innovation-th-4.png'
          fill
          alt=''
        />
      </div>
    </Animation>
  )
}
