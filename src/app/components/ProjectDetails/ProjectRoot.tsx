'use client'

import { ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { ProjectsTypeProps } from '@/@types'

type ProjectRootProps = {
    children: ReactNode;
} & ProjectsTypeProps;

const ProjectRoot = ({ children, ...props }: ProjectRootProps) => {
    const router = useRouter();

    function handleCloseModal(
        event: React.MouseEvent<HTMLElement> |
            React.TouchEvent<HTMLElement>
    ) {
        if (event.target === event.currentTarget) {
            router.back()
        }
    }

    const backgroundImageUrl = `${props.thumbnail_url}`;

    const sectionStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
    };

    return (
        <section
            // style={sectionStyle}
            className="fixed inset-0 overflow-y-auto bg-transparent backdrop-blur-md bg-cover bg-center bg-no-repeat">
            <section
                onClick={(e) => handleCloseModal(e)}
                className="flex min-h-full items-center justify-center py-6 bg-transparent backdrop-blur-md">
                <section
                    onClick={(e) => handleCloseModal(e)}
                    className='relative flex items-center justify-between h-[80%] w-[90%] max-w-6xl rounded-lg p-4 flex-col m-auto overflow-y-auto overflow-x-hidden'
                >
                    {children}
                </section>
            </section>
        </section >
    )
}

export default ProjectRoot;