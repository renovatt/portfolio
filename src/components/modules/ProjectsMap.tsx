'use client'
import Card from '@elements/Card'
import { projects } from 'mocks/projects'

const ProjectsMap = () => {
  return (
    <section className="grid grid-cols-2 overflow-hidden bg-primary-900 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {projects
        ?.sort((a, b) => a.order - b.order)
        ?.map((project) => (
          <Card.Root key={project.id} {...project}>
            <Card.Container>
              <Card.Title text={project.project_name} />
              <Card.Actions>
                <Card.Link
                  text="Ver Detalhes"
                  href={`/project/${project.id}`}
                />
              </Card.Actions>
            </Card.Container>
          </Card.Root>
        ))}
    </section>
  )
}

export default ProjectsMap
