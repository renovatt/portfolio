'use client'
import useStatusStore from 'store'
import { SkillsResponse } from '@types'
import SmallError from '@helpers/SmallError'
import SmallLoader from '@helpers/SmallLoader'
import SkillDescription from './SkillDescription'
import { useSkillQuery } from '@hooks/useSkillQuery'
import SkillDefaultDescription from './SkillDefaultDescription'

const SkillsDescriptions = () => {
  const { status } = useStatusStore()
  const { data, isError, isLoading } = useSkillQuery()

  const skills = data as SkillsResponse
  const hoveredSkill = skills?.skills?.find(
    (skill) => skill.id === status.skillId,
  )

  if (isError) return <SmallError />
  if (isLoading) return <SmallLoader />
  if (hoveredSkill && status.isHovered)
    return <SkillDescription {...hoveredSkill} />

  return <SkillDefaultDescription />
}

export default SkillsDescriptions
