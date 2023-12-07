'use client'
import TypingEffect from '@elements/TypingEffect'
import { motion } from 'framer-motion'

export default function Text() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        damping: 0,
      }}
    >
      <article className="relative flex w-full flex-col items-center p-0 md:items-start md:pl-10">
        <motion.span className="animate__animated animate__fadeIn text-5xl text-750">
          Olá,
          <motion.span className="animate__animated animate__fadeIn pl-2 text-5xl text-750">
            eu
          </motion.span>
          <motion.span className="animate__animated animate__fadeIn pl-2 text-5xl text-750">
            sou
          </motion.span>
        </motion.span>

        <motion.h1 className="animate__animated animate__fadeIn  text-8xl font-bold text-750 md:ml-8 md:text-9xl">
          Will
          <motion.span className="animate__animated animate__slideInDown  text-950">
            .
          </motion.span>
        </motion.h1>
        <TypingEffect />
      </article>
    </motion.div>
  )
}
