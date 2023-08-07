import { SkillsTypeProps } from '@/@types'

const SkillDescription = (props: SkillsTypeProps) => {
    return (
        <section className='flex items-start flex-col justify-center bg-backgroundThird w-full min-h-[10rem] p-8 animate-fade transition-all'>
            <h2 className='text-textPrimary font-bold text-xl'>{props.skill_name}</h2>
            <p className='text-textDescription text-xl'>{props.description}</p>
        </section>
    )
}

export default SkillDescription;