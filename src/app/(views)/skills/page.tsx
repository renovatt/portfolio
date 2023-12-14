import { Metadata } from 'next'
import Ray from '@elements/Ray'
import SkillsIcons from '@modules/SkillsIcons'
import BackgroundImage from '@elements/BackgroundImage'
import SideSkills from '@modules/SideSkills'

export const metadata: Metadata = {
  title: '{ ...Will } : Habilidades',
  description:
    'Em um cenário onde a tecnologia avança a passos largos, mantenho-me em constante busca pelo conhecimento e atualização.',
}

export default function Skills() {
  return (
    <section className="relative flex h-screen w-screen flex-col justify-center overflow-hidden py-20 transition-all lg:p-0">
      <Ray />
      <BackgroundImage image="bg-skills animate-fade" />
      <section className="z-10 my-2 flex h-full w-full flex-col items-center justify-start gap-10 space-y-10 overflow-y-auto overflow-x-hidden px-4 pb-20 md:space-y-0 md:pb-0 lg:flex-row lg:justify-around">
        <SideSkills />
        <SkillsIcons />
      </section>
    </section>
  )
}
