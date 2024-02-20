import './globals.css'
import { meta } from './text/metadata'

export const metadata = {
  title: meta.title,
  description: meta.description
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="pt-12 font-mono bg-slate-50 dark:bg-black">
        { children }
      </body>
    </html>
  )
}
