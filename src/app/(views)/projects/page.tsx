import { Metadata } from 'next'
import { Suspense } from 'react'
import { getProjects } from 'services'
import Loader from '@helpers/Loader'
import SideProject from '@modules/SideProject'
import ProjectCard from '@modules/ProjectCard'
import BackgroundImage from '@elements/BackgroundImage'

export const metadata: Metadata = {
  title: '{ ...Will } : Projetos',
  description:
    'Explore os projetos do WillCode, desde trabalhos recentes a conquistas passadas. Descubra soluções inovadoras, tecnologias utilizadas e resultados alcançados. Veja como minhas habilidades técnicas são aplicadas para criar produtos de qualidade.',
}

export default async function Projects() {
  const { projects } = await getProjects()
  return (
    <section className="relative flex h-screen w-screen flex-col items-center justify-center py-20">
      <BackgroundImage image="bg-projects animate-fade" />
      <section className="z-10 flex h-full w-full flex-col items-center justify-start gap-10 overflow-y-auto px-4 md:flex-row md:justify-around">
        <SideProject />
        <section className="my-10 mb-20 grid grid-cols-2 md:m-0 md:h-full md:grid-cols-2 md:overflow-y-scroll lg:grid-cols-2 xl:grid-cols-3">
          <Suspense fallback={<Loader />}>
            {projects
              ?.sort((a, b) => a.order - b.order)
              ?.map((project) => <ProjectCard key={project.id} {...project} />)}
          </Suspense>
        </section>
      </section>
    </section>
  )
}
