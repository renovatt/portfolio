'use client'

import Link from "next/link"
import { ProjectsTypeProps } from "@/@types"

const ProjectCard = (props: ProjectsTypeProps) => {
    return (
        <section className='flex items-center justify-center flex-col h-full'>
            <section
                className='relative mt-8 md:mt-0 h-96 w-60 my-0 mx-2 rounded-lg bg-backgroundThird bg-cover bg-center'
                style={{ backgroundImage: `url(${props.banner_url})` }}
            >
                <span className="flex items-center justify-between flex-col h-full rounded-lg py-6 hover:bg-backgroundShadow border border-zinc-800 hover:border-textPrimary transition-all ease-in-out"></span>
            </section>

            <h1 className='text-center text-white font-bold text-2xl mt-2'>
                {props.project_name}
            </h1>

            <Link
                className='text-xl font-bold py-2 px-16 transition-all text-textPrimary hover:text-white bg-white hover:bg-backgroundPrimary rounded-lg mt-2'
                href={props.deploy_url}
                target="_blank"
            >
                Deploy
            </Link>
        </section>
    )
}

export default ProjectCard;