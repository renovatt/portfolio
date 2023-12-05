/* eslint-disable camelcase */
import './globals.css'
import 'animate.css'
import { Metadata, Viewport } from 'next'
import { Chakra_Petch } from 'next/font/google'
import Navbar from '@modules/Navbar'
import Header from '@modules/Header'
import Container from '@elements/Container'
import ToastifyProvider from '@providers/ToastifyProvider'
import ReactQueryProvider from '@providers/ReactQueryProvider'

const chakraPetch = Chakra_Petch({
  subsets: ['latin'],
  weight: ['300', '500', '700'],
  display: 'swap',
})

const APP_NAME = 'WillCode'
const APP_DESCRIPTION =
  'Bem-vindo ao WillCode - seu destino para descobrir mais sobre Wildemberg Renovato de Lima, seus projetos, habilidades e softskills.'

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: APP_NAME,
  applicationName: APP_NAME,
  description: APP_DESCRIPTION,
  generator: 'Next.js',
  manifest: '/manifest.json',
  keywords: [
    'renovatt',
    'Wildemberg',
    'wildemberg',
    'will',
    'Wildemberg Renovato',
    'WillCode',
    'portfolio',
  ],
  authors: [
    { name: 'renovatt' },
    { name: 'renovatt', url: 'https://www.linkedin.com/in/renovatt/' },
  ],
  openGraph: {
    type: 'website',
    url: 'https://portfolio-renovatt.vercel.app/',
    title: APP_NAME,
    description: APP_DESCRIPTION,
    siteName: APP_NAME,
    images: [
      {
        url: 'https://portfolio-renovatt.vercel.app/icon-192x192.png',
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
            </Container>
          </ToastifyProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
