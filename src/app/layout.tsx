import './globals.css'
import { Metadata } from 'next'
import { Saira_Condensed, Chakra_Petch } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Container } from '@/components/Container'

const saira_Condensed = Saira_Condensed({
  subsets: ['latin'],
  weight: ['300', '500', '700'],
  display: 'swap'
})

const chakra_Petch = Chakra_Petch({
  subsets: ['latin'],
  weight: ['300', '500', '700'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Wildemberg Renovato portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={chakra_Petch.className}>
        <Header />
        <Container>
          {children}
        </Container>
        <Footer />
      </body>
    </html>
  )
}