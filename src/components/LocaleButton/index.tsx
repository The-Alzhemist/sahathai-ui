'use client'
import { Fragment, useState } from 'react'
import { useLocale } from 'next-intl'
import { useSearchParams } from 'next/navigation'

import {
  autoUpdate,
  useFloating,
  useInteractions,
  size as elementSize,
  offset,
  autoPlacement,
  useClick,
  useDismiss,
} from '@floating-ui/react'
import { LocaleEnum } from '@/enums/LocaleEnum'
import { usePathname, useRouter } from '@/libs/intl/navigation'
import { cn } from '@/libs/util'
import { GlobeIcon } from '../icons/GlobeIcon'
import { LocaleButtonProps } from './interface'

export function LocaleButton({ className }: LocaleButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const locale = useLocale()

  const router = useRouter()
  const pathname = usePathname()
  const queryStrings = useSearchParams()

  function handleLocaleChange(value: LocaleEnum) {
    const query = queryStrings.toString()
    router.replace(query ? `${pathname}?${query}` : pathname, {
      locale: value,
      scroll: false,
    })
  }

  const { refs, floatingStyles, context } = useFloating<HTMLLabelElement>({
    placement: 'bottom',
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(4),
      autoPlacement({
        allowedPlacements: ['bottom'],
        padding: 4,
      }),
      elementSize({
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

  return (
    <Fragment>
      <button
        className={cn(
          'flex items-center uppercase gap-[10px] uppercase',
          className
        )}
        type='button'
        {...getReferenceProps()}
        ref={refs.setReference}
      >
        <GlobeIcon width='24' height='24' />
        {locale}
      </button>
      {isOpen && (
        <ul
          className='relative p-[4px] rounded-[6px] z-[10] shadow-3 bg-white w-full text-black-80 uppercase'
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          <li
            className='py-[10px] px-[12px] text-[14px] hover:bg-white-2 hover:cursor-pointer rounded-[6px]'
            {...getItemProps({
              onClick() {
                handleLocaleChange(LocaleEnum.TH)
              },
            })}
          >
            {LocaleEnum.TH}
          </li>
          <li
            className='py-[10px] px-[12px] text-[14px] hover:bg-white-2 hover:cursor-pointer rounded-[6px]'
            {...getItemProps({
              onClick() {
                handleLocaleChange(LocaleEnum.EN)
              },
            })}
          >
            {LocaleEnum.EN}
          </li>
          <li
            className='py-[10px] px-[12px] text-[14px] hover:bg-white-2 hover:cursor-pointer rounded-[6px]'
            {...getItemProps({
              onClick() {
                handleLocaleChange(LocaleEnum.CN)
              },
            })}
          >
            {LocaleEnum.CN}
          </li>
        </ul>
      )}
    </Fragment>
  )
}
