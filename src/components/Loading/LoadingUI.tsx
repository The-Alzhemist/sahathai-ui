import Image from 'next/image'

export const LoadingUi = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-white text-white p-4'>
      {/* Loading Spinner */}

      <Image
        src={'/time-loading-2x.png'}
        alt={'loading image'}
        width={100}
        height={100}
      />

      {/* Loading Text */}
      <h2 className='mt-8 text-xl font-bold tracking-wide text-gray-800'>
        Loading
      </h2>

      <p className=' text-gray-800'>please wait...</p>
    </div>
  )
}
