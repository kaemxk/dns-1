import { useMemo } from 'react'

import { useResize } from '@/shared/hooks'
import { ActionTinder } from '@/widgets/action-tinder'
import { ActualOffers } from '@/widgets/actual-offers'
import { Brands } from '@/widgets/brands'
import { SliderProducts } from '@/widgets/slider-products'

const Home = () => {
  const windowWidth = useResize()
  const isMobile = useMemo(() => windowWidth <= 992, [windowWidth])

  return (
    <div className={isMobile ? 'mb-[24px]' : '> *:mb-[60px]'}>
      <ActualOffers />
      <Brands />
      <ActionTinder />
      <SliderProducts />
    </div>
  )
}

export default Home
