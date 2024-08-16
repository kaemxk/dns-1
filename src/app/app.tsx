import { Providers } from './providers'
import { TapBar } from '@/widgets/tap-bar'

import AppRouter from './router'
import { Chat } from '@/widgets/chat'

const App = () => (
  <Providers>
    <>
      <div className='text-9xl font-extrabold text-primary'>DNS</div>
      <TapBar />
      <AppRouter />
      <Chat />
    </>
  </Providers>
)

export default App
