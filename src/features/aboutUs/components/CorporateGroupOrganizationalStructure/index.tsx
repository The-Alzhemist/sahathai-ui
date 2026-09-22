import Image from 'next/image'

export function CorporateGroupOrganizationalStructure({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className='mt-[80px] w-full relative'>
      <div className='pb-[134px] max-w-[1040px] w-full mx-auto px-5'>
        {children}
      </div>
      <div className='absolute -z-10 bottom-0 left-0 h-[704px] w-full'>
        <Image
          src='/about-us/new/about-us-corporate-bg.webp'
          alt='About us background'
          fill
          className='object-bottom'
        />
      </div>
    </section>
  )
}
