import { getProjects, getProjectsById } from 'services'
import { ProjectDetails } from '@elements/ProjectDetails'
import { ProjectsResponse, ProjectResponse } from '@types'

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

  const APP_NAME = `WillCode | ${projectsData.project_name}`
  const APP_DESCRIPTION = projectsData.description
  const DEPLOY_URL = projectsData.deploy_url
  const BANNER_IMAGE = projectsData.banner_url

  return {
    title: APP_NAME,
    applicationName: APP_NAME,
    description: APP_DESCRIPTION,
    generator: 'Next.js',
    manifest: '/manifest.json',
    keywords: ['renovatt', 'Wildemberg', 'Wildemberg Renovato', 'WillCode'],
    themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#fff' }],
    authors: [
      { name: 'renovatt' },
      { name: 'renovatt', url: 'https://www.linkedin.com/in/renovatt/' },
    ],
    viewport:
      'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',

    openGraph: {
      type: 'website',
      url: DEPLOY_URL,
      title: APP_NAME,
      description: APP_DESCRIPTION,
      siteName: APP_NAME,
      images: [
        {
          url: BANNER_IMAGE,
        },
      ],
    },

    icons: [
      { rel: 'apple-touch-icon', url: '/icon-192x192.png' },
      { rel: 'icon', url: '/favicon.ico' },
    ],
  }
}

export default async function Project({ params }: { params: { id: string } }) {
  const project = await getProjectsById(params.id)
  const projectDate = project as ProjectResponse

  return (
    <ProjectDetails.Root {...projectDate}>
      <ProjectDetails.Content {...projectDate}>
        <ProjectDetails.Card {...projectDate} />
        <ProjectDetails.CloseIcon />
        <ProjectDetails.ThumbnailContainer>
          <ProjectDetails.Thumbnail {...projectDate} />
          <ProjectDetails.Description text={projectDate.description} />
          <ProjectDetails.Techs {...projectDate} />
        </ProjectDetails.ThumbnailContainer>
      </ProjectDetails.Content>
    </ProjectDetails.Root>
  )
}
