'use client'
import Link from 'next/link'
import { ProjectsTypeProps } from '@types'

const ProjectCard = (props: ProjectsTypeProps) => {
  return (
    <section className="flex h-full flex-col items-center justify-center">
      <section
        className="relative mx-2 my-0 mt-8 h-96 w-60 rounded-lg bg-primary-850 bg-cover bg-center md:mt-0"
        style={{ backgroundImage: `url(${props.banner_url})` }}
      >
        <span className="flex h-full flex-col items-center justify-between rounded-lg border border-zinc-800 py-6 transition-all ease-in-out hover:border-primary-950 hover:bg-third-950"></span>
      </section>

      <h1 className="mt-2 text-center text-2xl font-bold text-primary-750">
        {props.project_name}
      </h1>

      <Link
        className="mt-2 rounded-lg bg-primary-750 px-16 py-2 text-xl font-bold text-primary-950 transition-all hover:bg-primary-950 hover:text-primary-750"
        href={props.deploy_url}
        target="_blank"
      >
        Deploy
      </Link>
    </section>
  )
}

export default ProjectCard
