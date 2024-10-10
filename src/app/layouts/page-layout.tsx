import { Outlet } from 'react-router-dom'

import { Breadcrumbs, useGetCrumbs } from '@/shared/ui/breadcrumbs'
import { Header, Footer, ScrollTop, TapBar } from '@/widgets'
import { Chat } from '@/widgets/chat'

const pathDict: Record<string, string> = {
  '/catalog': 'Каталог',
  '/about': 'О компании - DNS',
  '/help': 'Помощь',
}

export const PageLayout = () => {
  const crumbs = useGetCrumbs(pathDict)

  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <main className='flex-grow'>
        <div className='mx-auto max-w-[1380px]'>
          <Breadcrumbs crumbs={crumbs} />
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
