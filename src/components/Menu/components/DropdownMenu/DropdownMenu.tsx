'use client'
import { FloatingTree, useFloatingParentNodeId } from '@floating-ui/react'
import * as React from 'react'
import { DropdownMenuProps } from '@/components/Menu/components/DropdownMenu/interface'
import { DropdownMenuComponent } from './DropdownMenuComponent'

export const DropdownMenu = React.forwardRef<
  HTMLButtonElement,
  DropdownMenuProps & React.HTMLProps<HTMLButtonElement>
>((props, ref) => {
  const parentId = useFloatingParentNodeId()

  if (parentId === null) {
    return (
      <FloatingTree>
        <DropdownMenuComponent {...props} ref={ref} />
      </FloatingTree>
    )
  }

  return <DropdownMenuComponent {...props} ref={ref} />
})
DropdownMenu.displayName = 'DropdownMenu'
