import { Route, Routes } from 'react-router-dom'

import Home from '@/app/pages/home'
import Stores from '@/app/pages/stores'
import Catalog from '@/app/pages/catalog'
import Cart from '@/app/pages/cart'
import Profile from '@/app/pages/profile'
import NotFoundPage from './pages/not-found-page'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/stores' element={<Stores />} />
      <Route path='/catalog' element={<Catalog />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/profile/menu' element={<Profile />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}
export default AppRouter
