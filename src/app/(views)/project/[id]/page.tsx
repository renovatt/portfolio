import { getProjects, getProjectsById } from 'services'
import { ProjectsResponse, ProjectResponse } from '@types'
import ProjectInfo from '@modules/ProjectInfo'

export async function generateStaticParams() {
  const projects = await getProjects()
  const projectsData = projects as ProjectsResponse

  return projectsData.projects.map((project) => ({
    id: project.id.toString(),
  }))
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const projects = await getProjectsById(params.id)
  const projectsData = projects as ProjectResponse

  const APP_NAME = `${projectsData.project_name}`
  const APP_DESCRIPTION = projectsData.description
  const BANNER_IMAGE = projectsData.banner_url

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
  const projectDate = project as ProjectResponse
  return <ProjectInfo {...projectDate} />
}
