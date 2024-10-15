import clsx from 'clsx'
import { FC, useState } from 'react'

import { CatalogItem } from '@/widgets/header/ui/header-desktop-catalog'

interface IItemProps {
  item: CatalogItem
}

const Item: FC<IItemProps> = ({ item }) => {
  const [showHover, setShowHover] = useState<boolean>(false)

  const mainContentClass = clsx('absolute inset-0 transition-opacity duration-300 ease-in-out', {
    'opacity-0 pointer-events-none': showHover,
    'opacity-100': !showHover,
  })

  const hoverContentClass = clsx('absolute inset-0 transition-opacity duration-300 ease-in-out', {
    'opacity-100': showHover,
    'opacity-0 pointer-events-none': !showHover,
  })

  return (
    <div
      className='shadow-[0_1px_2px_0_rgba(0, 0, 0, .16)] relative h-[234px] w-[260px] overflow-hidden rounded-[8px] bg-[#fcfcfc] shadow hover:shadow-xl'
      onMouseEnter={() => setShowHover(true)}
      onMouseLeave={() => setShowHover(false)}
    >
      <div className={mainContentClass}>
        <div className='flex flex-col p-[24px_20px_42px] align-top'>
          <picture>
            <img src={`${item.imageUrl}`} className='mx-auto max-h-[120px] max-w-[172px]' />
          </picture>
          <div className='text-md mx-auto mt-10 text-[14px] font-bold'>{item.title}</div>
        </div>
      </div>

      <div className={hoverContentClass}>
        <div className='p-[24px_20px_42px]'>
          <div className='display flex flex-col align-top'>
            <a href={item.url} className='text-[15px] font-bold hover:text-orange-500'>
              {item.title}
            </a>
            {item.childs.map(child => (
              <a key={child.id} href={child.url} className='mt-2 text-[13px] hover:text-orange-500'>
                {child.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
