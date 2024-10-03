import SwiperHOC from '@/shared/ui/swiper-hoc/swiper-hoc'
import { useResize } from '@/shared/hooks/use-resize'
import { useMemo } from 'react'
import clsx from 'clsx'

import { tinders } from '../model/tinder'
// import '../model/action-tinder.css' // TODO: remove in both places
export const ActionTinder = () => {
  const windowWidth = useResize()
  const isMobile = useMemo(() => windowWidth <= 992, [windowWidth])

  return (
    <div className={clsx('actions', 'flex w-full pr-4', isMobile ? 'mb-6' : 'mb-[60px]')}>
      <SwiperHOC
        data={tinders}
        id='action-tinders'
        isMobile={isMobile}
        swiperSlideClassName='w-[314px]'
      >
        {(tinder, index) => (
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
              <div className='ml-2 text-sm text-gray-400 line-through'>{tinder.priceDiscount}</div>
            </div>
            <button
              className='solid-#d9d9d9 flex items-center justify-center rounded-lg border hover:bg-gray-50'
              style={{ width: '128px', height: '44px' }}
            >
              Подробнее
            </button>
            <div className='relative'>
              <div
                className='h-30 w-30 transition-filter object-fit-contain absolute bottom-[-30px] right-[-5px] bg-contain bg-center bg-no-repeat duration-300'
                style={{
                  backgroundImage: `url(${tinder.image})`,
                  width: index === tinders.length - 1 ? '200px' : '120px',
                  height: index === tinders.length - 1 ? '200px' : '120px',
                }}
              />
            </div>
          </div>
        )}
      </SwiperHOC>
    </div>
  )
}
