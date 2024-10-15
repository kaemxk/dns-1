import { FC } from 'react'

import { useGetCatalogMenuQuery } from '@/shared/redux/api/baseApi'

import Item from './item'

const ItemsGrid: FC = () => {
  const { data } = useGetCatalogMenuQuery()

  const itemsGrid = data?.map(item => <Item key={item.id} item={item} />)

  return (
    <div>
      <div className='mb-2 mt-5'>
        <h2 className='text-3xl font-bold'>Каталог товаров</h2>
      </div>
      <div className='xs:grid-cols-1 mb-14 mt-5 grid grid-cols-5 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {itemsGrid}
      </div>
    </div>
  )
}

export default ItemsGrid
