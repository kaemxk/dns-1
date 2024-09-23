import { ActionTinder } from '@/widgets/action-tinder'
import { ActualOffers } from '@/widgets/actual-offers'
import { SliderProducts } from '@/widgets/slider-products'
import { Brands } from '@/widgets/brands'

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
