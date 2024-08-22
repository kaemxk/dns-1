import { FC } from 'react'

import TileStory from './tileStory'
import TileFeature from './tileFeature'
import TileGoods from './tileGoods'
import { ITile } from './interface'

export const Tile: FC<ITile> = ({
  variant = 'story-card',
  className = '',
  borderRadius = '',
  srcImage = '',
  handleClick = () => {},
  children,
}) => {
  return (
    <>
      {variant === 'story-card' && (
        <TileStory
          handleClick={handleClick}
          className={className}
          srcImage={srcImage}
          borderRadius={borderRadius}
        >
          {children}
        </TileStory>
      )}
      {variant === 'feature-card' && (
        <TileFeature handleClick={handleClick} className={className} srcImage={srcImage}>
          {children}
        </TileFeature>
      )}
      {variant === 'goods-card' && (
        <TileGoods handleClick={handleClick} className={className} srcImage={srcImage}>
          {children}
        </TileGoods>
      )}
    </>
  )
}
