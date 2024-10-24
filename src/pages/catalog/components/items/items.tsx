import clsx from 'clsx'
import { FC, useMemo } from 'react'

import { useResize } from '@/shared/hooks'
import { useGetCatalogMenuQuery } from '@/shared/redux/api/baseApi'

import ItemDesktop from './item-desktop'
import ItemMobile from './item-mobile'

const Items: FC = () => {
  const { data } = useGetCatalogMenuQuery()

  const windowWidth = useResize()
  const isMobile = useMemo(() => windowWidth <= 1023, [windowWidth])

  const itemsGrid = data?.map(item => <ItemDesktop key={item.id} item={item} />)
  const itemsList = data?.map(item => <ItemMobile key={item.id} item={item} />)

  const gridStyles = clsx(
    'xs:grid-cols-1 mb-14 mt-5 grid grid-cols-5 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
  )

  const listStyles = clsx('rounded-2xl bg-[#fcfcfc] p-1')

  const pageStyles = clsx('mb-5', {
    'px-4': isMobile,
    '': !isMobile,
  })

  return (
    <div className={pageStyles}>
      <div className='mb-2 mt-5'>
        <h2 className='text-3xl font-bold'>Каталог товаров</h2>
      </div>
      {isMobile ? (
        <div className={listStyles}>{itemsList}</div>
      ) : (
        <div className={gridStyles}>{itemsGrid}</div>
      )}
    </div>
  )
}

export default Items
