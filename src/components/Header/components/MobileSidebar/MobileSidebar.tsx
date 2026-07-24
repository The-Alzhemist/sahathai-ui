import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Link } from '@/libs/intl/navigation'
import { cn } from '@/libs/util'

import { MobileSidebarProps } from '@/components/Header/components/MobileSidebar/interface'
import withMobileSidebar from './withMobileSidebar'

import { PhoneIcon } from '@/components/icons/PhoneIcon'
import { ReadCVIcon } from '@/components/icons/ReadCvIcon'
import { useSubmenu } from '@/hooks/useSubmenu'

import React from 'react'
import MenuCollapse from '@/components/Header/components/MenuCollapse/MenuCollapse'
import { NewspaperIcon } from '@/components/icons/NewsIcon'
import { YoutubeIcon } from '@/components/icons/YoutubeIcon'
import { FacebookIcon } from '@/components/icons/FacebookIcon'
import { InstagramIcon } from '@/components/icons/InstagramIcon'
import { useNavigationTick } from '@/context/NavigationTickContext'

interface SidebarLinkProps {
  href: string
  icon?: JSX.Element
  label: string
  onClick: () => void
  isExternalLink?: boolean
  isSubMenu?: boolean
}

const SidebarLink = ({
  href,
  icon,
  label,
  onClick,
  isExternalLink = false,
  isSubMenu = false,
}: SidebarLinkProps) => {
  const { bumpTick } = useNavigationTick()

  return (
    <div
      onClick={() => {
        bumpTick()
        onClick()
      }}
    >
      <Link
        className='group flex items-center gap-x-2'
        href={href}
        target={isExternalLink ? '_blank' : undefined}
        rel={isExternalLink ? 'noopener noreferrer' : undefined}
      >
        {icon && icon}
        {isSubMenu && <span className='px-2 group-hover:text-navy'>-</span>}
        <span className='text-black-6 group-hover:text-navy'>{label}</span>
      </Link>
    </div>
  )
}

const MobileSidebar = ({ handleOnToggle, isVisible }: MobileSidebarProps) => {
  const t = useTranslations('Header')
  const { menus } = useSubmenu()
  const { bumpTick } = useNavigationTick()

  return (
    <nav
      className={cn(
        'bg-white h-full w-full fixed top-0 left-0 z-20 flex flex-col',
        'transition-all duration-500',
        isVisible ? 'opacity-100 ' : ' opacity-0'
      )}
    >
      <div className='max-w-7xl w-full mx-auto px-5 pt-5 shrink-0'>
        <section className='flex justify-between pb-2 border-b'>
          <Link href='/' className='shrink-0 p-[10px]' onClick={bumpTick}>
            <Image src='/logo.png' width={101} height={24} alt='' priority />
          </Link>
          <div className='text-xl cursor-pointer' onClick={handleOnToggle}>
            X
          </div>
        </section>
      </div>

      <div
        className='max-w-7xl w-full mx-auto px-5 flex-1 min-h-0 overflow-y-auto'
        style={{ paddingBottom: 'max(24px, env(safe-area-inset-bottom))' }}
      >
        <div className='min-h-full flex flex-col justify-between'>
          <div className='flex flex-col mt-10 gap-y-6 text-gray-700'>
            {menus.map(menu => {
              if (menu.children && menu.children.length) {
                return (
                  <MenuCollapse
                    key={menu.title}
                    title={menu.title}
                    icon={menu.icon}
                  >
                    {menu.children.map(subMenu => {
                      return (
                        <SidebarLink
                          key={subMenu.title}
                          href={subMenu.pathname}
                          label={subMenu.title}
                          onClick={handleOnToggle}
                          isSubMenu
                        />
                      )
                    })}
                  </MenuCollapse>
                )
              }
              return (
                <div
                  className='min-h-[40px] flex items-center'
                  key={menu.title}
                >
                  <SidebarLink
                    href={menu.pathname}
                    icon={menu.icon}
                    label={menu.title}
                    onClick={handleOnToggle}
                  />
                </div>
              )
            })}
          </div>

          <div className='flex flex-col mt-10 gap-y-6 text-gray-700'>
            <SidebarLink
              href='/blog'
              icon={<NewspaperIcon width='20' height='20' />}
              label={t('blog')}
              onClick={handleOnToggle}
            />
            <SidebarLink
              href='/contact-us'
              icon={<PhoneIcon width='20' height='20' />}
              label={t('contactUs')}
              onClick={handleOnToggle}
            />
            <SidebarLink
              href='/join-us'
              icon={<ReadCVIcon width='20' height='20' />}
              label={t('joinUs')}
              onClick={handleOnToggle}
            />

            <div className='flex items-center gap-x-2 text-blue-300 -ml-2'>
              <Link
                href='https://www.youtube.com/channel/UCp2XYZiyDSN6Xt5DSQv_foA/videos?view=0&sort=dd&shelf_id=0'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2'
              >
                <YoutubeIcon width='22' height='22' />
              </Link>
              <Link
                href='https://www.facebook.com/sahathaiterminal/?locale=th_TH'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2'
              >
                <FacebookIcon width='22' height='22' />
              </Link>
              <Link
                href='https://www.instagram.com/sahathaiterminal/?hl=en'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2'
              >
                <InstagramIcon width='22' height='22' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

const WrappedComponent = withMobileSidebar(MobileSidebar)
export default WrappedComponent
