import { ReactNode } from 'react';
import { ProjectsTypeProps } from '@/@types'

type ProjectRootProps = {
    children: ReactNode;
} & ProjectsTypeProps;

const ProjectContent = ({ children, ...props }: ProjectRootProps) => {
    return (
        <section
            data-aos="zoom-in-up"
            className='flex items-center justify-between h-auto w-full rounded-lg py-3 px-2 flex-col md:flex-row bg-zinc-800 relative z-50'
            key={props.id}
        >
            {children}
        </section>
    )
}

export default ProjectContent;