import { ActionTinder } from '@/widgets/action-tinder'
import { ActualOffers } from '@/widgets/actual-offers'
import { SliderProducts } from '@/widgets/slider-products'
import { Brands } from '@/widgets/brands'
import { TopBlock } from '@/widgets/top-block'

const Home = () => {
  return (
    <div>
      <TopBlock />
      <ActualOffers />
      <Brands />
      <ActionTinder />
      <SliderProducts />
    </div>
  )
}

export default Home
