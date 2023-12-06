import { ProjectResponse } from '@types'
import { getProjectsById } from 'services'
import ProjectInfo from '@elements/ProjectInfo'

export default async function Project({ params }: { params: { id: string } }) {
  const project = await getProjectsById(params.id)
  const projectDate = project as ProjectResponse
  return <ProjectInfo {...projectDate} />
}
