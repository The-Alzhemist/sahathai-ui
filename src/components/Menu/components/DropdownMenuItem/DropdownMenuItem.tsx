import * as React from 'react'
import { useFloatingTree, useListItem, useMergeRefs } from '@floating-ui/react'
import { twMerge } from 'tailwind-merge'
import { DropdownMenuItemProps } from '@/components/Menu/components/DropdownMenuItem/interface'
import { DropdownMenuContext } from '@/components/Menu/components/DropdownMenuContext/DropdownMenuContext'

export const DropdownMenuItem = React.forwardRef<
  HTMLButtonElement,
  DropdownMenuItemProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, disabled, className, ...props }, forwardedRef) => {
  const menu = React.useContext(DropdownMenuContext)
  const item = useListItem({ label: disabled ? null : children?.toString() })
  const isActive = item.index === menu.activeIndex

  return (
    <button
      {...props}
      ref={useMergeRefs([item.ref, forwardedRef])}
      type='button'
      role='menuitem'
      className={twMerge(
        'flex justify-between items-center  w-full border-none rounded text-base text-left leading-[1.8] min-w-[110px] m-0 outline-none',
        className
      )}
      tabIndex={isActive ? 0 : -1}
      disabled={disabled}
      {...menu.getItemProps({
        onClick(event: React.MouseEvent<HTMLButtonElement>) {
          props.onClick?.(event)
        },
        onFocus(event: React.FocusEvent<HTMLButtonElement>) {
          props.onFocus?.(event)
          menu.setHasFocusInside(true)
        },
      })}
    >
      {children}
    </button>
  )
})
DropdownMenuItem.displayName = 'DropdownMenuItem'
