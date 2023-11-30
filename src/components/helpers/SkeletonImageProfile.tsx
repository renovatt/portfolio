'use client'
import React from 'react'
import Image from 'next/image'
import { ImageProps } from '@types'
import { motion } from 'framer-motion'

const SkeletonImageProfile = ({ src, alt, className }: ImageProps) => {
  const [sketelon, setSkeleton] = React.useState(true)

  const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>): void => {
    setSkeleton(false)
    event.currentTarget.style.opacity = '1'
  }

  return (
    <motion.figure
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="grid"
    >
      {sketelon && (
        <span className="bg-gradient-radial col-start-1 row-start-1 h-full animate-pulse rounded-full bg-primary-850 bg-cover"></span>
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
    </motion.figure>
  )
}

export default SkeletonImageProfile
