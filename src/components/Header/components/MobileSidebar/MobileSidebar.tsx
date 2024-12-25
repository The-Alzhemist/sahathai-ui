import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Link } from '@/libs/intl/navigation'
import { cn } from '@/libs/util'
import { UserIcon } from '@/components/icons/UserIcon'
import { HeadsetIcon } from '@/components/icons/HeadsetIcon'
import { useMobileSidebarAnimation } from '@/hooks/useMobileSidebarAnimation'
import { MobileSidebarProps } from '@/components/Header/components/MobileSidebar/interface'
import withMobileSidebar from './withMobileSidebar'
import { ShippingIcon } from '@/components/icons/ShippingIcon'
import { NewspaperIcon } from '@/components/icons/NewsIcon'
import { DeviceMobileIcon } from '@/components/icons/DeviceMobileIcon'
import { ChartIcon } from '@/components/icons/ChartIcon'
import { PhoneIcon } from '@/components/icons/PhoneIcon'
import { ReadCVIcon } from '@/components/icons/ReadCvIcon'

interface SidebarLinkProps {
  href: string
  icon: JSX.Element
  label: string
  onClick: () => void
  isExternalLink?: boolean
}

const SidebarLink = ({
  href,
  icon,
  label,
  onClick,
  isExternalLink = false,
}: SidebarLinkProps) => {
  if (isExternalLink) {
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className='flex items-center gap-x-2 text-black-6'
      >
        {icon}
        <span>{label}</span>
      </a>
    )
  }

  return (
    <div onClick={onClick}>
      <Link className='flex items-center gap-x-2' href={href}>
        {icon}
        <span className='text-black-6'>{label}</span>
      </Link>
    </div>
  )
}

const MobileSidebar = ({ handleOnToggle, isVisible }: MobileSidebarProps) => {
  const t = useTranslations('Header')
  const { ref, animationClassName } = useMobileSidebarAnimation(isVisible)

  const handleClose = () => handleOnToggle(false)

  return (
    <nav
      ref={ref}
      className={cn(
        animationClassName,
        'bg-white h-full w-full fixed top-0 left-0 z-20 p-5'
      )}
    >
      <div className='h-full max-w-7xl mx-auto flex flex-col'>
        <section className='flex justify-between pb-2 border-b'>
          <Link href='/' className='shrink-0 p-[10px]'>
            <Image src='/logo.png' width={101} height={24} alt='' priority />
          </Link>
          <div className='text-xl cursor-pointer' onClick={handleClose}>
            X
          </div>
        </section>

        <section className='flex flex-col justify-between h-full'>
          <div className='flex flex-col mt-10 gap-y-6 text-gray-700'>
            <SidebarLink
              href='/contact-us'
              icon={<UserIcon width='20' height='20' />}
              label={t('aboutUs')}
              onClick={handleClose}
            />
            <SidebarLink
              href='/services'
              icon={<HeadsetIcon width='20' height='20' />}
              label={t('service')}
              onClick={handleClose}
            />
            <SidebarLink
              href='/infrastructure-containers'
              icon={<ShippingIcon width='20' height='20' />}
              label={t('infra')}
              onClick={handleClose}
            />
            <SidebarLink
              href='/news'
              icon={<NewspaperIcon width='20' height='20' />}
              label={t('news')}
              onClick={handleClose}
            />
            <SidebarLink
              href='https://sahathaiterminal.com/th/tracking/'
              icon={<DeviceMobileIcon width='20' height='20' />}
              label={t('eService')}
              onClick={handleClose}
              isExternalLink={true}
            />
            <SidebarLink
              href='/investor-information'
              icon={<ChartIcon width='20' height='20' />}
              label={t('invester')}
              onClick={handleClose}
            />
          </div>

          <div className='flex flex-col mt-10 gap-y-6 text-gray-700'>
            <SidebarLink
              href='/contact-us'
              icon={<PhoneIcon width='20' height='20' />}
              label={t('contactUs')}
              onClick={handleClose}
            />
            <SidebarLink
              href='/john-us'
              icon={<ReadCVIcon width='20' height='20' />}
              label={t('joinUs')}
              onClick={handleClose}
            />
          </div>
        </section>
      </div>
    </nav>
  )
}

const WrappedComponent = withMobileSidebar(MobileSidebar)
export default WrappedComponent
