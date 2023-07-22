import { SkillsIconsComponentProps } from '@/@types';
import SpinerLoader from './Helper/SpinerLoader';
import IconsError from './Helper/IconsError';

const SkillsIcons = (props: SkillsIconsComponentProps) => {
    const handleLoadSvg = (event: React.SyntheticEvent<HTMLObjectElement>): void => {
        const objectElement = event.currentTarget as HTMLObjectElement;
        objectElement.style.opacity = "1";
    };

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
                        <object
                            className="w-full h-full object-cover"
                            type="image/svg+xml"
                            data={props.skill.svg_link}
                            onLoad={handleLoadSvg}>
                        </object>
                    </figure>
                </span>
            </aside>
        </section>
    );
};

export default SkillsIcons;
