import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Header from './components/header'
import Footer from './components/footer'

const roboto = Roboto({ subsets: ['latin'],weight:["100","300","400","500"] })

export const metadata: Metadata = {
  title: 'Portfolio - Gustavo Henrique',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className  }>
        <Header></Header>
        {children}
        <Footer></Footer>
        </body>
    </html>
  )
}
