'use client'
import { fadeIn } from '@constants/variants'
import { SkillsTypeProps } from '@types'
import { motion } from 'framer-motion'
import useStatusStore from 'store'

export default function Icons({ id, svg_link: svgLink }: SkillsTypeProps) {
  const { setStatus, clearStatus } = useStatusStore()
  return (
    <motion.section
      drag
      dragElastic={1}
      // dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      variants={fadeIn({ direction: 'up', delay: 0.3 })}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="item flex h-24 w-24 cursor-grab items-center justify-center"
    >
      <motion.figure drag className="pointer-events-none -z-10 h-24 w-24">
        <motion.img
          className="h-full w-full cursor-pointer object-cover"
          src={svgLink}
          alt="svg-icon"
          onMouseOut={clearStatus}
          onMouseOver={() => setStatus(id)}
        />
      </motion.figure>
    </motion.section>
  )
}
