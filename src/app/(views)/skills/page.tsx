import { Metadata } from 'next'
import Skills from '@modules/Skills'

export const metadata: Metadata = {
  title: '{ ...Will } : Habilidades',
  description:
    'Conheça as habilidades técnicas e competências interpessoais de Wildemberg Renovato de Lima no WillCode. De programação e desenvolvimento web a comunicação e trabalho em equipe, prepare-se para descobrir como essas habilidades podem agregar valor aos projetos.',
}

export default function SkillsAndSoftskills() {
  return <Skills />
}
