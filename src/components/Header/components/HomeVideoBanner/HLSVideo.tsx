'use client'

import { useEffect, useRef } from 'react'
import Hls from 'hls.js'

type HLSVideoProps = {
  src: string
  className?: string
}

export default function HLSVideo({ src, className }: HLSVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const playVideo = () => {
      video.play()
    }

    //Safari / iOS
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src
      video.addEventListener('loadedmetadata', playVideo)

      return () => {
        video.removeEventListener('loadedmetadata', playVideo)
      }
    }

    // Chrome / Android
    if (Hls.isSupported()) {
      const hls = new Hls({
        lowLatencyMode: true,
        maxBufferLength: 30,
      })

      hls.loadSource(src)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, playVideo)

      return () => hls.destroy()
    }
  }, [src])

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload='none'
      className={className}
    />
  )
}
