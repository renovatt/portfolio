'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Link href="/" className="flex text-2xl font-bold md:text-3xl">
        <h1 className="inline-block text-750">
          <motion.span
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.6,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            {'{ '}
          </motion.span>
          <span className="text-950">...</span>
          Will
          <motion.span
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.6,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            {' }'}
          </motion.span>
        </h1>
      </Link>
    </motion.div>
  )
}
