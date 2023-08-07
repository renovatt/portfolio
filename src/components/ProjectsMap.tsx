'use client'

import { Loader } from './Helper/Loader'
import { CardProject } from './CardProject'
import { ProjectsResponse } from '@/@types'
import { NotFoundPage } from './Helper/NotFoundPage'
import { useProjectsQuery } from '@/hooks/useProjectsQuery'

export const ProjectsMap = () => {

  const {
    data,
    isError,
    isLoading,
  } = useProjectsQuery()

  const projects = data as ProjectsResponse;

  if (isLoading) return <Loader />
  if (isError) return <NotFoundPage />

  return (
    <section className='flex flex-wrap items-center justify-around bg-backgroundSecundary'>
      {projects && projects.projects
        .sort((a, b) => a.order - b.order)
        .map(project => (
          <CardProject key={project.id} {...project} />
        ))}
    </section>
  )
}