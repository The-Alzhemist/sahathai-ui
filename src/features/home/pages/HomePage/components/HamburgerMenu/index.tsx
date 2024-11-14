'use client'
import { Fragment, useRef, useState } from 'react'
import {
  autoUpdate,
  useFloating,
  useInteractions,
  offset,
  useClick,
  useDismiss,
  arrow,
  FloatingArrow,
  size as elementSize,
} from '@floating-ui/react'
import { useTranslations } from 'next-intl'

import { cn } from '@/libs/util'
import { ListIcon } from '@/components/icons/ListIcon'
import { useRouter } from '@/libs/intl/navigation'
import { XIcon } from '@/components/icons/XIcon'
import { HamburgerMenuProps } from './interface'

export function HamburgerMenu({ className }: HamburgerMenuProps) {
  const arrowRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations('HomePage.Menu')
  const router = useRouter()

  const menus = [
    { title: t('aboutUs'), pathname: '/about-us' },
    { title: t('service'), pathname: '/services' },
    {
      title: t('infrastructureContainers'),
      pathname: '/infrastructure-containers',
    },
    { title: t('news'), pathname: '/news' },
    { title: t('eService'), pathname: '#' },
    { title: t('investorRelations'), pathname: '/investor-information' },
  ]

  const { refs, floatingStyles, context } = useFloating<HTMLLabelElement>({
    placement: 'top-end',
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(16),
      elementSize({
        apply({ elements }) {
          Object.assign(elements.floating.style, {
            maxWidth: '250px',
          })
        },
      }),
      arrow({
        element: arrowRef,
      }),
    ],
  })

  const click = useClick(context, { event: 'mousedown' })
  const dismiss = useDismiss(context)

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [click, dismiss]
  )

  function handleClick(pathname: string) {
    router.push(pathname)
  }

  return (
    <Fragment>
      <button
        className={cn(
          'fixed bottom-[20px] right-[20px] flex justify-center items-center w-[50px] h-[50px] bg-primary rounded-full text-white',
          className
        )}
        type='button'
        {...getReferenceProps()}
        ref={refs.setReference}
      >
        {isOpen ? (
          <XIcon width='25' height='25' />
        ) : (
          <ListIcon width='25' height='25' />
        )}
      </button>
      {isOpen && (
        <ul
          className='relative py-[16px] rounded-[6px] z-[10] shadow-3 bg-white w-full text-darkGray uppercase'
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          <FloatingArrow
            className='fill-white'
            ref={arrowRef}
            context={context}
          />
          {menus.map(menu => {
            return (
              <li
                key={menu.title}
                className='py-[10px] px-[24px] text-[14px] hover:text-navy hover:bg-white-1 hover:cursor-pointer'
                {...getItemProps({
                  onClick() {
                    handleClick(menu.pathname)
                  },
                })}
              >
                {menu.title}
              </li>
            )
          })}
        </ul>
      )}
    </Fragment>
  )
}
