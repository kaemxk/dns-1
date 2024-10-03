import clsx from 'clsx'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'

import { useResize } from '@/shared/hooks/use-resize'
import SwiperHOC from '@/shared/ui/swiper-hoc/swiper-hoc'

import { brands } from '../model/brands'

export const Brands: React.FC = () => {
  const windowWidth = useResize()
  const isMobile = useMemo(() => windowWidth <= 992, [windowWidth])

  return (
    <div
      className={clsx(
        'scrollbar-hide flex w-full snap-x snap-mandatory gap-4 overflow-x-auto overscroll-contain pr-4',
        isMobile ? 'mb-6' : 'mb-[60px]',
      )}
    >
      <SwiperHOC
        data={brands}
        id='brands'
        isMobile={isMobile}
        swiperClassName='group relative'
        swiperSlideClassName={isMobile ? 'w-[112px]' : 'w-[132px]'}
      >
        {brand => (
          <Link to={brand.url}>
            <div
              className='flex h-16 w-full cursor-pointer flex-col justify-between overflow-hidden rounded-[16px] border border-white bg-white p-4 shadow-sm transition duration-300 hover:border-gray-500 hover:bg-gray-100 lg:hover:border-gray-500'
              style={isMobile ? { height: '57px' } : { height: '69px' }}
            >
              {isMobile ? (
                <div
                  className='h-30 w-30 transition-filter object-fit-contain absolute right-[15px] bg-contain bg-center bg-no-repeat duration-300 hover:brightness-110'
                  style={{
                    backgroundImage: `url(${brand.image})`,
                    width: '78px',
                    height: '23px',
                  }}
                />
              ) : (
                <div
                  className='h-30 w-30 transition-filter object-fit-contain absolute right-[25px] bg-contain bg-center bg-no-repeat duration-300 hover:brightness-110'
                  style={{
                    backgroundImage: `url(${brand.image})`,
                    width: '86px',
                    height: '31px',
                  }}
                />
              )}
            </div>
          </Link>
        )}
      </SwiperHOC>
    </div>
  )
}
