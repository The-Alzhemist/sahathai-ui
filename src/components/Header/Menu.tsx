/* eslint-disable react/display-name */
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
import { ChevronDownIcon } from '../icons/ChevronDownIcon'
import { cn } from '@/libs/util'
import { CustomeLink } from '../CustomeLink'

const MenuContext = React.createContext<{
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

interface MenuProps {
  label: string
  nested?: boolean
  children?: React.ReactNode
}

export const MenuComponent = React.forwardRef<
  HTMLDivElement,
  MenuProps & React.HTMLProps<HTMLDivElement>
>(({ children, label, ...props }, forwardedRef) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [hasFocusInside, setHasFocusInside] = React.useState(false)
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null)

  const elementsRef = React.useRef<Array<HTMLDivElement | null>>([])
  const labelsRef = React.useRef<Array<string | null>>([])
  const parent = React.useContext(MenuContext)

  const tree = useFloatingTree()
  const nodeId = useFloatingNodeId()
  const parentId = useFloatingParentNodeId()
  const item = useListItem()

  const isNested = parentId != null

  const { floatingStyles, refs, context } = useFloating<HTMLDivElement>({
    nodeId,
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: isNested ? 'right-start' : 'bottom-start',
    middleware: [
      offset({ mainAxis: isNested ? 0 : 18, alignmentAxis: isNested ? -4 : 0 }),
      flip(),
      shift(),
    ],
    whileElementsMounted: autoUpdate,
  })

  const hover = useHover(context, {
    delay: { open: 75 },
    handleClose: safePolygon({ blockPointerEvents: true }),
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
    [hover, role, dismiss, listNavigation, typeahead]
  )

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
    if (isOpen && tree) {
      tree.events.emit('menuopen', { parentId, nodeId })
    }
  }, [tree, isOpen, nodeId, parentId])

  return (
    <FloatingNode id={nodeId}>
      <div
        ref={useMergeRefs([refs.setReference, item.ref, forwardedRef])}
        tabIndex={
          !isNested ? undefined : parent.activeIndex === item.index ? 0 : -1
        }
        role={isNested ? 'menuitem' : undefined}
        data-open={isOpen ? '' : undefined}
        data-nested={isNested ? '' : undefined}
        data-focus-inside={hasFocusInside ? '' : undefined}
        className={cn(
          'py-[8px] px-[20px] hover:bg-dark-60 cursor-pointer outline-none flex items-center justify-between',
          {
            'px-[16px] py-[18px] gap-x-[10px] hover:bg-dark-100': !isNested,
          }
        )}
        {...getReferenceProps(
          parent.getItemProps({
            ...props,
            onFocus(event: React.FocusEvent<HTMLDivElement>) {
              props.onFocus?.(event)
              setHasFocusInside(false)
              parent.setHasFocusInside(true)
            },
          })
        )}
      >
        {label}

        <ChevronDownIcon
          className={
            isNested ? '-rotate-90' : isOpen ? 'rotate-180' : undefined
          }
        />
      </div>
      <MenuContext.Provider
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
                  className={cn(
                    'py-[10px] shadow-1 min-w-[277px] outline-none bg-white z-10',
                    { 'rounded-[6px]': !isNested }
                  )}
                  style={floatingStyles}
                  {...getFloatingProps()}
                >
                  {children}
                </div>
              </FloatingFocusManager>
            </FloatingPortal>
          )}
        </FloatingList>
      </MenuContext.Provider>
    </FloatingNode>
  )
})

interface MenuItemProps {
  label: string
  link: string
  isExternalLink?: boolean
}

export const MenuItem = React.forwardRef<HTMLDivElement, MenuItemProps>(
  ({ label, link, isExternalLink = false, ...props }, forwardedRef) => {
    const menu = React.useContext(MenuContext)
    const item = useListItem({ label: label })
    const tree = useFloatingTree()
    const isActive = item.index === menu.activeIndex

    return (
      <CustomeLink className='outline-none' link={link}>
        <div
          {...props}
          ref={useMergeRefs([item.ref, forwardedRef])}
          role='menuitem'
          className='py-[8px] px-[20px] hover:bg-dark-60 outline-none'
          tabIndex={isActive ? 0 : -1}
          {...menu.getItemProps({
            onClick() {
              tree?.events.emit('click')
            },
            onFocus() {
              menu.setHasFocusInside(true)
            },
          })}
        >
          {label}
        </div>
      </CustomeLink>
    )
  }
)

export const Menu = React.forwardRef<
  HTMLDivElement,
  MenuProps & React.HTMLProps<HTMLDivElement>
>((props, ref) => {
  const parentId = useFloatingParentNodeId()

  if (parentId === null) {
    return (
      <FloatingTree>
        <MenuComponent {...props} ref={ref} />
      </FloatingTree>
    )
  }

  return <MenuComponent {...props} ref={ref} />
})
