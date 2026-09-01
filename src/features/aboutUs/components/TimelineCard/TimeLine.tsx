export function TimeLine() {
  return (
    <div className='flex min-h-[380px] h-full flex-col items-center self-stretch order-3'>
      <div className='bg-white w-[15px] h-[15px] rounded-full shadow-7 flex justify-center items-center shrink-0'>
        <div className='w-[11px] h-[11px] rounded-full bg-primary' />
      </div>
      <div className='flex-1 border-r border-primary border-dashed' />
    </div>
  )
}
