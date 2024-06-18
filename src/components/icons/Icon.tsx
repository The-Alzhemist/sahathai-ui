import { FC, SVGProps } from 'react'

import { IconProps } from './interface'

export const Icon = (SvgComponent: FC<SVGProps<HTMLSpanElement>>) => {
  function Component({
    height = '24',
    width = '24',
    className = '',
  }: IconProps) {
    const svgProps = {
      height,
      width,
      className,
    }
    return <SvgComponent {...svgProps} />
  }

  Component.displayName =
    SvgComponent.displayName || SvgComponent.name || 'Icon'

  return Component
}
