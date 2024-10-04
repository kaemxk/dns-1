import { ActionTinder } from '@/widgets/action-tinder'
import { ActualOffers } from '@/widgets/actual-offers'
import { SliderProducts } from '@/widgets/slider-products'
import { Brands } from '@/widgets/brands'
import { ContentSlider } from '@/widgets/news-blogs-reviews'

const Home = () => {
  return (
    <div>
      <ActualOffers />
      <Brands />
      <ActionTinder />
      <SliderProducts />
      <ContentSlider/>
    </div>
  )
}

export default Home
