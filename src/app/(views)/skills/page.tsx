import { Metadata } from 'next'
import Ray from '@elements/Ray'
import SkillsIcons from '@modules/SkillsIcons'
import BackgroundImage from '@elements/BackgroundImage'
import SideSkills from '@modules/SideSkills'

export const metadata: Metadata = {
  title: '{ ...Will } : Habilidades',
  description:
    'Conheça as habilidades técnicas e competências interpessoais de Wildemberg Renovato de Lima no WillCode. De programação e desenvolvimento web a comunicação e trabalho em equipe, prepare-se para descobrir como essas habilidades podem agregar valor aos projetos.',
}

export default function Skills() {
  return (
    <section className="relative flex h-screen w-screen flex-col justify-center overflow-hidden py-20 transition-all">
      <Ray />
      <BackgroundImage image="bg-skills animate-fade" />
      <section className="md:pm-0 z-10 my-2 flex h-full w-full flex-col items-center justify-start gap-10 space-y-10 overflow-y-auto overflow-x-hidden px-4 pb-20 md:space-y-0 lg:flex-row lg:justify-around">
        <SideSkills />
        <SkillsIcons />
      </section>
    </section>
  )
}
