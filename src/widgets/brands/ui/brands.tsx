import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useResize } from '@/shared/hooks/use-resize'
import { brands } from '@/widgets/brands/model/brands'

import 'swiper/swiper-bundle.css'

export const Brands: React.FC = () => {
  const windowWidth = useResize()
  const isMobile = useMemo(() => windowWidth <= 992, [windowWidth])

  return (
    <div className='scrollbar-hide group relative flex w-full snap-x snap-mandatory gap-4 overflow-x-auto overscroll-contain pr-4'>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView='auto'
        style={{ paddingLeft: '16px', paddingRight: '16px' }}
      >
        {brands.map((brand, index) => (
          <Link to={brand.url} key={index}>
            <SwiperSlide key={index} style={isMobile ? { width: '112px' } : { width: '132px' }}>
              <div
                className='mb-2 flex h-80 w-full cursor-pointer flex-col justify-between overflow-hidden rounded-[16px] border border-white bg-white p-4 shadow-md shadow-sm transition-all transition-transform duration-300 hover:border-gray-500 hover:bg-gray-100 lg:hover:border-gray-500'
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
            </SwiperSlide>
          </Link>
        ))}
      </Swiper>
    </div>
  )
}
