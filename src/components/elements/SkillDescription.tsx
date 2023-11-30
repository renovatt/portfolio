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
  if (hoveredSkill && status.isHovered)
    return (
      <motion.aside className="flex h-auto w-auto items-center justify-center overflow-hidden bg-primary-850 md:h-80 md:w-[50%] md:p-8">
        <Description {...hoveredSkill} />
      </motion.aside>
    )

  return (
    <motion.aside
      className="flex h-auto w-auto items-center justify-center overflow-hidden bg-primary-850 md:h-80 md:w-[50%] md:p-8"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <DefaultDescription />
    </motion.aside>
  )
}

export default SkillDescription
