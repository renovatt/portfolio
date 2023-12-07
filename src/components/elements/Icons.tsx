'use client'
import { SkillsTypeProps } from '@types'
import { motion } from 'framer-motion'
// import useStatusStore from 'store'

export default function Icons({ id, svg_link: svgLink }: SkillsTypeProps) {
  // const { setStatus, clearStatus } = useStatusStore()
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      // whileHover={{ scale: 1.1 }}
      // whileTap={{ scale: 0.8 }}
      // initial="hidden"
      // animate="visible"
      className="item flex h-24 w-24 items-center justify-center"
    >
      <figure className="-z-10 h-24 w-24">
        <motion.img
          className="h-full w-full cursor-pointer object-cover"
          src={svgLink}
          alt="svg-icon"
          // onMouseOut={clearStatus}
          // onMouseOver={() => setStatus(id)}
        />
      </figure>
    </motion.section>
  )
}
