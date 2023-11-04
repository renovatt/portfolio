import './globals.css'
import { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Chakra_Petch } from 'next/font/google'
import Header from '@modules/Header'
import Footer from '@modules/Footer'
import Container from '@elements/Container'
import { AosProvider } from '@providers/AosProvider'
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

export const metadata: Metadata = {
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
  themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#fff' }],
  authors: [
    { name: 'renovatt' },
    { name: 'renovatt', url: 'https://www.linkedin.com/in/renovatt/' },
  ],
  viewport:
    'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',

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
            <AosProvider>
              <Container>
                <Header />
                {children}
                {modal}
                <Footer />
              </Container>
            </AosProvider>
          </ToastifyProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
