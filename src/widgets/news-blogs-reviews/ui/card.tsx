import { Item } from './content-slider.types'

interface CardProps {
  contentData: Item
}

const randomRadius = () => {
  return Math.floor(Math.random() * 20 + 40)
}
const rightRadius = randomRadius()
const leftRadius = randomRadius()
const rightRadius1 = randomRadius()
const leftRadius1 = randomRadius()

export const Card: React.FC<CardProps> = contentData => {
  function trimText(text: string) {
    if (text.length > 50) {
      const textArray = contentData.contentData.title.split(' ')
      return textArray.slice(0, 5).concat('...').join(' ')
    } else return text
  }
  const trimmedText = trimText(contentData.contentData.title)


  //  console.log(contentData.contentData?.vobler)

  //  bg-zinc-500
  return (
    <a
      className='flex h-[220px] w-[186px] cursor-pointer flex-col justify-between rounded-xl'
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      style={{
        backgroundColor: `${contentData.contentData.vobler[0] ? contentData.contentData.vobler[0].color : 'gray'}`,
      }}
    >
      <img
        src={contentData.contentData.imageUrl}
        style={{
          borderRadius: `${12}px ${12}px ${rightRadius}% ${leftRadius}% / ${12}px ${12}px ${rightRadius1}% ${leftRadius1}%`,
        }}
      />
      <div className='p-3 text-[14px] text-white hover:text-orange-500'>{trimmedText}</div>
    </a>
  )
}
