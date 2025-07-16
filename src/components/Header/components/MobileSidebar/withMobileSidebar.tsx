import {
  MobileSidebarAcceptProps,
  MobileSidebarProps,
} from '@/components/Header/components/MobileSidebar/interface'
import React, { useEffect, useState } from 'react'

const withMobileSidebar = (Component: React.FC<MobileSidebarProps>) => {
  const Hoc = ({ handleOnToggleMobileSidebar }: MobileSidebarAcceptProps) => {
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
      // To render as animation after component attach to DOM
      setIsVisible(true)
    }, [])

    const handleOnToggle = () => {
      handleOnToggleMobileSidebar()
    }

    const newProps: MobileSidebarProps = {
      handleOnToggle,
      isVisible,
    }
    return <Component {...newProps} />
  }

  return Hoc
}
export default withMobileSidebar
