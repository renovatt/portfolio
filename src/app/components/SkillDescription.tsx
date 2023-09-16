import { SkillsTypeProps } from '@/@types'

const SkillDescription = (props: SkillsTypeProps) => {
  return (
    <section className="flex min-h-[15rem] w-full animate-fade flex-col items-start justify-center bg-backgroundThird p-8 transition-all">
      <h2 className="text-xl font-bold text-textPrimary">{props.skill_name}</h2>
      <p className="text-xl text-textDescription">{props.description}</p>
    </section>
  )
}

export default SkillDescription
