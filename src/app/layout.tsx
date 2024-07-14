import 'animate.css'
import './styles/globals.css'
import './styles/reset.css'
import { Metadata } from 'next'
import Container from '@organisms/container'
import Header from '@components/header/templates/header'
import Navbar from '@components/navbar/organisms/navbar'
import Footer from '@components/footer/templates/footer'
import ToastifyProvider from '@providers/toastify-provider'
import { chakraPetch } from '@assets/fonts/chakra-petch-font'

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
    'portfolio',
    'desenvolvedor web',
    'desenvolvedor front-end',
    'desenvolvedor web em joão pessoa',
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
    <html lang="pt-BR">
      <body className={chakraPetch.className}>
        <ToastifyProvider>
          <Container>
            <Header />
            <Navbar />
            {children}
            {modal}
            <Footer />
          </Container>
        </ToastifyProvider>
      </body>
    </html>
  )
}
