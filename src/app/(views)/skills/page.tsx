import { Metadata } from 'next'
import Ray from '@elements/Ray'
import SkillsIcons from '@elements/SkillsIcons'
import BackgroundImage from '@elements/BackgroundImage'
import SideSkills from '@elements/SideSkills'

export const metadata: Metadata = {
  title: '{ ...Will } : Habilidades',
  description:
    'Conheça as habilidades técnicas e competências interpessoais de Wildemberg Renovato de Lima no WillCode. De programação e desenvolvimento web a comunicação e trabalho em equipe, prepare-se para descobrir como essas habilidades podem agregar valor aos projetos.',
}

export default function Skills() {
  return (
    <section className="relative flex h-screen w-screen flex-col justify-start overflow-hidden py-20 transition-all">
      <Ray />
      <BackgroundImage image="bg-skills animate-fade" />
      <section className="z-10 my-2 mb-20 flex h-full w-full flex-col items-center justify-start gap-10 space-y-10 overflow-y-auto px-4 md:m-0 md:space-y-0 lg:flex-row lg:justify-around">
        <SideSkills />
        <SkillsIcons />
      </section>
    </section>
  )
}
