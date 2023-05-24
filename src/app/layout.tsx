import '@/styles/globals.css'

import { font } from '@/lib/fonts'
import GlobalNav from '@/ui/global-nav/nav'

export const metadata = {
  title: 'hla',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={`${font.className}`}>
      <body>
        <header>
          <GlobalNav />
        </header>
        {children}
      </body>
    </html>
  )
}
