import { ScrollTop, TapBar } from '@/widgets'
import { Providers } from './providers'
import AppRouter from './router'
import { Chat } from '@/widgets/chat'
import Footer from '@/widgets/footer/footer'

const App = () => (
  <Providers>
    <>
      <div className='text-9xl font-extrabold text-primary'>DNS</div>
      <TapBar />
      <AppRouter />
      <ScrollTop />
      <Chat />
      <Footer />
    </>
  </Providers>
)

export default App
