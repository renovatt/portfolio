import './globals.css'
import { Metadata } from 'next'
import { Saira_Condensed, Chakra_Petch } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Container } from '@/components/Container'
import { ToastifyProvider } from '@/components/ToastifyProvider'

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

const APP_NAME = "WillCode";
const APP_DESCRIPTION = "Bem-vindo ao WillCode - seu destino para descobrir mais sobre Wildemberg Renovato de Lima, seus projetos, habilidades e softskills.";

export const metadata: Metadata = {
  title: APP_NAME,
  applicationName: APP_NAME,
  description: APP_DESCRIPTION,
  generator: 'Next.js',
  manifest: "/manifest.json",
  keywords: ["renovatt", "Wildemberg", "Wildemberg Renovato", "WillCode"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [{ name: 'renovatt' }, { name: 'renovatt', url: 'https://www.linkedin.com/in/renovatt/' }],
  viewport: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",

  openGraph: {
    type: "website",
    url: "https://portfolio-renovatt.vercel.app/",
    title: APP_NAME,
    description: APP_DESCRIPTION,
    siteName: APP_NAME,
    images: [{
      url: "https://portfolio-renovatt.vercel.app/web-1.png",
    }],
  },

  icons: [
    { rel: "apple-touch-icon", url: "/icon-192x192.png" },
    { rel: "icon", url: "/favicon.ico" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={chakra_Petch.className}>
        <ToastifyProvider>
          <Header />
          <Container>
            {children}
          </Container>
          <Footer />
        </ToastifyProvider>
      </body>
    </html>
  )
}