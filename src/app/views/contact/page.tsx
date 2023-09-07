import { Metadata } from 'next'
import ContactForm from '@/app/components/ContactForm'

export const metadata: Metadata = {
  title: 'WillCode | Contato',
  description:
    'Entre em contato com WillCode para colaborações, oportunidades ou para trocar ideias. Estou aberto a novos desafios e parcerias. Vamos trabalhar juntos para alcançar resultados incríveis e impulsionar o sucesso dos seus projetos.',
}

export default function Contact() {
  return <ContactForm />
}
