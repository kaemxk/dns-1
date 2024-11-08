import clsx from 'clsx'
import { FC, useMemo } from 'react'
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom'

import { useResize } from '@/shared/hooks'

const PartnersQuestion: FC = () => {
  const windowWidth = useResize()
  const isMobile = useMemo(() => windowWidth <= 500, [windowWidth])

  const cardsStyle = clsx('max-w-[560px]', {
    'block' : isMobile,
    'flex justify-between flex-wrap' : !isMobile,
  })

  return (
    <div className={cardsStyle}>
      <Link to='#' className='flex items-center justify-between w-1/2 max-w-[270px] mb-6 h-[106px] bg-[#f7f7f7] rounded-[12px] duration-300 hover:text-orange-500 hover:shadow-lg hover:bg-white'>
        <div className='flex flex-col ml-4'>
          <div className='flex w-[120px]'>
            Поставщикам товаров
            <div className='relative top-[29px] right-[42px]'><GoArrowRight color='#AFAFAF'/></div> 
          </div>
        </div>
          <div className='relative left-1.5 flex items-center'>
            <img src='/images/product.png' alt='product' />
          </div>
      </Link>

      <Link to='#' className='flex items-center justify-between w-1/2 max-w-[270px] mb-6 h-[106px] bg-[#f7f7f7] rounded-[12px] duration-300 hover:text-orange-500 hover:shadow-lg hover:bg-white'>
        <div className='flex flex-col ml-4'>
          <div className='flex w-[120px]'>
            Поставщикам услуг
            <span className='relative top-[29px] right-[62px]'><GoArrowRight color='#AFAFAF'/></span> 
          </div>
        </div>
          <div className='relative left-1.5 flex items-center'>
            <img src='/images/hands.png' alt='hands' />
          </div>
      </Link>

      <Link to='#' className='flex items-center justify-between w-1/2 max-w-[270px] mb-6 h-[106px] bg-[#f7f7f7] rounded-[12px] duration-300 hover:text-orange-500 hover:shadow-lg hover:bg-white'>
        <div className='flex flex-col ml-4'>
          <div className='flex w-[120px]'>
            Кредитным организациям
            <span className='relative top-[29px] left-[2px]'><GoArrowRight color='#AFAFAF'/></span> 
          </div>
        </div>
          <div className='relative left-1.5 flex items-center'>
            <img src='/images/money.png' alt='money' />
          </div>
      </Link>

      <Link to='#' className='flex items-center justify-between w-1/2 max-w-[270px] mb-6 h-[106px] bg-[#f7f7f7] rounded-[12px] duration-300 hover:text-orange-500 hover:shadow-lg hover:bg-white'>
        <div className='flex flex-col ml-4'>
          <div className='flex w-[120px]'>
            Предложения по аренде
            <span className='relative top-[29px] right-[26px]'><GoArrowRight color='#AFAFAF'/></span> 
          </div>
        </div>
          <div className='relative left-1.5 flex items-center'>
            <img src='/images/landlord.png' alt='landlord' />
          </div>
      </Link>
    </div>
  )
}

export default PartnersQuestion
