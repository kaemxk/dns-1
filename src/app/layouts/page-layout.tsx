import { Outlet } from 'react-router-dom'

import { Header } from '@/widgets'
import Footer from '@/widgets/footer/footer'
import { ScrollTop } from '@/widgets'
import { TapBar } from '@/widgets'
import { Chat } from '@/widgets/chat'

export const PageLayout = () => {
  return (
    <>
      <Header />
      <main>
        <div className='mx-auto my-0 max-w-[1380px]'>
          <Outlet />
        </div>
      </main>
      <Footer />
      <TapBar />
      <ScrollTop />
      <Chat />
    </>
  )
}
