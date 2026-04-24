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

    //Safari / iOS
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src
      return
    }

    // Chrome / Android
    if (Hls.isSupported()) {
      const hls = new Hls({
        lowLatencyMode: true,
        maxBufferLength: 30,
      })

      hls.loadSource(src)
      hls.attachMedia(video)

      return () => hls.destroy()
    }
  }, [src])

  useEffect(() => {
    setTimeout(() => {
      videoRef.current?.play()
    }, 1000)
  }, [])

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
