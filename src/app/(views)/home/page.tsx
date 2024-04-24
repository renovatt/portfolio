import { Metadata } from 'next'
import SideMecha from '@templates/side-mecha'
import SideHome from '@templates/side-home'
import BackgroundImage from '@atoms/background-image'

export const metadata: Metadata = {
  title: 'Página Inicial',
  description:
    'Bem-vindo ao meu portfólio! Aqui, você terá uma visão aprofundada das minhas habilidades e projetos.',
}

export default function Home() {
  return (
    <section className="relative flex h-screen w-full flex-col-reverse items-center justify-center gap-5 overflow-x-hidden py-20 transition-all scrollbar-hide md:flex-row md:justify-between">
      <BackgroundImage image="bg-home animate-fadeUp" />
      <article className="z-10 flex h-full w-full flex-col-reverse items-center justify-start gap-10 overflow-y-auto px-4 scrollbar-hide md:flex-row md:justify-around md:overflow-y-hidden">
        <SideHome />
        <SideMecha />
      </article>
    </section>
  )
}
