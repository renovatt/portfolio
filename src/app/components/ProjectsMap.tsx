'use client'

import Card from './Card'
import Loader from './helpers/Loader'
import NotFoundPage from './helpers/NotFoundPage'
import { ProjectsResponse } from '@/@types'
import { useProjectsQuery } from '@/hooks/useProjectsQuery'

const ProjectsMap = () => {
  const { data, isError, isLoading } = useProjectsQuery()

  const projects = data as ProjectsResponse

  if (isLoading) return <Loader />
  if (isError) return <NotFoundPage />

  return (
    <section className="grid grid-cols-2 items-center justify-around bg-backgroundSecundary lg:grid-cols-4 xl:grid-cols-6">
      {projects &&
        projects.projects
          .sort((a, b) => a.order - b.order)
          .map((project) => (
            <Card.Root key={project.id} {...project}>
              <Card.Container>
                <Card.Title text={project.project_name} />
                <Card.Actions>
                  <Card.Link
                    text="Ver Detalhes"
                    href={`project/${project.id}`}
                  />
                </Card.Actions>
              </Card.Container>
            </Card.Root>
          ))}
    </section>
  )
}

export default ProjectsMap
