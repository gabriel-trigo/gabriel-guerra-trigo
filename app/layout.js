import './globals.css'

export const metadata = {
  title: "Gabriel Guerra Trigo",
  description: "Personal Website"
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
