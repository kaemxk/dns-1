import React from 'react'

import TileStory from './tileStory'
import TileFeature from './tileFeature'
import TileGoods from './tileGoods'

interface ITile {
  variant: 'story-card' | 'feature-card' | 'goods-card'
  backgroundColor?: string
  borderRadius?: string
  srcImage: string
  handleClick: () => void
  children: React.ReactNode
}

export const Tile: React.FC<ITile> = ({
  variant,
  backgroundColor = '',
  borderRadius = '',
  srcImage,
  handleClick,
  children,
}) => {
  return (
    <>
      {variant === 'story-card' && (
        <TileStory
          handleClick={handleClick}
          className={{ backgroundColor, borderRadius }}
          srcImage={srcImage}
        >
          {children}
        </TileStory>
      )}
      {variant === 'feature-card' && (
        <TileFeature handleClick={handleClick} srcImage={srcImage}>
          {children}
        </TileFeature>
      )}
      {variant === 'goods-card' && (
        <TileGoods handleClick={handleClick} srcImage={srcImage}>
          {children}
        </TileGoods>
      )}
    </>
  )
}
