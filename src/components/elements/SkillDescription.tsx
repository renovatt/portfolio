import { SkillsTypeProps } from '@types'

const SkillDescription = (props: SkillsTypeProps) => {
  return (
    <section className="flex min-h-[25rem] w-full animate-fade flex-col items-start justify-center bg-primary-850 p-8 transition-all lg:min-h-[15rem]">
      <h2 className="text-xl font-bold text-primary-950">{props.skill_name}</h2>
      <p className="text-xl text-secondary-850">{props.description}</p>
    </section>
  )
}

export default SkillDescription
