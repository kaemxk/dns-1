import React from 'react'

interface ITileThree {
  marginRight: string
  title: string
  text: string
  oldPrice: string
  newPrice: string
  srcImage: string
}

const TileThree: React.FC<ITileThree> = ({
  marginRight,
  title,
  text,
  oldPrice,
  newPrice,
  srcImage,
}) => {
  return (
    <div
      style={{ marginRight }}
      className='bg-white relative z-0 mx-[2px] my-[2px] box-border grid h-[206px] w-[314px] grid-rows-tile gap-2 overflow-hidden rounded-2xl px-6 py-7 font-pt-sans shadow-tile'
    >
      <span className='line-h whitespace-pre-line text-lg font-bold leading-[22px] text-brownFont'>
        {title}
      </span>
      <a className='max-h-10 overflow-hidden text-sm leading-5 text-brownFont no-underline'>
        {text}
      </a>
      <span className='flex h-fit w-max items-end'>
        <span className='text-[22px] font-bold leading-5 text-orangeFont'>{newPrice}</span>
        <span className='ml-[5px] text-xs leading-[14px] text-greyFont line-through'>
          {oldPrice}
        </span>
      </span>
      <button className='btn btn-outline w-32 border-neutral-content text-base font-normal hover:border-neutral-content hover:bg-[#f7f7f7] hover:text-[#333] active:shadow-btn'>
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

export default TileThree
