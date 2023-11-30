import { Metadata } from 'next'
import Card from '@elements/Card'
import { Suspense } from 'react'
import { getProjects } from 'services'
import Loader from '@helpers/Loader'

export const metadata: Metadata = {
  title: '{ ...Will } : Projetos',
  description:
    'Explore os projetos do WillCode, desde trabalhos recentes a conquistas passadas. Descubra soluções inovadoras, tecnologias utilizadas e resultados alcançados. Veja como minhas habilidades técnicas são aplicadas para criar produtos de qualidade.',
}

export default async function Projects() {
  const { projects } = await getProjects()
  return (
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  )
}
