import { FC } from 'react'

import Breadcrumbs from './catalog/components/breadcrumbs-TEMP/breadcrumbs'
import ItemsGrid from './catalog/components/items-grid/items-grid'

const Catolog: FC = () => {
  return (
    <div>
      <Breadcrumbs />
      <ItemsGrid />
      <div></div>
    </div>
  )
}

export default Catolog
