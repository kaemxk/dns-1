import { ActionTinder } from './main-page/components/action-tinder'
import { ActualOffers } from './main-page/components/actual-offers'
import { SliderProducts } from './main-page/components/slider-products'
import { Brands } from './main-page/components/brands'

const Home = () => {
  return (
    <div>
      <ActualOffers />
      <Brands />
      <ActionTinder />
      <SliderProducts />
    </div>
  )
}

export default Home
