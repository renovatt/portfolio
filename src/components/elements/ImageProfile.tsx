'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn } from '@constants/variants'

const ImageProfile = () => {
  const [sketelon, setSkeleton] = React.useState(true)

  const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>): void => {
    setSkeleton(false)
    event.currentTarget.style.opacity = '1'
  }

  return (
    <motion.section
      variants={fadeIn({ direction: 'down', delay: 0.3 })}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="relative my-2 min-h-[20rem] w-80 overflow-hidden rounded-full"
    >
      <figure className="grid">
        <Image
          className={`ease col-start-1 row-start-1 transition-all ease-in-out ${
            sketelon ? 'blur-sm' : 'blur-none'
          }`}
          onLoad={handleLoad}
          src="/assets/profile.jpeg"
          alt="profile-image"
          priority
          width={500}
          height={500}
        />
      </figure>
    </motion.section>
  )
}

export default ImageProfile
