import { ActualOffers } from '../widgets/actual-offers'
import { SliderProducts } from '../widgets/slider-products'

import { Brands } from '@/widgets/brands'

const Home = () => {
  return (
    <div>
      <ActualOffers />
      <Brands />
      <SliderProducts />
    </div>
  )
}

export default Home
