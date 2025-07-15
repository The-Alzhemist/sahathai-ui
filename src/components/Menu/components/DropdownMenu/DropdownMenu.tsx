'use client'
import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  FloatingList,
  FloatingNode,
  FloatingPortal,
  FloatingTree,
  offset,
  safePolygon,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFloatingNodeId,
  useFloatingParentNodeId,
  useFloatingTree,
  useHover,
  useInteractions,
  useListItem,
  useListNavigation,
  useMergeRefs,
  useRole,
  useTypeahead,
} from '@floating-ui/react'
import * as React from 'react'
import { twMerge } from 'tailwind-merge'
import { useEffect } from 'react'

const DropdownMenuContext = React.createContext<{
  getItemProps: (
    userProps?: React.HTMLProps<HTMLElement>
  ) => Record<string, unknown>
  activeIndex: number | null
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>
  setHasFocusInside: React.Dispatch<React.SetStateAction<boolean>>
  isOpen: boolean
}>({
  getItemProps: () => ({}),
  activeIndex: null,
  setActiveIndex: () => {},
  setHasFocusInside: () => {},
  isOpen: false,
})

interface DropdownMenuProps {
  label: string
  nested?: boolean
  children?: React.ReactNode
  className?: string
}

export const DropdownMenuComponent = React.forwardRef<
  HTMLButtonElement,
  DropdownMenuProps & React.HTMLProps<HTMLButtonElement>
>(({ children, label, className, ...props }, forwardedRef) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [hasFocusInside, setHasFocusInside] = React.useState(false)
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null)

  const elementsRef = React.useRef<Array<HTMLButtonElement | null>>([])
  const labelsRef = React.useRef<Array<string | null>>([])
  const parent = React.useContext(DropdownMenuContext)

  const tree = useFloatingTree()
  const nodeId = useFloatingNodeId()
  const parentId = useFloatingParentNodeId()
  const item = useListItem()

  const isNested = parentId != null

  const { floatingStyles, refs, context } = useFloating<HTMLButtonElement>({
    nodeId,
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: isNested ? 'right-start' : 'bottom-start',
    middleware: [
      offset({ mainAxis: isNested ? 0 : 0, alignmentAxis: isNested ? -4 : 0 }),
      flip(),
      shift(),
    ],
    whileElementsMounted: autoUpdate,
  })

  const hover = useHover(context, {
    enabled: isNested,
    delay: { open: 75 },
    handleClose: safePolygon({ blockPointerEvents: true }),
  })
  const click = useClick(context, {
    event: 'mousedown',
    toggle: !isNested,
    ignoreMouse: isNested,
  })
  const role = useRole(context, { role: 'menu' })
  const dismiss = useDismiss(context, { bubbles: true })
  const listNavigation = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    nested: isNested,
    onNavigate: setActiveIndex,
  })
  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    onMatch: isOpen ? setActiveIndex : undefined,
    activeIndex,
  })

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [hover, click, role, dismiss, listNavigation, typeahead]
  )

  // Event emitter allows you to communicate across tree components.
  // This effect closes all menus when an item gets clicked anywhere
  // in the tree.
  React.useEffect(() => {
    if (!tree) return

    function handleTreeClick() {
      setIsOpen(false)
    }

    function onSubMenuOpen(event: { nodeId: string; parentId: string }) {
      if (event.nodeId !== nodeId && event.parentId === parentId) {
        setIsOpen(false)
      }
    }

    tree.events.on('click', handleTreeClick)
    tree.events.on('menuopen', onSubMenuOpen)

    return () => {
      tree.events.off('click', handleTreeClick)
      tree.events.off('menuopen', onSubMenuOpen)
    }
  }, [tree, nodeId, parentId])

  React.useEffect(() => {
    let lastScrollY = window.scrollY
    const controlNavbar = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsOpen(false)
      }
      lastScrollY = currentScrollY
    }
    window.addEventListener('scroll', controlNavbar, { passive: true })
    return () => window.removeEventListener('scroll', controlNavbar)
  }, [])

  React.useEffect(() => {
    if (isOpen && tree) {
      tree.events.emit('menuopen', { parentId, nodeId })
    }
  }, [tree, isOpen, nodeId, parentId])

  return (
    <FloatingNode id={nodeId}>
      <button
        ref={useMergeRefs([refs.setReference, item.ref, forwardedRef])}
        tabIndex={
          !isNested ? undefined : parent.activeIndex === item.index ? 0 : -1
        }
        role={isNested ? 'menuitem' : undefined}
        data-open={isOpen ? '' : undefined}
        data-nested={isNested ? '' : undefined}
        data-focus-inside={hasFocusInside ? '' : undefined}
        className={`headline-6 !font-[300] block px-[24px] py-[18px] hover:bg-primary-1 whitespace-nowrap ${className}`}
        {...getReferenceProps(
          parent.getItemProps({
            ...props,
            onFocus(event: React.FocusEvent<HTMLButtonElement>) {
              props.onFocus?.(event)
              setHasFocusInside(false)
              parent.setHasFocusInside(true)
            },
          })
        )}
      >
        {label}
        {isNested && (
          <span aria-hidden style={{ marginLeft: 10, fontSize: 10 }}>
            ▶
          </span>
        )}
      </button>
      <DropdownMenuContext.Provider
        value={{
          activeIndex,
          setActiveIndex,
          getItemProps,
          setHasFocusInside,
          isOpen,
        }}
      >
        <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
          {isOpen && (
            <FloatingPortal>
              <FloatingFocusManager
                context={context}
                modal={false}
                initialFocus={isNested ? -1 : 0}
                returnFocus={!isNested}
              >
                <div
                  ref={refs.setFloating}
                  className='bg-background p-[4px] rounded-b-[6px] outline-0 text-white'
                  style={floatingStyles}
                  {...getFloatingProps()}
                >
                  {children}
                </div>
              </FloatingFocusManager>
            </FloatingPortal>
          )}
        </FloatingList>
      </DropdownMenuContext.Provider>
    </FloatingNode>
  )
})
DropdownMenuComponent.displayName = 'DropdownMenuComponent'

interface DropdownMenuItemProps {
  children: React.ReactNode
  disabled?: boolean
  className?: string
}

export const DropdownMenuItem = React.forwardRef<
  HTMLButtonElement,
  DropdownMenuItemProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, disabled, className, ...props }, forwardedRef) => {
  const menu = React.useContext(DropdownMenuContext)
  const item = useListItem({ label: disabled ? null : children?.toString() })
  const tree = useFloatingTree()
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
          tree?.events.emit('click')
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
