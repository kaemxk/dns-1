import { ScrollTop, TapBar } from '@/widgets'
import { Providers } from './providers'
import AppRouter from './router'
import { Chat } from '@/widgets/chat'

const App = () => (
  <Providers>
    <>
      <div className='text-9xl font-extrabold text-primary'>DNS</div>
      <TapBar />
      <AppRouter />
      <ScrollTop />
      <Chat />
    </>
  </Providers>
)

export default App
