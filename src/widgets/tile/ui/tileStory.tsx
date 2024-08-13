import React from 'react'

interface IClassName {
  backgroundColor: string
  borderRadius: string
}

interface ITileStory {
  onClick: () => void
  className: IClassName
  srcImage: string
  text: string
}

const TileStory: React.FC<ITileStory> = ({ onClick, className, srcImage, text }) => {
  return (
    <div
      className={`bg-[${className.backgroundColor}] relative box-border h-[220px] w-[186px] cursor-pointer overflow-hidden rounded-xl text-xs font-bold leading-5 text-white`}
      onClick={onClick}
    >
      <a className='block h-full w-full text-white no-underline'>
        <div className='absolute left-2/4 top-0 mx-auto my-0 max-h-32 w-[125%] -translate-x-2/4'>
          <div
            className={`[border-radius: ${className.borderRadius}] flex h-full max-h-32 w-full justify-center overflow-hidden`}
          >
            <img src={srcImage} alt='story-image' className='h-full max-h-32 w-[81%] rounded-xl' />
          </div>
        </div>
        <div className='absolute bottom-4 left-3 right-3 line-clamp-4 max-h-[78px] cursor-pointer text-white duration-200 hover:text-amber-600'>
          {text}
        </div>
      </a>
    </div>
  )
}

export default TileStory
