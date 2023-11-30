'use client'
import { ReactNode } from 'react'
import { ProjectsTypeProps } from '@types'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

type CardARootProps = {
  children: ReactNode
} & ProjectsTypeProps

const CardRoot = ({ children, ...props }: CardARootProps) => {
  const router = useRouter()

  const gotToProjectPage = () => {
    router.push(`/project/${props.id}`)
  }

  const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>): void => {
    event.currentTarget.style.opacity = '1'
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="relative m-4 h-72 w-44 cursor-pointer rounded-lg bg-third-950 bg-cover bg-center md:h-80 md:w-48"
      style={{ backgroundImage: `url(${props.banner_url})` }}
      onLoad={handleLoad}
      onClick={gotToProjectPage}
    >
      {children}
    </motion.section>
  )
}

export default CardRoot
