'use client'
import useStatusStore from 'store'
import SmallError from '@helpers/SmallError'
import SkillDescription from './SkillDescription'
import { useSkillQuery } from '@hooks/useSkillQuery'
import SkillDefaultDescription from './SkillDefaultDescription'
// import SkillsDesc from './SkillDesc'

const SkillsDescriptions = () => {
  const { status } = useStatusStore()
  const { data: skills, isError } = useSkillQuery()

  const hoveredSkill = skills?.skills?.find(
    (skill) => skill.id === status.skillId,
  )

  if (isError) return <SmallError />
  if (hoveredSkill && status.isHovered)
    return (
      <>
        <SkillDescription {...hoveredSkill} />
        {/* <SkillsDesc status={status} /> */}
      </>
    )

  return <SkillDefaultDescription />
}

export default SkillsDescriptions
