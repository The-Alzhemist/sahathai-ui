import Image from 'next/image'

export interface BannerProps {
  imagePath: string
  alt: string
  caption?: string
  className?: string
}

export function Banner({ imagePath, alt, caption, className }: BannerProps) {
  return (
    <section className={`relative h-[450px] ${className}`}>
      <Image
        src={imagePath}
        alt={alt}
        className='object-center object-cover'
        fill
      />
      {caption && (
        <div
          className={'absolute bottom-0 left-1/2  transform -translate-x-1/2'}
        >
          <div className='w-[80vw] text-center text-[2.75rem] mobile:text-[1.75rem] font-normal text-white bg-white-600 p-6 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-80 '>
            {caption}
          </div>
        </div>
      )}
    </section>
  )
}
