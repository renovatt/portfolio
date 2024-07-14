import { getProjectsById } from '@services/get-project-by-id.service'
import ProjectModalInfo from '@features/projetcs/organisms/project-modal-info'

export default async function Project({ params }: { params: { id: string } }) {
  const project = await getProjectsById(params.id)
  return <ProjectModalInfo {...project} />
}
