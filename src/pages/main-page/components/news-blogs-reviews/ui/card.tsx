import { Link } from 'react-router-dom'

import { randomRadius } from '@/shared/utils/mathUtils'
import { getRandomRgbColor } from '@/shared/utils/styleUtils'
import {trimText} from '@/shared/utils/textUtils'

import { Item } from './content-slider.types'

interface CardProps {
  contentData: Item
}

export const Card = (contentData: CardProps) => {
  const radius = {
    rightTop: randomRadius(),
    leftTop: randomRadius(),
    rightBottom: randomRadius(),
    leftBottom: randomRadius(),
  }

  const trimmedText = trimText(contentData.contentData.title, 50)

  const backgroundColor = getRandomRgbColor()

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
            borderRadius: `${12}px ${12}px ${radius.rightBottom}% ${radius.leftBottom}% / ${12}px ${12}px ${radius.rightTop}% ${radius.leftTop}%`,
          }}
        />
        <div className='p-3 text-[14px] font-bold text-black hover:text-orange-500'>
          {trimmedText}
        </div>
      </div>
    </Link>
  )
}
