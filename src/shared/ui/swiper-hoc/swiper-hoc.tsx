import { nanoid } from '@reduxjs/toolkit'
import clsx from 'clsx'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

import type ISwiperHOCProps from './interface'
import './swiper-hoc.css'

/*
  Use example:
  
  <SwiperHOC
    data={data}
    id='*block-name*'
    isMobile={isMobile}
    swiperClassName='*some styles*' - *group relative* already included
    swiperSlideClassName='*flex h-[400px] w-[260px]*' for size of each slide
  >
    {*names* => (
      <div>{*names.name*}</div>
    )}
  </SwiperHOC>
*/

const SwiperHOC = <T extends unknown[] | undefined>({
  children,
  data,
  id,
  isMobile,
  swiperClassName,
  swiperWrapperClassName,
  swiperSlideClassName,
  optionalContent, // Новый пропс для дополнительного контента
  swiperSlideOptContentClassName,
}: ISwiperHOCProps<T>) => {
  const hasData = !!data && !!data.length

  return (
    <Swiper
      key={isMobile ? `${id}-mobile` : `${id}-desktop`}
      spaceBetween={16}
      slidesPerView='auto'
      modules={[Navigation]}
      navigation={{
        prevEl: `.swiper-${id}-btn-prev`,
        nextEl: `.swiper-${id}-btn-next`,
      }}
      className={clsx('group relative', swiperClassName)}
      // 0 means: can't scroll outside of container
      resistanceRatio={0}
      wrapperClass={clsx(
        { '!ease-linear': !isMobile },
        {
          // problems with padding
          'overflow-x-auto overscroll-contain snap-x mandatory scroll-padding-x-4 px-4 scrollbar-none':
            isMobile,
        },
        swiperWrapperClassName,
      )}
      enabled={!isMobile}
      init={!isMobile}
      freeMode={
        isMobile
          ? false
          : {
              enabled: true,
              momentum: false, // momentun can be omitted
              sticky: false,
            }
      }
    >
      {hasData &&
        data.map((item, index) => (
          <SwiperSlide
            key={`${id}-slide-${nanoid(6)}`}
            className={clsx('snap-start', swiperSlideClassName)}
          >
            {children(item, index)}
          </SwiperSlide>
        ))}

      {/* опциональный контент, если он передан */}
      {optionalContent && (
        <SwiperSlide
          key={`${id}-slide-${nanoid(6)}`}
          className={clsx('snap-start', swiperSlideOptContentClassName)}
        >
          {optionalContent}
        </SwiperSlide>
      )}

      {/* swiper-button-(prev|next) = basic styles */}
      {/* swiper-${id}-btn-(prev|next) = id for navigation*/}
      {!isMobile && (
        <>
          <button
            className={`swiper-button-prev swiper-${id}-btn-prev flex items-center justify-center rounded-full border-black bg-white shadow-lg hover:scale-[1.1] hover:after:opacity-90 group-hover:opacity-100`}
          />
          <button
            className={`swiper-button-next swiper-${id}-btn-next flex items-center justify-center rounded-full border-black bg-white shadow-lg hover:scale-[1.1] hover:after:opacity-90 group-hover:opacity-100`}
          />
        </>
      )}
    </Swiper>
  )
}

export default SwiperHOC
