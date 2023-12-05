import { Metadata } from 'next'
import Mecha from '@modules/Mecha'
import SideHome from '@modules/SideHome'

export const metadata: Metadata = {
  title: '{ ...Will } : Página Inicial',
  description:
    'Bem-vindo ao WillCode - seu destino para descobrir mais sobre Wildemberg Renovato de Lima, seus projetos, habilidades e softskills.',
}

export default function Home() {
  return (
    <section className="relative flex h-screen w-full flex-col-reverse items-center justify-center gap-5 overflow-hidden bg-none transition-all md:flex-row md:justify-between">
      <div className="absolute inset-0 h-screen w-screen bg-world bg-cover bg-center bg-no-repeat opacity-90 mix-blend-overlay blur-sm"></div>
      <SideHome />
      <Mecha />
    </section>
  )
}
