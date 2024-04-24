import ProjectInfo from '@organisms/project-info'
import { getProjectsById } from '@services/get-project-by-id.service'

export default async function Project({ params }: { params: { id: string } }) {
  const project = await getProjectsById(params.id)
  return <ProjectInfo {...project} />
}
