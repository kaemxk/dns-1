import { Outlet } from 'react-router-dom'

import { Breadcrumbs } from '@/shared/ui/breadcrumbs/breadcrumbs'
import { Header, Footer, ScrollTop, TapBar } from '@/widgets'
import { Chat } from '@/widgets/chat'

export const PageLayout = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <main className='flex-grow'>
        <div className='mx-auto max-w-[1380px]'>
          <Breadcrumbs />
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
