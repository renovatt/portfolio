'use client'
import useStatusStore from 'store'
import SmallError from '@helpers/SmallError'
import Description from './Description'
import { useSkillQuery } from '@hooks/useSkillQuery'
import DefaultDescription from './DefaultDescription'
import { motion } from 'framer-motion'

const SkillDescription = () => {
  const { status } = useStatusStore()
  const { data: skills, isError } = useSkillQuery()

  const hoveredSkill = skills?.skills?.find(
    (skill) => skill.id === status.skillId,
  )

  if (isError) return <SmallError />

  return (
    <motion.aside
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        damping: 0,
      }}
      className="flex min-h-[15rem] w-full items-center justify-center overflow-hidden md:w-[50%]"
    >
      {hoveredSkill && status.isHovered ? (
        <Description {...hoveredSkill} />
      ) : (
        <DefaultDescription />
      )}
    </motion.aside>
  )
}

export default SkillDescription
