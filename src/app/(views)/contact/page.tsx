import { Metadata } from 'next'
import Form from '@organisms/form'
import SideContact from '@templates/side-contact'
import BackgroundImage from '@atoms/background-image'

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Entre em contato com WillCode para colaborações, oportunidades ou para trocar ideias. Estou aberto a novos desafios e parcerias. Vamos trabalhar juntos para alcançar resultados incríveis e impulsionar o sucesso dos seus projetos.',
}

export default function Contact() {
  return (
    <section className="relative flex h-screen w-screen items-center justify-center overflow-x-hidden py-20 transition-all">
      <BackgroundImage image="bg-contact animate-fade" />
      <article className="z-10 flex h-full w-full flex-col items-center justify-start space-y-6 overflow-y-auto overflow-x-hidden px-4 md:flex-row md:justify-around md:space-y-0">
        <SideContact />
        <Form />
      </article>
    </section>
  )
}
