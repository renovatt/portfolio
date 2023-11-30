'use client'
import { SkillsTypeProps } from '@types'
import { motion } from 'framer-motion'
import useStatusStore from 'store'

const gridContainer = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export default function Icons({ id, svg_link: svgLink }: SkillsTypeProps) {
  const { setStatus, clearStatus } = useStatusStore()
  return (
    <motion.section
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      variants={gridContainer}
      initial="hidden"
      animate="visible"
      className="item flex h-24 w-24 items-center justify-center"
    >
      <figure className="-z-10 h-24 w-24">
        <motion.img
          variants={item}
          className="h-full w-full cursor-pointer object-cover"
          src={svgLink}
          alt="svg-icon"
          onMouseOut={clearStatus}
          onMouseOver={() => setStatus(id)}
        />
      </figure>
    </motion.section>
  )
}
