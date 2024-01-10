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
    <html lang="pt-br">
      <body className={roboto.className + " bg-background-general text-slate-200 dark:text-slate-200"}>
        <Header></Header>
        {children}
        <Footer></Footer>
        </body>
    </html>
  )
}
