import { Route, Routes } from 'react-router-dom'

import { Home, Stores, Catalog, Cart, Profile, NotFoundPage, About, CareerPage } from '@/pages'
import ProfileWishlist from '@/pages/profile-wishlist/ui/profile-wishlist'

import { PageLayout } from './layouts/page-layout'

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/stores' element={<Stores />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/about' element={<About />} />
        <Route path='/about/career' element={<CareerPage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/profile/menu' element={<Profile />} />
        <Route path='/profile-wishlist' element={<ProfileWishlist />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
export default AppRouter
