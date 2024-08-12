import React from 'react'

import TileStory from './tileStory'
import TileFeature from './tileFeature'
import TileGoods from './tileGoods'

interface ITileData {
  title?: string
  text: string
  newPrice?: string
  oldPrice?: string
}

interface ITile {
  variant: 'story-card' | 'feature-card' | 'goods-card'
  backgroundColor?: string
  borderRadius?: string
  color?: string
  srcImage: string
  children: ITileData
}

export const Tile: React.FC<ITile> = ({
  variant,
  backgroundColor = '',
  borderRadius = '',
  color = '',
  srcImage,
  children,
}) => {
  return (
    <>
      {variant === 'story-card' && (
        <TileStory
          backgroundColor={backgroundColor}
          borderRadius={borderRadius}
          srcImage={srcImage}
          color={color}
          text={children.text}
        />
      )}
      {variant === 'feature-card' && (
        <TileFeature srcImage={srcImage} title={children.title as string} text={children.text} />
      )}
      {variant === 'goods-card' && (
        <TileGoods
          title={children.title as string}
          text={children.text}
          oldPrice={children.oldPrice as string}
          newPrice={children.newPrice as string}
          srcImage={srcImage}
        />
      )}
    </>
  )
}
