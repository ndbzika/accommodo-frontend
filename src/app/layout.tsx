import { Navbar } from '@/components/Navbar'

import '../../styles/global.scss'

export const metadata = {
  title: 'Accommodo',
  description: 'Um site para gerenciar seu Hotel mais eficientemente',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
