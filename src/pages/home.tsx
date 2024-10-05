import { ContentSlider } from '@/pages/main-page/components/news-blogs-reviews'
import { ActionTinder } from '@/widgets/action-tinder'
import { ActualOffers } from '@/widgets/actual-offers'
import { Brands } from '@/widgets/brands'
import { SliderProducts } from '@/widgets/slider-products'

const Home = () => {
  return (
    <div>
      <ActualOffers />
      <Brands />
      <ActionTinder />
      <SliderProducts />
      <ContentSlider />
    </div>
  )
}

export default Home
