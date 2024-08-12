import { Providers } from './providers'
import { TapBar } from '@/widgets/tap-bar'

import AppRouter from './router'

const App = () => (
  <Providers>
    <>
      <div className='text-9xl font-extrabold text-primary'>DNS</div>
      <TapBar />
      <AppRouter />
    </>
  </Providers>
)

export default App
