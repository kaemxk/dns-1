import { useMemo } from 'react'

import { ContentSlider } from '@/pages/main-page/components/news-blogs-reviews'
import { useResize } from '@/shared/hooks'

import { ActionTinder } from './main-page/components/action-tinder'
import { ActualOffers } from './main-page/components/actual-offers'
import { Brands } from './main-page/components/brands'
import { SliderProducts } from './main-page/components/slider-products'
import { TopBlock } from './main-page/components/top-block'

const Home = () => {
  const windowWidth = useResize()
  const isMobile = useMemo(() => windowWidth <= 992, [windowWidth])

  return (
    <div className={isMobile ? '> *:mb-[24px]' : '> *:mb-[60px]'}>
      <TopBlock />
      <ActualOffers />
      <Brands />
      <ActionTinder />
      <SliderProducts />
      <ContentSlider />
    </div>
  )
}

export default Home
