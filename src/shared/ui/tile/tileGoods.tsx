import React from 'react'

interface ITileGoods {
  handleClick: () => void
  children: React.ReactNode
  srcImage: string
}

const TileGoods: React.FC<ITileGoods> = ({ handleClick, children, srcImage }) => {
  return (
    <div
      className='relative z-0 mx-[2px] my-[2px] box-border grid h-[206px] w-[314px] grid-rows-1 gap-2 overflow-hidden rounded-2xl bg-white px-6 py-7 shadow-md'
      onClick={handleClick}
    >
      {children}
      <button className='btn btn-outline w-32 border-neutral-content text-sm font-normal hover:border-neutral-content hover:bg-[#f7f7f7] hover:text-neutral-500 active:shadow-md'>
        Подробнее
      </button>
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
