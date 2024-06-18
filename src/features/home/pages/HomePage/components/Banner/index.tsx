import Image from 'next/image'

export function Banner() {
  return (
    <Image
      className='w-full h-[435px] object-cover'
      src='https://sahathaiterminal.com/wp-content/uploads/2018/03/DJI_0011.jpg'
      width={0}
      height={0}
      sizes='100vw'
      alt='เชื่อมโยง คุณสู่โลจิสติกส์ไทย'
    />
  )
}
