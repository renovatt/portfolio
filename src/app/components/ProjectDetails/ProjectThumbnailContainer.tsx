import { ReactNode } from "react";

type ProjectThumbnailContainerProps = {
    children: ReactNode;
}

const ProjectThumbnailContainer = ({ children }: ProjectThumbnailContainerProps) => {
    return (
        <section className='flex items-center md:justify-around justify-center flex-col w-full h-auto md:h-full max-w-[900px] p-8 mt-8 md:mt-0 overflow-hidden'>
            {children}
        </section>
    )
}

export default ProjectThumbnailContainer;