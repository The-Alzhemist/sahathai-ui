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
        'fixed bg-black/60 top-0 left-0 w-full h-full z-10 overflow-auto duration-500'
      )}
    >
      <div
        className={cn(
          'relative bg-white rounded-[15px] mx-auto my-[50px] overflow-hidden',
          className
        )}
      >
        <button
          className='absolute top-[20px] right-[16px]'
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
