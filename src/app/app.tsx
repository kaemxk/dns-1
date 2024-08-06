import { Route, Routes } from 'react-router-dom'
import { TapBar } from '@/widgets/tap-bar'
import Home from '@/app/pages/home'
import Stores from '@/app/pages/stores'
import Catalog from '@/app/pages/catalog'
import Cart from '@/app/pages/cart'
import Profile from '@/app/pages/profile'

const App = () => {
  return (
    <>
      <div className='text-9xl font-extrabold text-primary'>DNS</div>
      <TapBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/stores' element={<Stores />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/profile/menu' element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
