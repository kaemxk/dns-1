import clsx from 'clsx'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper-bundle.css'
import '../model/action-tinder.css'

import { useResize } from '../../../shared/hooks/use-resize'
import { tinders } from '../model/tinder'

export const ActionTinder = () => {
  const windowWidth = useResize()

  return (
    <div
      className={clsx(
        'actions',
        'scrollbar-hide group relative flex w-full snap-x snap-mandatory gap-4 overflow-x-auto overscroll-contain pr-4',
      )}
    >
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView='auto'
        navigation={windowWidth > 992}
        style={{ paddingLeft: '16px', paddingRight: '16px' }}
      >
        {tinders.map((tinder, index) => (
          <SwiperSlide key={index} style={{ width: '314px' }}>
            <div
              className='mb-2 flex h-80 w-full flex-col justify-between overflow-hidden rounded-lg p-4 shadow-md transition-transform duration-300'
              style={{ height: '206px' }}
            >
              <div className='font-weight-700 font-size-18 line-height-22 color-#333 mb-0.5 whitespace-pre-line'>
                <strong>{tinder.discount}</strong>
              </div>
              <div className='line-height-20 color-#333 text-decoration-none mb-0.5 max-h-40 overflow-hidden text-sm'>
                {tinder.naming}
              </div>
              <div className='mb-0.5 flex items-baseline'>
                <div className='text-xl font-bold text-orange-500'>{tinder.price}</div>
                <div className='ml-2 text-sm text-gray-400 line-through'>
                  {tinder.priceDiscount}
                </div>
              </div>
              <button
                className='solid-#d9d9d9 flex items-center justify-center rounded-lg border hover:bg-gray-50'
                style={{ width: '128px', height: '44px' }}
              >
                Подробнее
              </button>
              <div className='relative'>
                <div
                  className='h-30 w-30 transition-filter object-fit-contain absolute bottom-[-30px] right-[-5px] bg-contain bg-center bg-no-repeat duration-300 hover:brightness-110'
                  style={{
                    backgroundImage: `url(${tinder.image})`,
                    width: index === tinders.length - 1 ? '200px' : '120px',
                    height: index === tinders.length - 1 ? '200px' : '120px',
                  }}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
