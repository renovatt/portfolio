'use client'
import { ProfileProps } from '@types'
import { motion } from 'framer-motion'

export default function ProfileText({
  description_1: descriptionOne,
  description_2: descriptionTwo,
}: ProfileProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.4,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="space-y-4"
    >
      <p className="text-justify text-xl text-secondary-850">
        {descriptionOne}
      </p>
      <p className="text-justify text-xl text-secondary-850">
        {descriptionTwo}
      </p>
    </motion.article>
  )
}
