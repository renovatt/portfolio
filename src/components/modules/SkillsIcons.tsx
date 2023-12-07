import Icons from '@elements/Icons'
import { Suspense } from 'react'
import { getSkills } from 'services'
import Loader from '@helpers/Loader'

const SkillsIcons = async () => {
  const { skills } = await getSkills()

  return (
    <aside className="grid grid-cols-3 gap-4 md:grid-cols-4">
      <Suspense fallback={<Loader />}>
        {skills?.map((skill, index) => <Icons key={index} {...skill} />)}
      </Suspense>
    </aside>
  )
}

export default SkillsIcons
