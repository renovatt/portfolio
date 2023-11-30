'use client'
import { ReactNode } from 'react'
import { ProjectsTypeProps } from '@types'
import { motion } from 'framer-motion'

type ProjectRootProps = {
  children: ReactNode
} & ProjectsTypeProps

const ProjectContent = ({ children, ...props }: ProjectRootProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="relative z-50 flex h-auto w-full flex-col items-center justify-between rounded-lg bg-secondary-750 px-2 py-3 md:flex-row"
      key={props.id}
    >
      {children}
    </motion.section>
  )
}

export default ProjectContent
