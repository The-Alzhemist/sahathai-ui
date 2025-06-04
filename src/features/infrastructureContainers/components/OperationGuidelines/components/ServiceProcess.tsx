import React from 'react'
import Image from 'next/image'
import { useLocale } from 'next-intl'

export default function ServiceProcess() {
    const locale = useLocale()
    return (
        <section>
            <Image
                className='mb-5 rounded-md'
                src='/infrastructure-containers/docking_image.jpg'
                alt=''
                width={666}
                height={328}
            />
            {locale === 'th' && <ServiceProcessTH />}
            {locale === 'en' && <ServiceProcessEN />}
            {locale === 'cn' && <ServiceProcessCN />}
        </section>
    )
}

export const ServiceProcessTH = () => {
    return (
        <>
            <p className='text-gray-600 text-sm mb-3'>
                เรากำลังพัฒนาและปรับเปลี่ยนขั้นตอนการเรียกเก็บค่าใช้บริการที่สะดวกและรวดเร็วมากขึ้น
            </p>


            <div className='flex flex-wrap gap-2 border rounded-md items-center px-3 py-2'>
            <span className='text-sm text-gray-600'>
        หากคุณมีข้อสงสัยหรือต้องการทราบข้อมูลเพิ่มเติม สามารถติดต่อเราได้ที่
            </span>
                <span className='text-primary-1'>+66 (0) 2386 8000.</span>
            </div>

        </>
    )
}

export const ServiceProcessEN = () => {
    return (
        <>
            <p className='text-gray-600 text-sm mb-3'>
                เรากำลังพัฒนาและปรับเปลี่ยนขั้นตอนการเรียกเก็บค่าใช้บริการที่สะดวกและรวดเร็วมากขึ้น
            </p>


            <div className='flex flex-wrap gap-2 border rounded-md items-center px-3 py-2'>
            <span className='text-sm text-gray-600'>
        หากคุณมีข้อสงสัยหรือต้องการทราบข้อมูลเพิ่มเติม สามารถติดต่อเราได้ที่
            </span>
                <span className='text-primary-1'>+66 (0) 2386 8000.</span>
            </div>

        </>
    )
}

export const ServiceProcessCN = () => {
    return (
        <>
            <p className='text-gray-600 text-sm mb-3'>
                เรากำลังพัฒนาและปรับเปลี่ยนขั้นตอนการเรียกเก็บค่าใช้บริการที่สะดวกและรวดเร็วมากขึ้น
            </p>


            <div className='flex flex-wrap gap-2 border rounded-md items-center px-3 py-2'>
            <span className='text-sm text-gray-600'>
        หากคุณมีข้อสงสัยหรือต้องการทราบข้อมูลเพิ่มเติม สามารถติดต่อเราได้ที่
            </span>
                <span className='text-primary-1'>+66 (0) 2386 8000.</span>
            </div>

        </>
    )
}
