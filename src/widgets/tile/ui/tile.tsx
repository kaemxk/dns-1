import React from 'react'

interface ITile {
  variant: string
  marginRight: string
  backgroundColor: string
  borderRadius: string
  title: string
  text: string
  color: string
  srcImage: string
  newPrice: string
  oldPrice: string
}

export const Tile: React.FC<ITile> = ({
  variant,
  marginRight,
  backgroundColor,
  borderRadius,
  title,
  text,
  color,
  srcImage,
  newPrice,
  oldPrice,
}) => {
  return (
    <>
      {variant === 'one' && (
        <div
          style={{ marginRight, backgroundColor }}
          className='text-white relative box-border h-[220px] w-[186px] cursor-pointer overflow-hidden rounded-xl font-pt-sans text-sm font-bold leading-5'
        >
          <a className='text-white block h-full w-full no-underline'>
            <div className='absolute left-2/4 top-0 mx-auto my-0 max-h-32 w-[125%] -translate-x-2/4'>
              <div
                style={{ borderRadius }}
                className='flex h-full max-h-32 w-full justify-center overflow-hidden rounded-xl'
              >
                <img
                  src={srcImage}
                  alt='story-image'
                  className='h-full max-h-32 w-[81%] rounded-xl'
                />
              </div>
            </div>
            <div
              style={{ color }}
              className='hover:colorHov absolute bottom-4 left-3 right-3 line-clamp-4 max-h-[78px] cursor-pointer duration-200'
            >
              {text}
            </div>
          </a>
        </div>
      )}
      {variant === 'two' && (
        <div
          style={{ marginRight, background: `url(${srcImage}) 0% 0% / contain no-repeat` }}
          className='box-border h-[206px] w-[183px] cursor-pointer rounded-2xl font-pt-sans duration-200 hover:brightness-[1.02]'
        >
          <a className='block h-full px-5 py-6 text-brownFont no-underline'>
            <div className='mb-2 text-lg font-bold leading-[22px]'>{title}</div>
            <div className='text-sm leading-[18px]'>{text}</div>
          </a>
        </div>
      )}
      {variant === 'three' && (
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
      )}
    </>
  )
}
