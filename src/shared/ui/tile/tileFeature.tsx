import { FC } from 'react'
import clsx from 'clsx'

import { ITileVariant } from './interface'

const TileFeature: FC<ITileVariant> = ({ handleClick, className, srcImage, children }) => {
  return (
    <div
      style={{ background: `url(${srcImage}) 0% 0% / contain no-repeat` }}
      className={clsx(
        className,
        'box-border h-[206px] w-[183px] cursor-pointer rounded-2xl duration-200 hover:brightness-[1.02]',
      )}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}

export default TileFeature
