import { Metadata } from 'next'
import LogoModel from '@/app/components/Models/LogoModel'
import HomePresentation from '@/app/components/HomePresentation'

export const metadata: Metadata = {
  title: 'WillCode - Página Inicial',
  description:
    'Bem-vindo ao WillCode - seu destino para descobrir mais sobre Wildemberg Renovato de Lima, seus projetos, habilidades e softskills.',
}

export default function Home() {
  return (
    <section className="container flex animate-fade flex-col-reverse items-center justify-center overflow-hidden transition-all md:flex-row md:justify-between">
      <HomePresentation />
      <LogoModel />
    </section>
  )
}
