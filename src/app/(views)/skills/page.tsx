import { Metadata } from 'next'
import SkillsIcons from '@elements/SkillsIcons'
import SkillDescription from '@elements/SkillDescription'
import { Suspense } from 'react'
import Loader from '@helpers/Loader'

export const metadata: Metadata = {
  title: '{ ...Will } : Habilidades',
  description:
    'Conheça as habilidades técnicas e competências interpessoais de Wildemberg Renovato de Lima no WillCode. De programação e desenvolvimento web a comunicação e trabalho em equipe, prepare-se para descobrir como essas habilidades podem agregar valor aos projetos.',
}

export default function SkillsAndSoftskills() {
  return (
    <Suspense fallback={<Loader />}>
      <section className="container flex h-auto w-full flex-col justify-around overflow-hidden transition-all">
        <section className="m-4 flex h-full flex-col items-center justify-between gap-4 md:my-8 md:flex-row">
          <SkillsIcons />
          <SkillDescription />
        </section>
      </section>
    </Suspense>
  )
}
