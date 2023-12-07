'use client'
import useStatusStore from 'store'
import { motion } from 'framer-motion'
import SmallError from '@helpers/SmallError'
import { useSkillQuery } from '@hooks/useSkillQuery'

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
        <section className="flex h-full w-full animate-fade flex-col items-start justify-center p-8 transition-all">
          <h2 className="text-xl font-bold text-950">
            {hoveredSkill.skill_name}
          </h2>
          <p className="text-xl text-850">{hoveredSkill.description}</p>
        </section>
      ) : (
        <section className="flex w-full items-center justify-center p-4">
          <h2 className="text-center text-xl text-850">
            Interaga com os ícones para mais informações.
          </h2>
        </section>
      )}
    </motion.aside>
  )
}

export default SkillDescription
