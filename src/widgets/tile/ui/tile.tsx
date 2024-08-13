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
  srcImage: string
  children: ITileData
}

export const Tile: React.FC<ITile> = ({
  variant,
  backgroundColor = '',
  borderRadius = '',
  srcImage,
  children,
}) => {
  const handleClick: () => void = () => {
    console.log('clicked')
  }

  return (
    <>
      {variant === 'story-card' && (
        <TileStory
          onClick={() => handleClick()}
          className={{ backgroundColor, borderRadius }}
          srcImage={srcImage}
          text={children.text}
        />
      )}
      {variant === 'feature-card' && (
        <TileFeature
          onClick={() => handleClick()}
          srcImage={srcImage}
          title={children.title as string}
          text={children.text}
        />
      )}
      {variant === 'goods-card' && (
        <TileGoods
          onClick={() => handleClick()}
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
