import { Providers } from './providers'
import { TapBar } from '@/widgets/tap-bar'

import AppRouter from './router'
import { useGetCityQuery } from '@/shared/redux/api/configApi'
import { usePosition } from '../hooks/use-position'

const City = ({ lat, lon }: { lat: number; lon: number }) => {
  const { data } = useGetCityQuery({ lat: lat, lon: lon })
  console.log(data)

  return <div>{data?.results[0].components.state}</div>
}

const App = () => {
  const { lat, lon } = usePosition()
  console.log(lat, lon)

  return (
    <Providers>
      <>
        <City lat={lat} lon={lon} />
        <div className='text-9xl font-extrabold text-primary'>DNS</div>
        <TapBar />
        <AppRouter />
      </>
    </Providers>
  )
}

export default App
