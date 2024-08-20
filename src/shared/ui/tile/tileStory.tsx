import { FC } from 'react'

import { IClassName } from '@/shared/intefaces/tile/tile'
interface ITileStory {
  handleClick: () => void
  className: IClassName
  srcImage: string
  children: React.ReactNode
}

const TileStory: FC<ITileStory> = ({ handleClick, className, srcImage, children }) => {
  return (
    <div
      className={`bg-[${className.backgroundColor}] ${className.styles} relative box-border h-[220px] w-[186px] cursor-pointer overflow-hidden rounded-xl text-xs font-bold leading-5 text-white`}
      onClick={handleClick}
    >
      <a className='block h-full w-full text-white no-underline'>
        <div className='absolute left-2/4 top-0 mx-auto my-0 max-h-32 w-[125%] -translate-x-2/4'>
          <div
            className={`[border-radius: ${className.borderRadius}] flex h-full max-h-32 w-full justify-center overflow-hidden`}
          >
            <img src={srcImage} alt='story-image' className='h-full max-h-32 w-[81%] rounded-xl' />
          </div>
        </div>
        {children}
      </a>
    </div>
  )
}

export default TileStory
