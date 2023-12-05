import { Metadata } from 'next'
import ContactEmailForm from '@modules/ContactEmailForm'
import ContactPresentation from '@modules/ContactPresentation'
import BackgroundImage from '@elements/BackgroundImage'

export const metadata: Metadata = {
  title: '{ ...Will } : Contato',
  description:
    'Entre em contato com WillCode para colaborações, oportunidades ou para trocar ideias. Estou aberto a novos desafios e parcerias. Vamos trabalhar juntos para alcançar resultados incríveis e impulsionar o sucesso dos seus projetos.',
}

export default function Contact() {
  return (
    <section className="relative flex h-screen w-screen items-center justify-center overflow-x-hidden py-20 transition-all">
      <BackgroundImage image="bg-contact animate-fade" />
      <article className="z-10 flex h-full w-full flex-col items-center justify-start space-y-6 overflow-y-auto md:flex-row md:justify-around md:space-y-0">
        <ContactPresentation />
        <ContactEmailForm />
      </article>
    </section>
  )
}
