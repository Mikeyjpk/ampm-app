import './globals.css'
import { globalFont } from './fonts'

import ClientOnly from './components/ClientOnly'
import ToastProvider from './components/providers/ToastProvider'

import Navbar from './components/navbar/Navbar'
import RegisterModal from './components/modals/RegisterModal'
import LoginModal from './components/modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'
import EventModal from './components/modals/EventModal'
import EventBriteButton from './components/EventBriteButton'

export const metadata = {
  title: 'Anti Social',
  description: 'Emo party',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={globalFont.className}>
        <ClientOnly>
          <ToastProvider />
          <EventModal />
          <RegisterModal />
          <LoginModal />
          <Navbar currentUser={currentUser}/>
        </ClientOnly>
        <div className='h-full w-full pt-16 bg-neutral-50'>
          {children}
        </div>
      </body>
    </html>
  )
}
