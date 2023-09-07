'use client'

import React from 'react'
import Image from 'next/image'
import { ImageProps } from '@/@types'

const SkeletonImageProfile = ({ src, alt, className }: ImageProps) => {
  const [sketelon, setSkeleton] = React.useState(true)

  const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>): void => {
    setSkeleton(false)
    event.currentTarget.style.opacity = '1'
  }

  return (
    <figure className="grid">
      {sketelon && (
        <span className="bg-gradient-radial col-start-1 row-start-1 h-full animate-pulse rounded-full bg-backgroundThird bg-cover"></span>
      )}
      <Image
        className={`ease col-start-1 row-start-1 opacity-0 transition-all ${
          className && 'animate-fly'
        }`}
        onLoad={handleLoad}
        src={src}
        alt={alt}
        priority
      />
    </figure>
  )
}

export default SkeletonImageProfile
