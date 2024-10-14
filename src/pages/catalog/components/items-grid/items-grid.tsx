import clsx from 'clsx'
import { FC, useState } from 'react'

import { useGetCatalogMenuQuery } from '@/shared/redux/api/baseApi'

const ItemsGrid: FC = () => {
  const { data } = useGetCatalogMenuQuery()

  const [mouseEntered, setMouseEntered] = useState<boolean>(false)

  const itemContentWrapper = clsx('flex', {
    'flex-col align-top display': !mouseEntered,
    hidden: mouseEntered,
  })

  // const onHoverShowChilds = (itemId: string, attrKey: string | null): void => {
  //   if (itemId === attrKey) {
  //     setMouseEntered(true)
  //   }
  // }

  // todo: hover: show child elements, transition, delay

  const itemsGrid = data?.map(item => (
    <>
      <div
        key={item.id}
        className='shadow-[0_1px_2px_0_rgba(0, 0, 0, .16)] h-[234px] w-[260px] rounded-[8px] bg-[#fcfcfc] shadow-md hover:shadow-xl'
        onMouseEnter={e => {
          const div = e.currentTarget
          div.setAttribute('key', item.id)
          // const key = div.getAttribute('key')
          console.log(div.id)
          // onHoverShowChilds(item.id, key)
        }}
        onMouseLeave={() => setMouseEntered(false)}
      >
        <div className='p-[24px_20px_42px]'>
          <div className={itemContentWrapper}>
            <picture className='mx-auto'>
              <img src={`${item.imageUrl}`} className='max-h-[120px] max-w-[172px]' />
            </picture>
            <div className='text-md mx-auto mt-auto font-semibold'>{item.title}</div>
          </div>
        </div>
      </div>
    </>
  ))

  return (
    <div>
      <div className='mb-2 mt-5'>
        <h2 className='text-3xl font-bold'>Каталог товаров</h2>
      </div>
      {/* items grid */}
      <div className='xs:grid-cols-1 grid grid-cols-5 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {itemsGrid}
      </div>
    </div>
  )
}

export default ItemsGrid
