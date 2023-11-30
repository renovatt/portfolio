import { Metadata } from 'next'
import ContactEmailForm from '@modules/ContactEmailForm'
import ContactPresentation from '@modules/ContactPresentation'

export const metadata: Metadata = {
  title: '{ ...Will } : Contato',
  description:
    'Entre em contato com WillCode para colaborações, oportunidades ou para trocar ideias. Estou aberto a novos desafios e parcerias. Vamos trabalhar juntos para alcançar resultados incríveis e impulsionar o sucesso dos seus projetos.',
}

export default function Contact() {
  return (
    <section className="container flex animate-fade flex-col items-center justify-start bg-primary-900 transition-all md:flex-row md:items-start md:justify-around">
      <ContactPresentation />
      <ContactEmailForm />
    </section>
  )
}
