import { Providers } from './providers'
import { TapBar } from '@/widgets/tap-bar'

const App = () => (
  <Providers>
    <>
      <div className='text-9xl font-extrabold text-primary'>DNS</div>
      <TapBar />
    </>
  </Providers>
)

export default App
