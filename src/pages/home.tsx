import { ActionTinder } from '../widgets/action-tinder'
import { ActualOffers } from '../widgets/actual-offers'
import { Brands } from '@/widgets/brands'
import PersonalBlock from '@/widgets/top-block/ui/personal-block'

const Home = () => {
  return (
    <div>
      <PersonalBlock />
      <ActualOffers />
      <Brands />
      <ActionTinder />
    </div>
  )
}

export default Home
