'use client'

import Link from "next/link";
import { ProjectsTypeProps } from "@/@types"

const ProjectTechsIcons = (props: ProjectsTypeProps) => {

    const handleLoadSvg = (event: React.SyntheticEvent<HTMLObjectElement>): void => {
        const objectElement = event.currentTarget as HTMLObjectElement;
        objectElement.style.opacity = "1";
    };

    return (
        <section className='flex md:justify-start justify-center items-center w-full'>
            <nav className='flex justify-center items-center'>
                {props.techs.links.map(tech => (
                    <Link
                        key={tech.id}
                        href={tech.link}
                        target='_blank'
                        className='flex justify-center items-center w-6 h-6 my-0 mx-1'
                    >
                        <figure className='w-full h-full -z-10'>
                            <object
                                className="opacity-0 object-cover w-full h-full"
                                type="image/svg+xml"
                                data={tech.svg_link}
                                onLoad={handleLoadSvg}>
                            </object>
                        </figure>
                    </Link>
                ))}
            </nav>
        </section>
    )
}

export default ProjectTechsIcons;