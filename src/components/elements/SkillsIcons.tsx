import Icons from './Icons'
import { getSkills } from 'services'

const SkillsIcons = async () => {
  const { skills } = await getSkills()

  return (
    <aside className="grid grid-cols-4 gap-4">
      {skills?.map((skill, index) => <Icons key={index} {...skill} />)}
    </aside>
  )
}

export default SkillsIcons
