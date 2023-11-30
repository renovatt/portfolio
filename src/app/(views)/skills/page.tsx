import { Metadata } from 'next'
import SkillsIcons from '@elements/SkillsIcons'
import SkillsDescriptions from '@elements/SkillsDescriptions'

export const metadata: Metadata = {
  title: '{ ...Will } : Habilidades',
  description:
    'Conheça as habilidades técnicas e competências interpessoais de Wildemberg Renovato de Lima no WillCode. De programação e desenvolvimento web a comunicação e trabalho em equipe, prepare-se para descobrir como essas habilidades podem agregar valor aos projetos.',
}

export default function SkillsAndSoftskills() {
  return (
    <section className="container flex h-auto w-full flex-col justify-around overflow-hidden transition-all">
      <section className="m-4 flex h-full flex-col items-center justify-between gap-4 md:my-8 md:flex-row">
        <aside className="mb-8 grid w-auto grid-cols-4 gap-4 md:mb-0">
          <SkillsIcons />
        </aside>

        <aside
          data-aos="fade-left"
          data-aos-delay="50"
          className="flex h-auto w-auto items-center justify-center overflow-hidden bg-primary-850 md:h-80 md:w-[50%] md:p-8"
        >
          <SkillsDescriptions />
        </aside>
      </section>
    </section>
  )
}
