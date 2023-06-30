import { SkillsDescriptonProps } from '@/@types'
import SmallLoader from './Helper/SmallLoader'
import SmallError from './Helper/SmallError'

export const SkillsDescriptions = (props: SkillsDescriptonProps) => {
    if (props.loading) {
        return <SmallLoader />
    }

    if (props.error) {
        return <SmallError />
    }

    return (
        <section className='flex items-start flex-col justify-center bg-backgroundThird w-full min-h-[10rem] p-8 animate-fade transition-all'>
            <h2 className='text-textPrimary font-bold text-xl'>{props.skill.skill_name}</h2>
            <p className='text-textDescription text-xl'>{props.skill.description}</p>
        </section>
    )
}