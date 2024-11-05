import clsx from 'clsx'
import { FC, useMemo } from 'react'
import { FaRegLightbulb } from 'react-icons/fa6'
import { HiMiniArrowTrendingUp } from 'react-icons/hi2'
import { HiOutlineSparkles } from 'react-icons/hi2'
import { RiRobot2Line } from 'react-icons/ri'

import { useResize } from '@/shared/hooks'

const CareerIntro: FC = () => {
  const windowWidth = useResize()
  const isMobile = useMemo(() => windowWidth <= 1023, [windowWidth])

  const cardStyle = clsx('flex items-center max-w-[238px] text-[14px] leading-[20px] box-border')
  const cardTextStyle = clsx('block max-w-full ml-2')
  const alienImgStyle = clsx(
    'top-0 right-0 w-full max-w-64 -mr-3',
    {
      absolute: !isMobile,
    },
    {
      'static ml-auto mr-auto h-auto': isMobile,
    },
  )

  return (
    <div className='relative'>
      <h2 className='mb-6 text-2xl font-bold'>Сотрудники DNS профессионалы своего дела</h2>
      <div className={alienImgStyle}>
        <div
          className='h-52 w-full bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: `url(/images/vacancies-alien.png)` }}
        ></div>
      </div>
      <div className='grid max-w-[506px] grid-cols-2 gap-x-8 gap-y-3 pb-[62px]'>
        <div className={cardStyle}>
          <div className='icon-container'>
            <RiRobot2Line color='#FC8507' size={24}></RiRobot2Line>
          </div>
          <div className={cardTextStyle}>Одними из первых знакомятся с новинками</div>
        </div>
        <div className={cardStyle}>
          <div className='icon-container'>
            <HiOutlineSparkles color='#FC8507' size={24}></HiOutlineSparkles>
          </div>
          <div className={cardTextStyle}>Огромное пространство возможностей</div>
        </div>
        <div className={cardStyle}>
          <div className='icon-container'>
            <FaRegLightbulb color='#FC8507' size={24}></FaRegLightbulb>
          </div>
          <div className={cardTextStyle}>Постоянное обучение и развитие</div>
        </div>
        <div className={cardStyle}>
          <div className='icon-container'>
            <HiMiniArrowTrendingUp color='#FC8507' size={24}></HiMiniArrowTrendingUp>
          </div>
          <div className={cardTextStyle}>Быстрый и прозрачный рост</div>
        </div>
      </div>
    </div>
  )
}

export default CareerIntro
