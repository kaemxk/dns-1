import React from 'react'

interface ITileOne {
  marginRight: string
  backgroundColor: string
  borderRadius: string
  srcImage: string
  color: string
  text: string
}

const TileOne: React.FC<ITileOne> = ({
  marginRight,
  backgroundColor,
  borderRadius,
  srcImage,
  color,
  text,
}) => {
  return (
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
            <img src={srcImage} alt='story-image' className='h-full max-h-32 w-[81%] rounded-xl' />
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
  )
}

export default TileOne
