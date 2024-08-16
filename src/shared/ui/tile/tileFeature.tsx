import React from 'react'

interface ITileFeature {
  handleClick: () => void
  srcImage: string
  children: React.ReactNode
}

const TileFeature: React.FC<ITileFeature> = ({ handleClick, srcImage, children }) => {
  return (
    <div
      style={{ background: `url(${srcImage}) 0% 0% / contain no-repeat` }}
      className='box-border h-[206px] w-[183px] cursor-pointer rounded-2xl duration-200 hover:brightness-[1.02]'
      onClick={handleClick}
    >
      <a className='block h-full px-5 py-6 text-neutral-900 no-underline'>{children}</a>
    </div>
  )
}

export default TileFeature
