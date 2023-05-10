import './globals.css'
import { Lato } from 'next/font/google'

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900']
})

export const metadata = {
  title: 'Profile - João Felipe ',
  description: 'Site referente as atividades da disciplica'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${lato.className} bg-secundary`}>{children}</body>
    </html>
  )
}
