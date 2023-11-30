import { Fragment } from 'react'
import Icons from './Icons'
import { getSkills } from 'services'

const SkillsIcons = async () => {
  const { skills } = await getSkills()

  return (
    <Fragment>
      {skills?.map((skill, index) => <Icons key={index} {...skill} />)}
    </Fragment>
  )
}

export default SkillsIcons
