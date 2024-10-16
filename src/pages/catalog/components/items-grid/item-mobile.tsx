import clsx from 'clsx'
import { FC, useState } from 'react'
import { FiChevronRight } from 'react-icons/fi'

import { CatalogItem } from '@/widgets/header/ui/header-desktop-catalog'

interface IItemMobileProps {
  item: CatalogItem
}

const ItemMobile: FC<IItemMobileProps> = ({ item }) => {
  const [showChilds, setShowChilds] = useState<boolean>(false)

  const childsStyles = clsx(
    'w-[100%] border-b border-b-[#eee] bg-[#fcfcfc] px-[9px] py-[11px] text-left flex items-center hover:text-orange-500 cursor-pointer',
    {
      hidden: !showChilds,
      block: showChilds,
    },
  )

  const childs = item.childs.map((child, index) => {
    return (
      <div
        key={child.id}
        className={childsStyles}
        style={
          index === item.childs.length - 1
            ? { boxShadow: 'inset 0px -15px 20px -15px rgba(0, 0, 0, 0.05)' }
            : index === 0
              ? { boxShadow: 'inset 0px 15px 20px -15px rgba(0, 0, 0, 0.05)' }
              : {}
        }
      >
        <a href={child.url} className='ml-4 text-[14.5px]'>
          {child.title}
        </a>
        <FiChevronRight className='ml-auto' color='gray' size={20} opacity={0.6} />
      </div>
    )
  })

  return (
    <>
      <div
        className='shadow- flex w-[100%] items-center border-b border-b-[#eee] bg-[#fcfcfc] px-[9px] pb-[12px] pt-[16px] text-left active:bg-[white]'
        onClick={() => setShowChilds(prevState => !prevState)}
      >
        <picture>
          <img src={item.imageMenuUrl} />
        </picture>
        <label className='ml-3 text-[14.5px]'>{item.title}</label>
      </div>
      <div>{childs}</div>
    </>
  )
}

export default ItemMobile
