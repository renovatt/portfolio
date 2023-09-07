import { ReactNode } from 'react'
import { ProjectsTypeProps } from '@/@types'

type ProjectRootProps = {
  children: ReactNode
} & ProjectsTypeProps

const ProjectContent = ({ children, ...props }: ProjectRootProps) => {
  return (
    <section
      data-aos="zoom-in-up"
      className="relative z-50 flex h-auto w-full flex-col items-center justify-between rounded-lg bg-zinc-800 px-2 py-3 md:flex-row"
      key={props.id}
    >
      {children}
    </section>
  )
}

export default ProjectContent
