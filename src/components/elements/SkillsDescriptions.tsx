'use client'
import useStatusStore from 'store'
import { skills } from 'mocks/skills'
import SkillDescription from './SkillDescription'
import SkillDefaultDescription from './SkillDefaultDescription'

const SkillsDescriptions = () => {
  const { status } = useStatusStore()
  const hoveredSkill = skills.find((skill) => skill.id === status.skillId)

  if (hoveredSkill && status.isHovered) {
    return <SkillDescription {...hoveredSkill} />
  }

  return <SkillDefaultDescription />
}

export default SkillsDescriptions
