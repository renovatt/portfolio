'use client'

import useStatusStore from '@/store';
import { SkillsResponse } from '@/@types';
import IconsError from './Helper/IconsError';
import SpinerLoader from './Helper/SpinerLoader';
import { useSkillQuery } from '@/hooks/useSkillQuery';

const SkillsIcons = () => {

    const {
        setStatus,
        clearStatus
    } = useStatusStore()

    const {
        data,
        isError,
        isLoading,
    } = useSkillQuery()

    const skills = data as SkillsResponse;

    const handleLoadSvg = (event: React.SyntheticEvent<HTMLObjectElement>): void => {
        const objectElement = event.currentTarget as HTMLObjectElement;
        objectElement.style.opacity = '1';
    };

    if (isError) return <IconsError />
    if (isLoading) return <SpinerLoader />

    return skills?.skills?.map((skill) => (
        <section
            key={skill.id}
            onMouseOut={clearStatus}
            onMouseOver={() => setStatus(skill.id)}
            className='flex justify-center items-center transition-all ease-in hover:scale-110 '
        >
            <figure className='w-24 h-24 -z-10'>
                <object
                    className='w-full h-full object-cover animate-fade opacity-0'
                    type='image/svg+xml'
                    data={skill.svg_link}
                    onLoad={handleLoadSvg}
                    onMouseOut={clearStatus}
                    onMouseOver={() => setStatus(skill.id)}
                >
                </object>
            </figure>
        </section>
    ));
};

export default SkillsIcons;