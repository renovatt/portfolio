import { Metadata } from 'next'
import { Suspense } from 'react'
import Loader from '@molecules/loader'
import SideProject from '@templates/side-project'
import ProjectCard from '@organisms/project-card'
import BackgroundImage from '@atoms/background-image'
import { getProjects } from '@services/get-project.service'
import { ProjectResponseDto } from '@entities/project.dto'
import { CustomError } from '@utils/custom-error'
import ErrorMessage from '@molecules/error-message'

export const metadata: Metadata = {
  title: 'Projetos',
  description:
    'Cada projeto conta uma parte única da minha jornada, refletindo não apenas habilidades técnicas, mas também paixão e dedicação.',
}

export default async function Projects() {
  let projects: ProjectResponseDto = []
  let error: CustomError | null = null

  try {
    projects = await getProjects()
  } catch (err) {
    error = err as CustomError
  }

  return (
    <section className="relative flex h-screen w-screen flex-col items-center justify-center py-20">
      <BackgroundImage image="bg-projects animate-fade" />
      <section className="z-10 flex h-full w-full flex-col items-center justify-start gap-10 overflow-y-auto px-4 md:flex-row md:justify-around">
        <SideProject />
        {error ? (
          <ErrorMessage error={error} />
        ) : (
          <section className="my-10 mb-20 grid grid-cols-2 scrollbar-hide md:m-0 md:h-full md:grid-cols-2 md:overflow-y-scroll lg:grid-cols-2 xl:grid-cols-3">
            <Suspense fallback={<Loader />}>
              {Array.isArray(projects) &&
                projects
                  ?.sort((a, b) => a.position - b.position)
                  ?.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                  ))}
            </Suspense>
          </section>
        )}
      </section>
    </section>
  )
}
