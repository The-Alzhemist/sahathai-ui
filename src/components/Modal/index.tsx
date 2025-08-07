import { useAnimation } from '@/hooks/useAnimation'
import { ModalProps } from './interface'
import { cn } from '@/libs/util'
import { XIcon } from '../icons/XIcon'

export function Modal({ children, className, onClose }: ModalProps) {
  const { ref, animationClassName } = useAnimation()

  return (
    <div
      ref={ref}
      className={cn(
        animationClassName,
        'fixed bg-black/60 top-0 left-0 w-full h-screen z-20 overflow-auto duration-500 modal-open'
      )}
    >
      <div
        className={cn(
          'absolute top-1/2 left-1/2 -translate-y-1/2  -translate-x-1/2 bg-white rounded-[15px] mx-auto overflow-auto h-[90vh]',
          className
        )}
      >
        <button
          className='absolute top-[20px] right-[16px] z-20'
          type='button'
          onClick={onClose}
        >
          <XIcon className='text-black-6' width='25' height='25' />
        </button>
        {children}
      </div>
    </div>
  )
}
