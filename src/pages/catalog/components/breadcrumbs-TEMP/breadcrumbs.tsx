import { FC } from 'react'

const Breadcrumbs: FC = () => {
  return (
    <div className='text-xs'>
      <span className='mr-1 cursor-pointer transition hover:text-orange-400'>DNS</span>
      <span>&gt;</span>
      <span className='ml-2 font-light text-gray-400'>Каталог товаров</span>
    </div>
  )
}

export default Breadcrumbs
