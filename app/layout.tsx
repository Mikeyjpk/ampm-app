import './globals.css'
import { globalFont } from './fonts'

import ClientOnly from './components/ClientOnly'
import ToastProvider from './components/providers/ToastProvider'

import Navbar from './components/navbar/Navbar'
import EventBriteButton from './components/EventBriteButton'

export const metadata = {
  title: 'Anti Social',
  description: 'Emo party',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={globalFont.className}>
        <ClientOnly>
          <ToastProvider />
          <Navbar />
          <EventBriteButton />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
