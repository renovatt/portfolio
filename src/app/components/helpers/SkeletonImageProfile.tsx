'use client'

import React from 'react'
import Image from 'next/image'
import { ImageProps } from '@/@types'

const SkeletonImageProfile = ({ src, alt, className }: ImageProps) => {
  const [sketelon, setSkeleton] = React.useState(true)

  const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>): void => {
    setSkeleton(false)
    event.currentTarget.style.opacity = "1";
  }

  return (
    <figure className='grid'>
      {
        sketelon && (
          <span className='col-start-1 row-start-1 h-full rounded-full bg-cover bg-backgroundThird bg-gradient-radial animate-pulse'></span>
        )}
      <Image
        className={`opacity-0 col-start-1 row-start-1 transition-all ease ${className && 'animate-fly'}`}
        onLoad={handleLoad}
        src={src}
        alt={alt}
      />
    </figure>
  )
}

export default SkeletonImageProfile;