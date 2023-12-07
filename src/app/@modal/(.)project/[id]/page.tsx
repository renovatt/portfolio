import ProjectInfo from '@modules/ProjectInfo'
import { ProjectResponse } from '@types'
import { getProjectsById } from 'services'

export default async function Project({ params }: { params: { id: string } }) {
  const project = await getProjectsById(params.id)
  const projectDate = project as ProjectResponse
  return <ProjectInfo {...projectDate} />
}
