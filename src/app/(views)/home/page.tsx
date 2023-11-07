import { Metadata } from 'next'
import LogoModel from '@models/LogoModel'
import HomePresentation from '@modules/HomePresentation'

export const metadata: Metadata = {
  title: '{ ...Will } : Página Inicial',
  description:
    'Bem-vindo ao WillCode - seu destino para descobrir mais sobre Wildemberg Renovato de Lima, seus projetos, habilidades e softskills.',
}

export default function Home() {
  return (
    <section className="container my-36 flex animate-fade flex-col-reverse items-center justify-center overflow-hidden bg-primary-900 transition-all md:my-14 md:flex-row md:justify-between">
      <HomePresentation />
      <LogoModel />
    </section>
  )
}
