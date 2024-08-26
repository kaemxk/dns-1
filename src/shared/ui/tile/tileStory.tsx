import { FC } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

import { ITileStory } from './interface'

const TileStory: FC<ITileStory> = ({
  handleClick,
  className,
  borderRadius,
  srcImage,
  children,
}) => {
  return (
    <div
      className={clsx(
        className,
        'relative box-border h-[220px] w-[186px] cursor-pointer overflow-hidden rounded-xl text-xs font-bold leading-5 text-white',
      )}
      onClick={handleClick}
    >
      <Link to='#' className='block h-full w-full text-white no-underline'>
        <div className='absolute left-2/4 top-0 mx-auto my-0 max-h-32 w-[125%] -translate-x-2/4'>
          <div
            style={{ borderRadius }}
            className='flex h-full max-h-32 w-full justify-center overflow-hidden'
          >
            <img src={srcImage} alt='story-image' className='h-full max-h-32 w-[81%] rounded-xl' />
          </div>
        </div>
        {children}
      </Link>
    </div>
  )
}

export default TileStory
