'use client'
import React from 'react'
import Image from 'next/image'
import { ImageProps } from '@types'

const SkeletonImageProfile = ({ src, alt }: ImageProps) => {
  const [sketelon, setSkeleton] = React.useState(true)

  const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>): void => {
    setSkeleton(false)
    event.currentTarget.style.opacity = '1'
  }

  return (
    <figure className="grid">
      <Image
        className={`ease col-start-1 row-start-1 transition-all ease-in-out ${
          sketelon ? 'blur-sm' : 'blur-none'
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
