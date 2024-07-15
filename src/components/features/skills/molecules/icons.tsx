'use client'
import { motion } from 'framer-motion'
import { StackDto } from '@entities/stack.dto'
import { fadeIn } from '~static/motion-variants'

const Icons = ({ iconUrl }: StackDto) => {
  return (
    <motion.section
      drag
      dragElastic={1}
      dragConstraints={{ bottom: 0, left: 0, top: 0, right: 0 }}
      variants={fadeIn({ direction: 'up', delay: 0.3 })}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="item flex h-24 w-24 cursor-grab items-center justify-center"
    >
      <motion.figure className="pointer-events-none -z-10 h-24 w-24">
        <motion.img
          className="h-full w-full cursor-pointer object-cover"
          src={iconUrl}
          alt="svg-icon"
        />
      </motion.figure>
    </motion.section>
  )
}

export default Icons
