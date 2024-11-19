export function TimeLine() {
  return (
    <div className='flex flex-col items-center order-3'>
      <div className='bg-white w-[15px] h-[15px] rounded-full shadow-7 flex justify-center items-center'>
        <div className='w-[11px] h-[11px] rounded-full bg-primary' />
      </div>
      <div className='h-[300px] border-r border-primary border-dashed' />
    </div>
  )
}
