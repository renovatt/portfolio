import { Metadata } from 'next'
import ProjectsMap from '@modules/ProjectsMap'

export const metadata: Metadata = {
  title: '{ ...Will } : Projetos',
  description:
    'Explore os projetos do WillCode, desde trabalhos recentes a conquistas passadas. Descubra soluções inovadoras, tecnologias utilizadas e resultados alcançados. Veja como minhas habilidades técnicas são aplicadas para criar produtos de qualidade.',
}

export default function Projects() {
  return <ProjectsMap />
}
