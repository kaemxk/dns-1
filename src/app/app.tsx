import { ScrollTop, TapBar } from '@/widgets'
import { Providers } from './providers'
import AppRouter from './router'

const App = () => (
  <Providers>
    <>
      <div className='text-9xl font-extrabold text-primary'>DNS</div>
      <TapBar />
      <AppRouter />
      <ScrollTop />
    </>
  </Providers>
)

export default App
