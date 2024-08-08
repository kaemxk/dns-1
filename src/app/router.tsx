import { Route, Routes } from 'react-router-dom'
import { Home, Stores, Catalog, Cart, Profile, NotFoundPage } from '@/pages'

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
