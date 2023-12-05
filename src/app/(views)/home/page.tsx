import { Metadata } from 'next'
import Mecha from '@modules/Mecha'
import SideHome from '@modules/SideHome'
import BackgroundImage from '@elements/BackgroundImage'

export const metadata: Metadata = {
  title: '{ ...Will } : Página Inicial',
  description:
    'Bem-vindo ao WillCode - seu destino para descobrir mais sobre Wildemberg Renovato de Lima, seus projetos, habilidades e softskills.',
}

export default function Home() {
  return (
    <section className="relative flex h-screen w-full flex-col-reverse items-center justify-center gap-5 overflow-hidden transition-all md:flex-row md:justify-between">
      <BackgroundImage image="bg-world animate-fadeUp" />
      <SideHome />
      <Mecha />
    </section>
  )
}
