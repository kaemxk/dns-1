import { ActionTinder } from './main-page/components/action-tinder'
import { ActualOffers } from './main-page/components/actual-offers'
import { Brands } from './main-page/components/brands'
import { SliderProducts } from './main-page/components/slider-products'

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
