import {
  useFloating,
  autoUpdate,
  offset,
  autoPlacement,
  useClick,
  useDismiss,
  useInteractions,
  size,
} from '@floating-ui/react'
import { useRef, useState } from 'react'

import { cn } from '@/libs/util'
import { ChevronDownIcon } from '../icons/ChevronDownIcon'
import { DropdownProps } from './interface'

export function Dropdown({
  icon,
  className,
  value,
  options,
  onSelect,
}: DropdownProps) {
  const optionRefs = useRef<HTMLLIElement[]>(Array(options.length))
  const [isOpen, setIsOpen] = useState(false)
  const { refs, floatingStyles, context } = useFloating<HTMLLabelElement>({
    placement: 'bottom',
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(4),
      autoPlacement({
        allowedPlacements: ['bottom', 'top'],
        padding: 4,
      }),
      size({
        apply({ rects, elements }) {
          Object.assign(elements.floating.style, {
            maxWidth: `${rects.reference.width}px`,
          })
        },
      }),
    ],
  })

  const click = useClick(context, { event: 'mousedown' })
  const dismiss = useDismiss(context)

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [click, dismiss]
  )

  function closeDropdown() {
    setIsOpen(false)
  }

  function handleSelect(value: string) {
    onSelect(value)
    closeDropdown()
  }

  return (
    <div className={cn('text-black-80', className)}>
      <button
        type='button'
        className={cn(
          'flex gap-x-[10px] items-center px-[20px] py-[11px] border border-white-6 rounded-[6px] w-full',
          {
            'border-primary': isOpen,
          }
        )}
        {...getReferenceProps()}
        ref={refs.setReference}
      >
        {icon}
        <div
          className={cn('medium text-left w-full truncate', {
            'text-black-3': !value,
          })}
        >
          {options.find(i => i.value === value)?.label}
        </div>
        <ChevronDownIcon
          className={cn('shrink-0', { 'rotate-180': isOpen })}
          width='16'
          height='16'
        />
      </button>

      {isOpen && (
        <ul
          className='relative p-[4px] rounded-[6px] shadow-3 z-[10] bg-white max-h-[208px] overflow-y-auto w-full'
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          {options.map((item, index) => (
            <li
              key={`${item.value}_${index}`}
              className='py-[10px] px-[12px] medium hover:bg-white-2 hover:cursor-pointer rounded-[6px]'
              {...getItemProps({
                onClick() {
                  handleSelect(item.value)
                },
              })}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
