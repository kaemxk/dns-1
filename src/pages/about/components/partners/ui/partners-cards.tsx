import clsx from 'clsx'
import { FC, useMemo } from 'react'
import { GoArrowRight } from 'react-icons/go'
import { Link } from 'react-router-dom'

import { useResize } from '@/shared/hooks'

const PartnersQuestion: FC = () => {
  const windowWidth = useResize()
  const isMobile = useMemo(() => windowWidth <= 500, [windowWidth])

  const cardsStyle = clsx('max-w-[560px]', {
    block: isMobile,
    'flex justify-between flex-wrap': !isMobile,
  })

  return (
    <div className={cardsStyle}>
      <Link
        to='#'
        className='mb-6 flex h-[106px] w-1/2 max-w-[270px] items-center justify-between rounded-[12px] bg-[#f7f7f7] duration-300 hover:bg-white hover:text-orange-500 hover:shadow-lg'
      >
        <div className='ml-4 flex flex-col'>
          <div className='flex w-[120px]'>
            Поставщикам товаров
            <div className='relative right-[42px] top-[29px]'>
              <GoArrowRight color='#AFAFAF' />
            </div>
          </div>
        </div>
        <div className='relative left-1.5 flex items-center'>
          <img src='/images/product.png' alt='product' />
        </div>
      </Link>

      <Link
        to='#'
        className='mb-6 flex h-[106px] w-1/2 max-w-[270px] items-center justify-between rounded-[12px] bg-[#f7f7f7] duration-300 hover:bg-white hover:text-orange-500 hover:shadow-lg'
      >
        <div className='ml-4 flex flex-col'>
          <div className='flex w-[120px]'>
            Поставщикам услуг
            <span className='relative right-[62px] top-[29px]'>
              <GoArrowRight color='#AFAFAF' />
            </span>
          </div>
        </div>
        <div className='relative left-1.5 flex items-center'>
          <img src='/images/hands.png' alt='hands' />
        </div>
      </Link>

      <Link
        to='#'
        className='mb-6 flex h-[106px] w-1/2 max-w-[270px] items-center justify-between rounded-[12px] bg-[#f7f7f7] duration-300 hover:bg-white hover:text-orange-500 hover:shadow-lg'
      >
        <div className='ml-4 flex flex-col'>
          <div className='flex w-[120px]'>
            Кредитным организациям
            <span className='relative left-[2px] top-[29px]'>
              <GoArrowRight color='#AFAFAF' />
            </span>
          </div>
        </div>
        <div className='relative left-1.5 flex items-center'>
          <img src='/images/money.png' alt='money' />
        </div>
      </Link>

      <Link
        to='#'
        className='mb-6 flex h-[106px] w-1/2 max-w-[270px] items-center justify-between rounded-[12px] bg-[#f7f7f7] duration-300 hover:bg-white hover:text-orange-500 hover:shadow-lg'
      >
        <div className='ml-4 flex flex-col'>
          <div className='flex w-[120px]'>
            Предложения по аренде
            <span className='relative right-[26px] top-[29px]'>
              <GoArrowRight color='#AFAFAF' />
            </span>
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
