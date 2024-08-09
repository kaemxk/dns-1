import React from 'react'

import TileOne from './tileOne'
import TileTwo from './tileTwo'
import TileThree from './tileThree'

interface ITile {
  variant: string
  marginRight: string
  backgroundColor: string
  borderRadius: string
  title: string
  text: string
  color: string
  srcImage: string
  newPrice: string
  oldPrice: string
}

export const Tile: React.FC<ITile> = ({
  variant,
  marginRight,
  backgroundColor,
  borderRadius,
  title,
  text,
  color,
  srcImage,
  newPrice,
  oldPrice,
}) => {
  return (
    <>
      {variant === 'one' && (
        <TileOne
          marginRight={marginRight}
          backgroundColor={backgroundColor}
          borderRadius={borderRadius}
          srcImage={srcImage}
          color={color}
          text={text}
        />
      )}
      {variant === 'two' && (
        <TileTwo marginRight={marginRight} srcImage={srcImage} title={title} text={text} />
      )}
      {variant === 'three' && (
        <TileThree
          marginRight={marginRight}
          title={title}
          text={text}
          oldPrice={oldPrice}
          newPrice={newPrice}
          srcImage={srcImage}
        />
      )}
    </>
  )
}
