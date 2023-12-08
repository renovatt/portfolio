import { Metadata } from 'next'
import SideProfile from '@modules/SideProfile'
import BackgroundImage from '@elements/BackgroundImage'
import ImageProfile from '@elements/ImageProfile'
import Cloud from '@elements/Cloud'

export const metadata: Metadata = {
  title: '{ ...Will } : Sobre mim',
  description:
    'Saiba mais sobre Wildemberg Renovato de Lima. Como um desenvolvedor apaixonado por tecnologia, compartilho minha trajetória, experiência e objetivos profissionais. Explore minhas habilidades técnicas e competências interpessoais.',
}

export default function Profile() {
  return (
    <section className="relative flex h-screen w-screen flex-col items-center justify-center overflow-x-hidden py-20 transition-all">
      <Cloud />
      <BackgroundImage image="bg-about animate-fade" />
      <article className="z-10 flex h-full w-full flex-col items-center justify-start gap-10 overflow-y-auto px-4 md:flex-row md:justify-around">
        <ImageProfile />
        <section className="flex flex-col items-center md:w-1/2">
          <SideProfile />
        </section>
      </article>
    </section>
  )
}
