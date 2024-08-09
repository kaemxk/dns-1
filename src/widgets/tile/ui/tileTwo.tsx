import React from 'react'

interface ITileTwo {
  marginRight: string
  srcImage: string
  title: string
  text: string
}

const TileTwo: React.FC<ITileTwo> = ({ marginRight, srcImage, title, text }) => {
  return (
    <div
      style={{ marginRight, background: `url(${srcImage}) 0% 0% / contain no-repeat` }}
      className='box-border h-[206px] w-[183px] cursor-pointer rounded-2xl font-pt-sans duration-200 hover:brightness-[1.02]'
    >
      <a className='block h-full px-5 py-6 text-brownFont no-underline'>
        <div className='mb-2 text-lg font-bold leading-[22px]'>{title}</div>
        <div className='text-sm leading-[18px]'>{text}</div>
      </a>
    </div>
  )
}

export default TileTwo
