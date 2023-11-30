import Icons from './Icons'
import { getSkills } from 'services'

const SkillsIcons = async () => {
  const { skills } = await getSkills()

  return (
    <aside className="mb-8 grid w-auto grid-cols-3 gap-4 sm:grid-cols-4 md:mb-0">
      {skills?.map((skill, index) => <Icons key={index} {...skill} />)}
    </aside>
  )
}

export default SkillsIcons
