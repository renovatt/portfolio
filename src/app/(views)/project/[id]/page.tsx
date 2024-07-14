import { getProjects } from '@services/get-project.service'
import { getProjectsById } from '@services/get-project-by-id.service'
import ProjectModalInfo from '@features/projetcs/organisms/project-modal-info'

export async function generateStaticParams() {
  const projects = await getProjects()

  return projects.map((project) => ({
    id: project.id.toString(),
  }))
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const projects = await getProjectsById(params.id)

  const APP_NAME = `${projects.name}`
  const APP_DESCRIPTION = projects.description
  const BANNER_IMAGE = projects.bannerUrl

  return {
    title: APP_NAME,
    description: APP_DESCRIPTION,
    openGraph: {
      title: APP_NAME,
      description: APP_DESCRIPTION,
      images: [
        {
          url: BANNER_IMAGE,
        },
      ],
    },
  }
}

export default async function Project({ params }: { params: { id: string } }) {
  const project = await getProjectsById(params.id)
  return <ProjectModalInfo {...project} />
}
