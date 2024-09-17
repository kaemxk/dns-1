import { ActionTinder } from '../widgets/action-tinder'
import { ActualOffers } from '../widgets/actual-offers'
import { Brands } from '@/widgets/brands'

const Home = () => {
  return (
    <div>
      <ActualOffers />
      <Brands />
      <ActionTinder />
    </div>
  )
}

export default Home
