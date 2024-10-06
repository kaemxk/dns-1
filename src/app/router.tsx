import { Route, Routes } from 'react-router-dom'

import { Home, Stores, Catalog, Cart, Profile, NotFoundPage } from '@/pages'

import { PageLayout } from './layouts/page-layout'

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/stores' element={<Stores />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/profile/menu' element={<Profile />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
export default AppRouter
