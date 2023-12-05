'use client'
import React from 'react'
import Image from 'next/image'
import profile from '@assets/profile.jpeg'
import { motion } from 'framer-motion'

const ImageProfile = () => {
  const [sketelon, setSkeleton] = React.useState(true)

  const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>): void => {
    setSkeleton(false)
    event.currentTarget.style.opacity = '1'
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.4,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="relative my-2 min-h-[20rem] w-80 overflow-hidden rounded-full"
    >
      <figure className="grid">
        <Image
          className={`ease col-start-1 row-start-1 transition-all ease-in-out ${
            sketelon ? 'blur-sm' : 'blur-none'
          }`}
          onLoad={handleLoad}
          src={profile}
          alt="profile-image"
          priority
        />
      </figure>
    </motion.section>
  )
}

export default ImageProfile
