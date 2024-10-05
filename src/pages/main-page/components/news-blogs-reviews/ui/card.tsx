import { Link } from 'react-router-dom'

import { Item } from './content-slider.types'

interface CardProps {
  contentData: Item
}

const randomRadius = () => {
  return Math.floor(Math.random() * 40) + 40 // Генерируем значение от 200 до 255
}

export const Card: React.FC<CardProps> = contentData => {
  const rightRadius = randomRadius()
  const leftRadius = randomRadius()
  const rightRadius1 = randomRadius()
  const leftRadius1 = randomRadius()

  function trimText(text: string) {
    if (text.length > 50) {
      const textArray = contentData.contentData.title.split(' ')
      return textArray.slice(0, 5).concat('...').join(' ')
    } else return text
  }
  const trimmedText = trimText(contentData.contentData.title)

  function getRandomColor() {
    const r = Math.floor(Math.random() * 56) + 180 // Генерируем значение от 200 до 255
    const g = Math.floor(Math.random() * 56) + 180 // Генерируем значение от 200 до 255
    const b = Math.floor(Math.random() * 56) + 180 // Генерируем значение от 200 до 255
    return `rgb(${r}, ${g}, ${b})`
  }

  // Пример использования
  const backgroundColor = getRandomColor()

  return (
    <Link to='#'>
      <div
        className='flex h-[220px] w-[186px] cursor-pointer flex-col justify-between rounded-xl'
        style={{
          backgroundColor: `${backgroundColor}`,
        }}
      >
        <img
          src={contentData.contentData.imageUrl}
          alt={contentData.contentData.title}
          style={{
            borderRadius: `${12}px ${12}px ${rightRadius}% ${leftRadius}% / ${12}px ${12}px ${rightRadius1}% ${leftRadius1}%`,
          }}
        />
        <div className='p-3 text-[14px] font-bold text-black hover:text-orange-500'>
          {trimmedText}
        </div>
      </div>
    </Link>
  )
}
