'use client'
import { motion } from 'framer-motion'
import TypingEffect from '../elements/TypingEffect'

export default function Presentation() {
  return (
    <article className="relative flex w-full flex-col items-center p-0 md:items-start md:pl-20">
      <motion.span
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="text-5xl text-750"
      >
        Olá,
        <motion.span
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="pl-2 text-5xl text-750"
        >
          eu
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="pl-2 text-5xl text-750"
        >
          sou
        </motion.span>
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="text-8xl font-bold text-750 md:ml-8 md:text-9xl"
      >
        Will
        <motion.span
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 2.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="text-950"
        >
          .
        </motion.span>
      </motion.h1>

      <TypingEffect />
    </article>
  )
}
