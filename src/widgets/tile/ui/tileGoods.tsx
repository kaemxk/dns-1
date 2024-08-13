import React from 'react'

interface ITileGoods {
  onClick: () => void
  title: string
  text: string
  oldPrice: string
  newPrice: string
  srcImage: string
}

const TileGoods: React.FC<ITileGoods> = ({
  onClick,
  title,
  text,
  oldPrice,
  newPrice,
  srcImage,
}) => {
  return (
    <div
      className='relative z-0 mx-[2px] my-[2px] box-border grid h-[206px] w-[314px] grid-rows-1 gap-2 overflow-hidden rounded-2xl bg-white px-6 py-7 shadow-md'
      onClick={onClick}
    >
      <span className='line-h whitespace-pre-line text-lg font-bold leading-[22px] text-neutral-900'>
        {title}
      </span>
      <a className='max-h-10 overflow-hidden text-sm leading-5 text-neutral-900 no-underline'>
        {text}
      </a>
      <span className='flex h-fit w-max items-end'>
        <span className='text-[22px] font-bold leading-5 text-[#f59e0b]'>{newPrice}</span>
        <span className='ml-[5px] text-xs leading-[14px] text-neutral-500 line-through'>
          {oldPrice}
        </span>
      </span>
      <button className='btn btn-outline w-32 border-neutral-content text-sm font-normal hover:border-neutral-content hover:bg-[#f7f7f7] hover:text-neutral-500 active:shadow-md'>
        Подробнее
      </button>
      <a className='absolute -bottom-5 right-[11px] -z-[1]'>
        <img
          src={srcImage}
          alt={text}
          className='h-[120px] w-auto max-w-[120px] border-none object-contain'
        />
      </a>
    </div>
  )
}

export default TileGoods
