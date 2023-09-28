import Footer from '@/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/PageHeader'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Trickets',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel='icon' href='/logo.png' />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}