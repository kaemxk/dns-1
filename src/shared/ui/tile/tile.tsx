import { FC } from 'react'

import TileStory from './tileStory'
import TileFeature from './tileFeature'
import TileGoods from './tileGoods'
import { ITile } from '@/shared/intefaces/tile/tile'

export const Tile: FC<ITile> = ({
  variant = 'story-card',
  styles = '',
  backgroundColor = '',
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
          className={{ backgroundColor, borderRadius, styles }}
          srcImage={srcImage}
        >
          {children}
        </TileStory>
      )}
      {variant === 'feature-card' && (
        <TileFeature handleClick={handleClick} className={styles} srcImage={srcImage}>
          {children}
        </TileFeature>
      )}
      {variant === 'goods-card' && (
        <TileGoods handleClick={handleClick} className={styles} srcImage={srcImage}>
          {children}
        </TileGoods>
      )}
    </>
  )
}
