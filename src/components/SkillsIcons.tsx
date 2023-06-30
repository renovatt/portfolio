import { SkillsIconsComponentProps } from '@/@types';
import SpinerLoader from './Helper/SpinerLoader';
import IconsError from './Helper/IconsError';

const SkillsIcons = (props: SkillsIconsComponentProps) => {
    if (props.loading) {
        return <SpinerLoader />
    }

    if (props.error) {
        return <IconsError />
    }

    return (
        <section
            className='flex justify-center items-center'
            key={props.skill.id}
            onMouseOver={props.onMouseOver}
            onMouseOut={props.onMouseOut}
        >
            <aside className='flex items-center justify-center'>
                <span className='cursor-pointer p-2 text-white hover:text-textPrimary transition-all ease-in-out hover:scale-110'>
                    <figure className='w-24 h-24'>
                        <img
                            className='w-full h-full object-cover'
                            src={props.skill.svg_link}
                            alt={props.skill.skill_name}
                        />
                    </figure>
                </span>
            </aside>
        </section>
    );
};

export default SkillsIcons;
