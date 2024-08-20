import { FC } from 'react'

import { ITileVariant } from '@/shared/intefaces/tile/tile'

const TileGoods: FC<ITileVariant> = ({ handleClick, className, srcImage, children }) => {
  return (
    <div
      className={`${className} relative z-0 mx-[2px] my-[2px] box-border grid h-[206px] w-[314px] grid-rows-1 gap-2 overflow-hidden rounded-2xl bg-white px-6 py-7 shadow-md`}
      onClick={handleClick}
    >
      {children}
      <a className='absolute -bottom-5 right-[11px] -z-[1]'>
        <img
          src={srcImage}
          alt='Изображение товара'
          className='h-[120px] w-auto max-w-[120px] border-none object-contain'
        />
      </a>
    </div>
  )
}

export default TileGoods
