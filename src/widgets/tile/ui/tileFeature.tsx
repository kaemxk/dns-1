import React from 'react'

interface ITileFeature {
  srcImage: string
  title: string
  text: string
}

const TileFeature: React.FC<ITileFeature> = ({ srcImage, title, text }) => {
  return (
    <div
      style={{ background: `url(${srcImage}) 0% 0% / contain no-repeat` }}
      className='box-border h-[206px] w-[183px] cursor-pointer rounded-2xl duration-200 hover:brightness-[1.02]'
    >
      <a className='block h-full px-5 py-6 text-neutral-900 no-underline'>
        <div className='mb-2 text-lg font-bold leading-[22px]'>{title}</div>
        <div className='text-sm leading-[18px]'>{text}</div>
      </a>
    </div>
  )
}

export default TileFeature
