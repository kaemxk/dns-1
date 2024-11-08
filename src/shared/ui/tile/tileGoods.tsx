import clsx from 'clsx'
import { FC } from 'react'
import { Link } from 'react-router-dom'

import { ITileVariant } from './interface'

const TileGoods: FC<ITileVariant> = ({ handleClick, className, srcImage, children }) => {
  return (
    <div
      className={clsx(
        className,
        'relative z-0 mx-[2px] my-[2px] box-border grid h-[206px] w-[314px] grid-rows-1 gap-2 overflow-hidden rounded-2xl bg-white px-6 py-7 shadow-md',
      )}
      onClick={handleClick}
    >
      {children}
      <Link to='#' className='absolute -bottom-5 right-[11px] -z-[1]'>
        <img
          src={srcImage}
          alt='Изображение товара'
          className='h-[120px] w-auto max-w-[120px] border-none object-contain'
        />
      </Link>
    </div>
  )
}

export default TileGoods
