import Image from 'next/image'
import { cn } from '@/libs/util'
import { Animation } from '@/components/Animation'

type CardProps = {
  imageUrl: string
  title: string
  content: string
  position?: 'left' | 'right'
}

export function BannerTextCard({
  imageUrl,
  title,
  content,
  position = 'left',
}: CardProps) {
  return (
    <Animation className='relative w-full h-[260px] md:h-[360px] lg:h-[420px]  overflow-hidden shadow-8'>
      {/* Background image */}
      <Image src={imageUrl} alt='' fill className='object-cover' priority />

      {/* Gradient overlay (ซ้าย→ขวา หรือ ขวา→ซ้าย ตาม position) */}
      {/* Overlay แบบเหลี่ยม */}
      <div className='absolute inset-0 pointer-events-none'>
        <div
          className={cn(
            'absolute inset-y-0 w-full lg:w-[54%]',
            position === 'right' ? 'right-0' : 'left-0' // ติดซ้าย/ขวา
          )}
        >
          <div
            className={cn(
              'h-full flex items-center justify-center bg-gradient-to-t from-black to-modellBgDark lg:bg-modellBgDark opacity-80',
              {
                // ด้านขวา: ตัดให้ขอบซ้ายเอียง
                'lg:[clip-path:polygon(0%_0%,100%_0%,100%_100%,15%_100%)]':
                  position === 'right',
                // ด้านซ้าย: ตัดให้ขอบขวาเอียง
                'lg:[clip-path:polygon(0%_0%,100%_0%,85%_100%,0%_100%)]':
                  position === 'left',
              }
            )}
          >
            <div className='w-full max-w-[720px] lg:max-w-[min(70%,720px)] text-white p-[24px]'>
              {/* bullet circle + title */}
              <div className='flex items-center gap-3 mb-3 justify-center'>
                <span className='inline-flex items-center justify-center w-[20px] h-[20px] rounded-full border-2 border-white/80 bg-white shrink-0'>
                  <span className='w-4 h-4 rounded-full bg-blue-300' />
                </span>
                <h3 className='text-white text-lg md:text-[24px] font-medium leading-snug'>
                  {title}
                </h3>
              </div>

              <p className='text-white/90 text-sm md:text-base font-normal !leading-relaxed tracking-[0.5px] max-w-full whitespace-pre-wrap'>
                {content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Animation>
  )
}
