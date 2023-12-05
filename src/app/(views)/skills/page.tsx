import { Metadata } from 'next'
import SkillsIcons from '@elements/SkillsIcons'
import SkillDescription from '@elements/SkillDescription'
import { Suspense } from 'react'
import Loader from '@helpers/Loader'
import BackgroundImage from '@elements/BackgroundImage'

export const metadata: Metadata = {
  title: '{ ...Will } : Habilidades',
  description:
    'Conheça as habilidades técnicas e competências interpessoais de Wildemberg Renovato de Lima no WillCode. De programação e desenvolvimento web a comunicação e trabalho em equipe, prepare-se para descobrir como essas habilidades podem agregar valor aos projetos.',
}

export default function SkillsAndSoftskills() {
  return (
    <Suspense fallback={<Loader />}>
      <section className="relative flex h-screen w-screen flex-col justify-start overflow-x-hidden py-20 transition-all">
        <BackgroundImage image="bg-skills animate-fade" />
        <section className="z-10 my-2 flex h-full w-full flex-col items-center justify-start gap-10 space-y-10 overflow-y-auto px-2 md:justify-around md:space-y-0 lg:flex-row">
          <SkillDescription />
          <SkillsIcons />
        </section>
      </section>
    </Suspense>
  )
}
