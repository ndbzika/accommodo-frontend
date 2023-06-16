import { Navbar } from '../components/Navbar'
import { Title } from '../components/Title'
import Providers from './providers'

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
        <Providers>
          <Navbar/>
          <Title />
          {children}
        </Providers>
      </body>
    </html>
  )
}
