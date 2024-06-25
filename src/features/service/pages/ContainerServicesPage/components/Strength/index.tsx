import { cn } from '@/libs/util'
import { StrengthProps } from './interface'

export function Strength({ className }: StrengthProps) {
  return (
    <section
      className={cn(
        'max-w-[1156px] mx-auto flex flex-wrap gap-[40px]',
        className
      )}
    >
      <div className='max-w-[358.67px] w-full'>
        <div className='w-full h-[337px] bg-dark' />
        <h2 className='mt-[24px] font-[700] text-[36px] leading-[44px]'>
          ตอบโจทย์ทุก ความต้องการ
        </h2>
        <p className='mt-[15px] text-[18px] leading-[28px] sarabun'>
          ไม่ว่าคุณจะต้องการจัดเก็บสินค้าประเภทใด ใช้พื้นที่มากน้อยเท่าไหน
          ระดับความปลอดภัยขั้นสูงระดับใด
          เราสามารถตอบโจทย์ทุกความต้องการของคุณได้
        </p>
      </div>
      <div className='max-w-[358.67px] w-full'>
        <div className='w-full h-[337px] bg-dark' />
        <h2 className='mt-[24px] font-[700] text-[36px] leading-[44px]'>
          ตอบโจทย์ทุก ความต้องการ
        </h2>
        <p className='mt-[15px] text-[18px] leading-[28px] sarabun'>
          ไม่ว่าคุณจะต้องการจัดเก็บสินค้าประเภทใด ใช้พื้นที่มากน้อยเท่าไหน
          ระดับความปลอดภัยขั้นสูงระดับใด
          เราสามารถตอบโจทย์ทุกความต้องการของคุณได้
        </p>
      </div>
      <div className='max-w-[358.67px] w-full'>
        <div className='w-full h-[337px] bg-dark' />
        <h2 className='mt-[24px] font-[700] text-[36px] leading-[44px]'>
          ตอบโจทย์ทุก ความต้องการ
        </h2>
        <p className='mt-[15px] text-[18px] leading-[28px] sarabun'>
          ไม่ว่าคุณจะต้องการจัดเก็บสินค้าประเภทใด ใช้พื้นที่มากน้อยเท่าไหน
          ระดับความปลอดภัยขั้นสูงระดับใด
          เราสามารถตอบโจทย์ทุกความต้องการของคุณได้
        </p>
      </div>
    </section>
  )
}
