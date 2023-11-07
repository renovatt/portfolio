import { Metadata } from 'next'
import ContactPage from '@modules/ContactPage'

export const metadata: Metadata = {
  title: '{ ...Will } : Contato',
  description:
    'Entre em contato com WillCode para colaborações, oportunidades ou para trocar ideias. Estou aberto a novos desafios e parcerias. Vamos trabalhar juntos para alcançar resultados incríveis e impulsionar o sucesso dos seus projetos.',
}

export default function Contact() {
  return <ContactPage />
}