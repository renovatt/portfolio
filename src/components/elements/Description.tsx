import { SkillsTypeProps } from '@types'

const Description = ({
  description,
  skill_name: skillName,
}: SkillsTypeProps) => {
  return (
    <section className="flex h-full w-full animate-fade flex-col items-start justify-center p-8 transition-all">
      <h2 className="text-xl font-bold text-primary-950">{skillName}</h2>
      <p className="text-xl text-secondary-850">{description}</p>
    </section>
  )
}

export default Description
