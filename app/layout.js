import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gabriel Trigo',
  description: 'My personal web page.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className="pt-12 bg-slate-50 dark:bg-black">{children}</body>
    </html>
  )
}
