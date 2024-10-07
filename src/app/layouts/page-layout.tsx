import { Outlet } from 'react-router-dom'

import { Header, Footer, ScrollTop, TapBar } from '@/widgets'
import { Chat } from '@/widgets/chat'
import { Popup } from '@/widgets/user-popup'

export const PageLayout = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <Popup />
      <main className='mb-[50px] flex-grow'>
        <div className='mx-auto max-w-[1380px]'>
          <Outlet />
        </div>
      </main>
      <Footer />
      <TapBar />
      <ScrollTop />
      <Chat />
    </div>
  )
}
