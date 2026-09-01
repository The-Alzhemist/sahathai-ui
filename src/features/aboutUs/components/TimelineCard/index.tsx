'use client'

import { useAnimation } from '@/hooks/useAnimation'
import { TimelineCardProps } from './interface'
import { TimelineCardDesktop } from './TimelineCardDesktop'
import { TimelineCardMobile } from './TimelineCardMobile'

export function TimelineCard(props: TimelineCardProps) {
  const { ref, animationClassName } = useAnimation()

  return (
    <div ref={ref}>
      <TimelineCardDesktop {...props} animationClassName={animationClassName} />
      <TimelineCardMobile {...props} animationClassName={animationClassName} />
    </div>
  )
}
