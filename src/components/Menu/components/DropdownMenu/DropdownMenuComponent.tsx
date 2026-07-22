'use client'
import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  FloatingList,
  FloatingNode,
  FloatingPortal,
  offset,
  safePolygon,
  shift,
  useFloating,
  useFloatingNodeId,
  useHover,
  useInteractions,
  useListItem,
  useMergeRefs,
} from '@floating-ui/react'
import * as React from 'react'
import { useEffect } from 'react'
import { DropdownMenuProps } from '@/components/Menu/components/DropdownMenu/interface'
import { DropdownMenuContext } from '@/components/Menu/components/DropdownMenuContext/DropdownMenuContext'

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

  const nodeId = useFloatingNodeId()
  const item = useListItem()

  const { floatingStyles, refs, context } = useFloating<HTMLButtonElement>({
    nodeId,
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'bottom-start',
    middleware: [offset({ mainAxis: 0, alignmentAxis: 0 }), flip(), shift()],
    whileElementsMounted: autoUpdate,
  })

  const hover = useHover(context, {
    enabled: true,
    delay: { open: 75 },
    handleClose: safePolygon({ blockPointerEvents: true }),
  })

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [hover]
  )

  useEffect(() => {
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

  return (
    <FloatingNode id={nodeId}>
      <button
        ref={useMergeRefs([refs.setReference, item.ref, forwardedRef])}
        tabIndex={parent.activeIndex === item.index ? 0 : -1}
        data-open={isOpen ? '' : undefined}
        data-nested={undefined}
        data-focus-inside={hasFocusInside ? '' : undefined}
        className={`headline-6 !font-[300] block px-[24px] py-[18px] whitespace-nowrap
  hover:bg-white/15 data-[open]:bg-white/15
  transition-colors duration-200
  ${className}`}
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
        onClick={event => {
          props.onClick?.(event)
        }}
      >
        {label}
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
              {/* This dropdown only opens on hover (no useClick/useFocus is
                  registered above), so it has no real keyboard interaction to
                  manage. FloatingFocusManager's defaults still move focus on
                  open/close, though, and calling .focus() on the trigger
                  button — which sits inside a `position: sticky` Menu nested
                  in a `position: sticky` Header — makes the browser's
                  scroll-to-reveal-focused-element behavior jump to the
                  button's static (un-stuck) document position instead of
                  its visible one. Disabling focus management here removes
                  that scroll jump without any loss of function. */}
              <FloatingFocusManager context={context} modal={false} disabled>
                <div
                  ref={refs.setFloating}
                  className='z-50 bg-background p-[4px] rounded-b-[6px] outline-0 text-white min-w-[163px]'
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
