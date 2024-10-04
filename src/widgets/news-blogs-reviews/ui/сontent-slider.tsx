import { Card } from './card'
import { Skeletons } from './skeletons'
import { useGetSliderContentQuery } from '@/shared/redux/api/baseApi'

// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { FreeMode } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

export const ContentSlider = () => {
  const { data: contentData, isLoading: isContentLoading, error } = useGetSliderContentQuery()

  if (isContentLoading) {
    return <Skeletons />
  }
  if (error) {
    return <div>Что то пошло не так...</div>
  }
  if (!contentData) {
    return null
  }
  // if (contentData) {
  //   console.log(contentData.data.items)
  // }
  if (contentData)
    return (
      <>
        <div className='content-slider__bottoms-container ml-5 mt-5 flex gap-2'>
          <div
            // onClick={handlerClickCatalogOpen}
            className='content-slider-bottom__catalog visible mb-0 flex cursor-pointer flex-row rounded-lg bg-white bg-opacity-15 pb-2.5 pl-5 pr-4 pt-2.5 text-center font-bold text-white shadow-xl hover:bg-opacity-20'
          >
            <span className='content-slider__bottom-title mr-0 select-none text-black'>Все</span>
          </div>
          <div
            // onClick={handlerClickCatalogOpen}
            className='content-slider-bottom__catalog cursor-pointer rounded-lg bg-gray-100 pb-2.5 pl-4 pr-4 pt-3 text-center hover:bg-gray-200'
          >
            <span className='content-slider__bottom-title mr-0 select-none text-black'>
              Новости
            </span>
          </div>
          <div
            // onClick={handlerClickCatalogOpen}
            className='content-slider-bottom__catalog cursor-pointer rounded-lg bg-gray-100 pb-2.5 pl-4 pr-4 pt-3 text-center hover:bg-gray-200'
          >
            <span className='content-slider__bottom-title mr-0 select-none text-black'>Блоги</span>
          </div>
          <div
            // onClick={handlerClickCatalogOpen}
            className='content-slider-bottom__catalog cursor-pointer rounded-lg bg-gray-100 pb-2.5 pl-4 pr-4 pt-3 text-center hover:bg-gray-200'
          >
            {' '}
            <span className='content-slider__bottom-title tex mr-0 select-none text-black'>
              Обзоры
            </span>
          </div>
        </div>
        <div className='swiper-wrapper content-slider__cards-container ml-5 mt-5 flex gap-4'>
          <Swiper
            modules={[FreeMode, Navigation]}
            spaceBetween={10}
            slidesPerView='auto'
            freeMode={true}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            className='group relative'
          >
            {contentData.data.items.slice(0, 50).map(item => {
              return (
                <SwiperSlide
                  key={item.id}
                  className='flex h-[220px] w-[186px] flex-col justify-between'
                >
                  <Card contentData={item} />
                </SwiperSlide>
              )
            })}
            <div className="swiper-button-prev flex h-[48px] w-[48px] items-center justify-center rounded-full bg-white opacity-0 transition-all after:text-[10px] after:text-black after:content-['\003C'] hover:scale-110 hover:shadow-lg hover:duration-300 group-hover:opacity-100" />
            <div className="swiper-button-next flex h-[48px] w-[48px] items-center justify-center rounded-full bg-white opacity-0 transition-all after:text-[10px] after:text-black after:content-['\003E'] hover:scale-110 hover:shadow-lg hover:duration-300 group-hover:opacity-100" />
          </Swiper>
        </div>
      </>
    )
}
