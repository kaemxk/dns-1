import { Outlet } from 'react-router-dom'

import { Header, Footer, ScrollTop, TapBar } from '@/widgets'
import { Chat } from '@/widgets/chat'

export const PageLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mb-[50px]">
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
