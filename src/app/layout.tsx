/* eslint-disable camelcase */
import './globals.css'
import 'animate.css'
import { Metadata } from 'next'
import { Chakra_Petch } from 'next/font/google'
import Navbar from '@modules/Navbar'
import Header from '@modules/Header'
import Container from '@modules/Container'
import ToastifyProvider from '@providers/ToastifyProvider'
import ReactQueryProvider from '@providers/ReactQueryProvider'
import Footer from '@modules/Footer'

const chakraPetch = Chakra_Petch({
  subsets: ['latin'],
  weight: ['300', '500', '700'],
  display: 'swap',
})

const APP_NAME = '{ ...Will }'
const APP_DESCRIPTION =
  'Bem-vindo ao meu portfólio! Aqui, você terá uma visão aprofundada das minhas habilidades e projetos.'
const APP_URL = 'https://renovatt.dev.br'
// const APP_URL = 'https://portfolio-renovatt.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: {
    default: APP_NAME,
    template: `%s : ${APP_NAME}`,
  },
  applicationName: APP_NAME,
  description: APP_DESCRIPTION,
  generator: 'Next.js',
  manifest: '/manifest.json',
  keywords: [
    'renovatt',
    'renovatt.dev',
    'Wildemberg',
    'wildemberg',
    'will',
    'Wildemberg Renovato',
    'WillCode',
    'portfolio',
    'desenvolvedor web',
    'desenvolvedor web em joão pessoa',
    'desenvolvedor front-end',
  ],
  authors: [
    { name: 'renovatt' },
    { name: 'renovatt', url: 'https://www.linkedin.com/in/renovatt/' },
  ],
  creator: '@renovatt',
  openGraph: {
    type: 'website',
    url: APP_URL,
    title: {
      default: APP_NAME,
      template: `%s : ${APP_NAME}`,
    },
    description: APP_DESCRIPTION,
    siteName: APP_NAME,
    images: [
      {
        url: `${APP_URL}/icon-192x192.png`,
      },
    ],
  },

  icons: [
    { rel: 'apple-touch-icon', url: '/icon-192x192.png' },
    { rel: 'icon', url: '/favicon.ico' },
  ],
}

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={chakraPetch.className}>
        <ReactQueryProvider>
          <ToastifyProvider>
            <Container>
              <Header />
              <Navbar />
              {children}
              {modal}
              <Footer />
            </Container>
          </ToastifyProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
