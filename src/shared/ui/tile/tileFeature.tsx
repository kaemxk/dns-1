import { FC } from 'react'

import { ITileVariant } from '@/shared/intefaces/tile/tile'

const TileFeature: FC<ITileVariant> = ({ handleClick, className, srcImage, children }) => {
  return (
    <div
      style={{ background: `url(${srcImage}) 0% 0% / contain no-repeat` }}
      className={`${className} box-border h-[206px] w-[183px] cursor-pointer rounded-2xl duration-200 hover:brightness-[1.02]`}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}

export default TileFeature
